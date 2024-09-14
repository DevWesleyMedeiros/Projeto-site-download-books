"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AllApiEndingPoints {
    constructor(bookInformation) {
        this.bookInformation = bookInformation;
        this.endingPoint = `https://openlibrary.org/search.json?q=${this.handleInputLink(this.bookInformation)}`;
    }
    handleInputLink(query) {
        const splitText = query.split(" ");
        const joinText = splitText.join("+");
        return joinText;
    }
    showInformation() {
        if (this.endingPoint) {
            axios_1.default.get(this.endingPoint)
                .then(response => {
                console.log(response.data);
            })
                .catch(error => {
                console.error(error);
            });
        }
        else {
            console.error("Ending point is not defined");
        }
    }
    fetchInformation() {
        this.showInformation();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector("input[type=search]");
    const buttonSearch = document.querySelector(".search-icon");
    if (searchInput && buttonSearch) {
        buttonSearch.addEventListener("click", () => {
            const inputSearchValue = searchInput.value.toUpperCase();
            const api = new AllApiEndingPoints(inputSearchValue);
            api.fetchInformation();
        });
    }
    else {
        console.error("Search input or button not found");
    }
});
class ApiForAutors extends AllApiEndingPoints {
}
class ApiForBookTitle extends AllApiEndingPoints {
}
class ApiForBookCover extends AllApiEndingPoints {
}
class ApiForGeneralInformationAutor extends AllApiEndingPoints {
}
