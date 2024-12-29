/* შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. მოცემულობა ესეთია:
1. მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
2. ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი. ნახეთ მაგალითი ფოტოზე. */

let text = document.querySelector('h2');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    if (text.style.color === "black") {
        text.style.color = text.textContent;
    } else {
        text.style.color = "black";
    }
});