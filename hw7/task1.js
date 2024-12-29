//DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.

let image = document.querySelector('img');
let bigButton = document.getElementById("bigButton");
let smallButton = document.getElementById("smallButton");


bigButton.addEventListener('click', () => {
    image.style.width = image.width + 10 + "px";
});

smallButton.addEventListener('click', () => {
    if (image.width > 100) {
        image.style.width = image.width - 10 + "px";
    }
});