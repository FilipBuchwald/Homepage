{
    const welcome= () => {
        console.log("Witaj w konsoli");
    }
    
    const changeImageButton = () => {      
        
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
    
    }
    
    const  init = () => {  
    button.addEventListener("click", changeImageButton);
    welcome();

    }
    
    const button = document.querySelector(".js-image__button");
    const image = document.querySelector(".image"); 
    
    init();
}