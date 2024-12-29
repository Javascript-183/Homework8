//ნებისმიერ HTML ელემენტს, რომელიც Id სელექტორით იქნება მონიშნული მიეცით ყვითელი გარეკანის(background) ფერი.

let idElement = document.querySelectorAll('[id]');
idElement.forEach((element) => {
    element.style.background = "yellow";
});

//ნებისმიერ ელემენტს, რომელსაც alert კლასი ექნება გაწერილი, მიანიჭეთ 1px ნაცრისფერი (gray) კედელი(border).

let alertElement = document.querySelectorAll('.alert');
alertElement.forEach((element) => {
    element.style.border = "1px solid gray";
});

//თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი stop გაწერილი, გახადეთ მისი ფერი წითელი.

let redElement = document.querySelectorAll('.alert.stop');
redElement.forEach((element) => {
    element.style.backgroundColor = "red";
});

//თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი go გაწერილი, გახადეთ მისი ფერი მწვანე.

let greenElement = document.querySelectorAll('.alert.go');
greenElement.forEach((element) => {
    element.style.backgroundColor = "green";
});