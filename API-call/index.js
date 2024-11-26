"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
require("jquery");
var AllApiEndingPoints = /** @class */ (function () {
    function AllApiEndingPoints(bookInformation) {
        this.bookInformation = bookInformation;
        this.endingPoint = "https://openlibrary.org/search.json?q=".concat(this.handleInputLink(this.bookInformation));
    }
    AllApiEndingPoints.prototype.handleInputLink = function (query) {
        var splitText = query.split(" ");
        var joinText = splitText.join("+");
        return joinText;
    };
    AllApiEndingPoints.prototype.showInformation = function () {
        if (this.endingPoint) {
            axios_1.default.get(this.endingPoint)
                .then(function (response) {
                console.log(response.data);
            })
                .catch(function (error) {
                console.error(error);
            });
        }
        else {
            console.error("Ending point não esta definido!");
        }
    };
    AllApiEndingPoints.prototype.fetchInformation = function () {
        this.showInformation();
    };
    return AllApiEndingPoints;
}());
document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.querySelector("input[type=search]");
    var buttonSearch = document.querySelector(".search-icon");
    if (searchInput && buttonSearch) {
        buttonSearch.addEventListener("click", function () {
            var inputSearchValue = searchInput.value.trim().toUpperCase();
            var api = new AllApiEndingPoints(inputSearchValue);
            api.fetchInformation();
        });
    }
    else {
        console.error("Search input or button not found");
    }
});
var ApiForAutors = /** @class */ (function (_super) {
    __extends(ApiForAutors, _super);
    function ApiForAutors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiForAutors;
}(AllApiEndingPoints));
;
var ApiForBookTitle = /** @class */ (function (_super) {
    __extends(ApiForBookTitle, _super);
    function ApiForBookTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiForBookTitle;
}(AllApiEndingPoints));
;
var ApiForBookCover = /** @class */ (function (_super) {
    __extends(ApiForBookCover, _super);
    function ApiForBookCover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiForBookCover;
}(AllApiEndingPoints));
var ApiForGeneralInformationAutor = /** @class */ (function (_super) {
    __extends(ApiForGeneralInformationAutor, _super);
    function ApiForGeneralInformationAutor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiForGeneralInformationAutor;
}(AllApiEndingPoints));
;
