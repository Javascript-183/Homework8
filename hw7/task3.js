//შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია. ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.

let button = document.querySelector('button');
let content = document.querySelector('p');

button.addEventListener('click', () => {
    if (button.textContent === 'show') {
        content.style.display = "block";
        button.textContent = 'hide';
    } else {
        content.style.display = "none";
        button.textContent = 'show';
    }
})