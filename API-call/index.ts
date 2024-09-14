import axios from "axios";

class AllApiEndingPoints {
    private bookInformation: string;
    private endingPoint: string;

    constructor(bookInformation: string) {
        this.bookInformation = bookInformation;
        this.endingPoint = `https://openlibrary.org/search.json?q=${this.handleInputLink(this.bookInformation)}`;
    }

    protected handleInputLink(query: string): string {
        const splitText: string[] = query.split(" ");
        const joinText: string = splitText.join("+");
        return joinText;
    }

    private showInformation(): void {
        if (this.endingPoint) {
            axios.get(this.endingPoint)
                .then(response => {
                    console.log(response.data); 
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            console.error("Ending point is not defined");
        }
    }

    public fetchInformation(): void {
        this.showInformation();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector("input[type=search]") as HTMLInputElement;
    const buttonSearch = document.querySelector(".search-icon");

    if (searchInput && buttonSearch) {
        buttonSearch.addEventListener("click", () => {
            const inputSearchValue = searchInput.value.toUpperCase();
            const api = new AllApiEndingPoints(inputSearchValue);
            api.fetchInformation();
        });
    } else {
        console.error("Search input or button not found");
    }
});

class ApiForAutors extends AllApiEndingPoints {}
class ApiForBookTitle extends AllApiEndingPoints {}
class ApiForBookCover extends AllApiEndingPoints {}
class ApiForGeneralInformationAutor extends AllApiEndingPoints {}

