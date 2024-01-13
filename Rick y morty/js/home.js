const printHome = () => {
    header.innerHTML =``;
    mainContainer.innerHTML =`
    <div class="main__container">
    <h1 class="main__title">RICK & MORTY</h1>
    <h2 class="main__subtitle">THE WIKI</h2>
    </div> 
    <p class="main__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
    <div class="main__line"></div>
    <div class="main__list">
         <p data-link="CHARACTERS"  class="main__item">PERSONAJES</p>
         <p data-link="EPISODES" class="main__item">TEMPORADAS</p>
         <p data-link="LOCATIONS" class="main__item">LOCALIZACIONES</p>
    </div>` ;
    addEventsToHomeLinks();
}

const addEventsToHomeLinks = () => {
    const homeLinks = document.querySelectorAll("[data-link]");
    homeLinks.forEach(element => {
        element.addEventListener("click",  () => {
            printPage(element.getAttribute("data-link"));
        })
    })
}
