/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
let exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// A simple Book class (using constructor function in JS)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Function to display book information
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    if (!bookList)
        return;
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;
    bookList.appendChild(bookDiv);
}
// Create some book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
// Display the books on the webpage
displayBook(book1);
displayBook(book2);
function addReview(bookId, rating, comment) {
    let review = [];
    review.push({ bookId, rating, comment });
    return review;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEseURBQXlEO0FBQ3pELE1BQU0sSUFBSTtJQUlSLFlBQVksS0FBWSxFQUFFLE1BQWEsRUFBRSxJQUFXO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FFQTtBQUVELHVDQUF1QztBQUN2QyxTQUFTLFdBQVcsQ0FBQyxJQUFTO0lBQzVCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLFNBQVMsR0FBRztVQUNaLElBQUksQ0FBQyxLQUFLO1lBQ1IsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSTtHQUNsQyxDQUFDO0lBQ0YsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsMkJBQTJCO0FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV4RSxtQ0FBbUM7QUFDbkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25CLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQWtCbkIsU0FBUyxTQUFTLENBQUMsTUFBYSxFQUFFLE1BQWEsRUFBRSxPQUFjO0lBQzdELElBQUksTUFBTSxHQUFZLEVBQUU7SUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUM7SUFDdEMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1bmRsZXItYWN0aXZpdHkvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIEEgc2ltcGxlIEJvb2sgY2xhc3MgKHVzaW5nIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGluIEpTKVxyXG5jbGFzcyBCb29re1xyXG4gIHRpdGxlOnN0cmluZzsgXHJcbiAgYXV0aG9yOnN0cmluZzsgXHJcbiAgeWVhcjpudW1iZXI7XHJcbiAgY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLCBhdXRob3I6c3RyaW5nLCB5ZWFyOm51bWJlcil7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcclxuICAgIHRoaXMueWVhciA9IHllYXI7XHJcbn1cclxuXHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYm9vayBpbmZvcm1hdGlvblxyXG5mdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rOkJvb2spOnZvaWQge1xyXG4gIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XHJcbiAgaWYgKCFib29rTGlzdCkgcmV0dXJuO1xyXG4gIGNvbnN0IGJvb2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvb2tEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgyPiR7Ym9vay50aXRsZX08L2gyPlxyXG4gICAgPHA+QnkgJHtib29rLmF1dGhvcn0sICR7Ym9vay55ZWFyfTwvcD5cclxuICBgO1xyXG4gIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgc29tZSBib29rIG9iamVjdHNcclxuY29uc3QgYm9vazEgPSBuZXcgQm9vayhcIlRoZSBIb2JiaXRcIiwgXCJKLlIuUi4gVG9sa2llblwiLCAxOTM3KTtcclxuY29uc3QgYm9vazIgPSBuZXcgQm9vayhcIlRoZSBMb3JkIG9mIHRoZSBSaW5nc1wiLCBcIkouUi5SLiBUb2xraWVuXCIsIDE5NTQpO1xyXG5cclxuLy8gRGlzcGxheSB0aGUgYm9va3Mgb24gdGhlIHdlYnBhZ2VcclxuZGlzcGxheUJvb2soYm9vazEpO1xyXG5kaXNwbGF5Qm9vayhib29rMik7XHJcblxyXG4vLyAtLS0gVGFza3MgKENvbnZlcnRpbmcgdG8gVHlwZVNjcmlwdCkgLS0tXHJcblxyXG4vLyBUYXNrIDE6IEFkZCB0eXBlIGFubm90YXRpb25zIHRvIHRoZSBmdW5jdGlvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXHJcbi8vIFRhc2sgMjogQ29udmVydCB0aGUgQm9vayBmdW5jdGlvbiB0byBhIFR5cGVTY3JpcHQgY2xhc3MuXHJcbi8vIFRhc2sgMzogQ3JlYXRlIGFuIGludGVyZmFjZSBmb3IgYSBcIlJldmlld1wiIG9iamVjdCAod2l0aCBwcm9wZXJ0aWVzIGxpa2UgYm9va0lkLCByYXRpbmcsIGNvbW1lbnQpLlxyXG4vLyBUYXNrIDQ6IEFkZCBhIGZ1bmN0aW9uIHRvIGFkZCBhIHJldmlldyB0byBhIGJvb2sgKHlvdSBjYW4gc2ltdWxhdGUgdGhpcyB3aXRoIGFuIGFycmF5IGZvciBub3cpLlxyXG4vLyBUYXNrIDU6IEFkZCB0eXBlIGFubm90YXRpb25zIHRvIHRoZSBuZXcgdmFyaWFibGVzIGFuZCBmdW5jdGlvbnMgdGhhdCB5b3UgY3JlYXRlZCBpbiBwcmlvciBzdGVwcy5cclxuXHJcbi8vcmV2aWV3IGZlYXR1cmVcclxuXHJcbmludGVyZmFjZSBSZXZpZXd7XHJcbiAgYm9va0lkOm51bWJlcjtcclxuICByYXRpbmc6bnVtYmVyO1xyXG4gIGNvbW1lbnQ6c3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSZXZpZXcoYm9va0lkOm51bWJlciwgcmF0aW5nOm51bWJlciwgY29tbWVudDpzdHJpbmcpOlJldmlld1tde1xyXG4gIGxldCByZXZpZXc6UmV2aWV3W10gPSBbXVxyXG4gIHJldmlldy5wdXNoKHtib29rSWQsIHJhdGluZywgY29tbWVudH0pXHJcbiAgcmV0dXJuIHJldmlldztcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==