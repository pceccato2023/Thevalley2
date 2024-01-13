const mainContainer =document.querySelector(".main");
const header =document.querySelector(".header");
const URL_BASE ="https://rickandmortyapi.com/api";

const back =() =>{
    printHome();
}

window.onload =() =>{
    printHome("HOME");
}

const printPage  =(section) => {
    switch(section) {
        case "HOME" : 
            printHome();
            break;
        case "CHARACTERS":
            printCharacters();
            break;
        case "EPISODES":
            printEpisodes();
            break;
        case "LOCATIONS":
            printLocations();
            break;
        default:
            printHome();
            break;                                 
    }
}

const printPageDetails = (section) =>{
    switch(section) {
        case "Episodes-Details" : 
            printEpisodesDetails();
            break;
        case "LOCATIONS":
                console.log("Pintamos LOCALIZACIONES");
                 break;
        default:
            printHome();
            break;                                 
    }

}


