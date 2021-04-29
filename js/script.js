console.log("Witaj w konsoli");
let image = document.querySelector(".image");

let button = document.querySelector(".js-image__button");

button.addEventListener("click", () => {
    if (button.innerText === "Następne zdjęcie") {
        button.innerText = "Poprzednie zdjęcie";
        image.src = "https://i.postimg.cc/FzPnyTH5/sunset.jpg";
        image.alt = "Mazury";
    }
    else {
        button.innerText = "Następne zdjęcie";
        image.src = "https://i.postimg.cc/sxJTVwhG/Szko-a-Jazdy-Subaru.jpg";
        image.alt = "Subaru";

    }

});