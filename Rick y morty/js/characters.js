const printCharacters =() =>{
    header.innerHTML=`
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
     <p class="header__name">CHARACTERS FINDER</p>
     </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack =document.querySelector(".header__back");
    buttonBack.addEventListener("click",printHome);
    getCharacters().then(response =>{
        let charactersCards = formatCharactersCards(response);
        mainContainer.innerHTML =`
        <section class="section">
        <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
        </div>
        <div class="section__container">
            ${charactersCards}
        </div>
        <a class="section__button"> + MORE </a>
        </section>
        `;
        changeColourButton();
    });   
} 

const formatCharactersCards =(character) =>{
    let templateCharacters = character.map (character => {
        return `
        <div class="card">
             <div class="card__name">
                <span class="card__title"> ${character.name} </span>
                <span id="status" class="card__status"> ${character.status} </span>
             </div>
            <div class="card__details"> 
             <img class="card__img" src="${character.img}">
            <div class="card__info-container">
                <p class="card__info-title"> SPECIES</p>
                <p class="card__info">${character.species}</p>
                <p class="card__info-title">GENDER</p>
                <p class="card__info">${character.gender}</p>
                <p class="card__info-title">ORIGIN</p>
                <p class="card__info">${character.origin}</p>
                <p class="card__info-title">LOCATION</p>
                <p class="card__info">${character.location}</p>
             </div>
            </div>
        <a class="card__link" href="#" onclick="printCharactersDetails(${character.id})"> + MORE DETAILS</a>
        </div>
        `
    }).join(``);
    return templateCharacters;   
}


const getCharacters = async () =>{
    let url = URL_BASE + "/character";
    let response = await fetch(url);
    let data= await response.json();
    data = mapDataCharacters(data.results);
    return data;
}

const mapDataCharacters = (data) =>{
    let dataMapped = data.map(character =>{
        let object ={   
            name:character.name,
            status:character.status,
            species:character.species,
            gender:character.gender,
            origin:character.origin.name,
            location:character.location.name,
            img:character.image,
            id:character.id,
        }     
        return object;
        });
    return dataMapped;
}

const changeColourButton = async () =>{
    await getCharacters();
    if (liveButton && liveButton.getAttribute("value") === "Dead"){
        liveButton.style.background = "red";
    }
    console.log(liveButton && liveButton.getAttribute("value"))
}

const liveButton = document.getElementById("status");


 /*
    header.innerHTML=`
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
     <p class="header__name">CHARACTERS FINDER</p>
     </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack =document.querySelector(".header__back");
    buttonBack.addEventListener("click",printHome);
    mainContainer.innerHTML=`
    <section class="section">
        <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
        </div>
        <div class="section__container">
            <div class="card">
                <div class="card__name">
                <span class="card__title"> CHARACTERS 1</span>
                <span class="card__status"> ALIVE</span>
                </div>
                <div class="card__details"> 
                <img class="card__img" src="./Assets/images/rick.jpg">
                <div class="card__info-container">
                    <p class="card__info-title"> SPECIES</p>
                    <p class="card__info">Human</p>
                    <p class="card__info-title">GENDER</p>
                    <p class="card__info">Male</p>
                    <p class="card__info-title">ORIGIN</p>
                    <p class="card__info">Earth</p>
                    <p class="card__info-title">LOCATION</p>
                    <p class="card__info">Earth</p>
                </div>
                </div>
                <a data-link="Characters-Details" class="card__link" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card">
            <div class="card__name">
            <span class="card__title"> CHARACTERS 1</span>
            <span class="card__status"> ALIVE</span>
            </div>
            <div class="card__details"> 
            <img class="card__img" src="./Assets/images/rick.jpg">
            <div class="card__info-container">
                <p class="card__info-title"> SPECIES</p>
                <p class="card__info">Human</p>
                <p class="card__info-title">GENDER</p>
                <p class="card__info">Male</p>
                <p class="card__info-title">ORIGIN</p>
                <p class="card__info">Earth</p>
                <p class="card__info-title">LOCATION</p>
                <p class="card__info">Earth</p>
            </div>
            </div>
                <a data-link="Characters-Details" class="card__link" href="#"> + MORE DETAILS</a>
             </div>
             <div class="card">
             <div class="card__name">
             <span class="card__title"> CHARACTERS 1</span>
             <span class="card__status"> ALIVE</span>
             </div>
             <div class="card__details"> 
             <img class="card__img" src="./Assets/images/rick.jpg">
             <div class="card__info-container">
                 <p class="card__info-title"> SPECIES</p>
                 <p class="card__info">Human</p>
                 <p class="card__info-title">GENDER</p>
                 <p class="card__info">Male</p>
                 <p class="card__info-title">ORIGIN</p>
                 <p class="card__info">Earth</p>
                 <p class="card__info-title">LOCATION</p>
                 <p class="card__info">Earth</p>
             </div>
             </div>
                <a data-link="Characters-Details" class="card__link" href="#"> + MORE DETAILS</a>
             </div>
             <div class="card">
             <div class="card__name">
             <span class="card__title"> CHARACTERS 1</span>
             <span class="card__status"> ALIVE</span>
             </div>
             <div class="card__details"> 
             <img class="card__img" src="./Assets/images/rick.jpg">
             <div class="card__info-container">
                 <p class="card__info-title"> SPECIES</p>
                 <p class="card__info">Human</p>
                 <p class="card__info-title">GENDER</p>
                 <p class="card__info">Male</p>
                 <p class="card__info-title">ORIGIN</p>
                 <p class="card__info">Earth</p>
                 <p class="card__info-title">LOCATION</p>
                 <p class="card__info">Earth</p>
             </div>
             </div>
                 <a data-link="Characters-Details" class="card__link" href="#"> + MORE DETAILS</a>
             </div>
             <div class="card">
             <div class="card__name">
             <span class="card__title"> CHARACTERS 1</span>
             <span class="card__status"> ALIVE</span>
             </div>
             <div class="card__details"> 
             <img class="card__img" src="./Assets/images/rick.jpg">
             <div class="card__info-container">
                 <p class="card__info-title"> SPECIES</p>
                 <p class="card__info">Human</p>
                 <p class="card__info-title">GENDER</p>
                 <p class="card__info">Male</p>
                 <p class="card__info-title">ORIGIN</p>
                 <p class="card__info">Earth</p>
                 <p class="card__info-title">LOCATION</p>
                 <p class="card__info">Earth</p>
             </div>
             </div>
              <a data-link="Characters-Details" class="card__link" href="#"> + MORE DETAILS</a>
             </div>
        </div>
        <a class="section__button"> + MORE </a>
    </section>`;
    addEventsToDetailsLinks();      

*/
