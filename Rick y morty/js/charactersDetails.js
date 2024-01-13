const printCharactersDetails =(id) =>{
    header.innerHTML=`
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
    <p class="header__name">EPISODE DETAILS</p>
    </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack =document.querySelector(".header__back");
    buttonBack.addEventListener("click",printCharacters);
    getDetailsCharacters(id).then(response =>{
        let characterDetails = formatCharacterDetails(response)
            mainContainer.innerHTML=`
            <section class="section">
            <main class="details">
                ${characterDetails}
            </section>
            </main>`
    }) 
}

const getDetailsCharacters = async (id) =>{
    let url="https://rickandmortyapi.com/api/character/" + id;
    let response = await fetch(url);
    let data = await response.json();
    data = mapDataCharactersDetails(data);
    return data;
}

const mapDataCharactersDetails = (data) =>{
        let object ={
        name:data.name,
        status:data.status,
        species:data.species,
        gender:data.gender,
        origin:data.origin.name,
        location:data.location.name,
        id:data.id,
        episode:mapOptions(data.episode, "episode"),
        img:data.image,
    }
    return object;
}



const formatCharacterDetails =(character) =>{
    let episodes = formatOptions("episodes",character.episode);
    return`
        <div class="details__principal--characters">
            <img class="details__images__item--characters" src="${character.img}" >
            <h1 class="details__title--characters"> ${character.name}</h1>
            <div class="details__title__line"></div>
        </div>
        <div class="details__secondary--characters">
            <h2 class="details__subtitle--characters">STATUS</h2>
            <div class="details__box__btns">
                <p class="details__text--characters-btn">${character.status} </p>
                <p class="details__text--characters-btn">${character.status}</p>
                <p class="details__text--characters-btn">${character.status}</p>
            </div>
            <h2 class="details__subtitle--characters">SPECIES</h2>
            <p class="details__text--characters">${character.species}</P>
            <h2 class="details__subtitle--characters">ORIGIN</h2>
            <p class="details__text--characters">${character.origin}</P>
            <h2 class="details__subtitle--characters">LOCATION</h2>
            <p class="details__text--characters">${character.location}</P>
            <h2 class="details__subtitle--characters">EPISODE</h2>
            <div class="details__box__btns">
                ${episodes}
            </div>
        </div>
    `
}


const formatOptions = (option, options) =>{
    let htmlStructure ="";
    options.forEach(element =>{
        htmlStructure += 
        ` 
        <p onclick="printEpisodesDetails(${element.idCharacter})" class="details__text--characters-btn-episode">${element.idCharacter} </p>
        `
    })
    return htmlStructure
}


   /* header.innerHTML=`
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
     <p class="header__name">EPISODE DETAILS</p>
     </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack =document.querySelector(".header__back");
    buttonBack.addEventListener("click",printCharacters);
    mainContainer.innerHTML=`
    <section class="section">
    <main class="details">
        <div class="details__principal--characters">
            <div class="details__images__item--characters"> </div>
            <h1 class="details__title--characters"> The Ricklantis Mixup</h1>
            <div class="details__title__line"></div>
            </div>
             <div class="details__secondary--characters">
            <h2 class="details__subtitle--characters">STATUS</h2>
            <div class="details__box__btns">
                <p class="details__text--characters-btn">ALIVE</p>
                <p class="details__text--characters-btn">DEAD</p>
                <p class="details__text--characters-btn">UNKNOWN</p>
            </div>
            <h2 class="details__subtitle--characters">SPECIES</h2>
            <p class="details__text--characters">Human</P>
            <h2 class="details__subtitle--characters">ORIGIN</h2>
            <p class="details__text--characters">S03E07</P>
            <h2 class="details__subtitle--characters">LOCATION</h2>
            <p class="details__text--characters">September 10 ,2017</P>
            <h2 class="details__subtitle--characters">EPISODE</h2>
             <div class="details__box__btns">
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                <p class="details__text--characters-btn-episode">1</p>
                 </div>
              </div>
          </main>
        </section>` 
    } 

    */
