const mapOptions = (options, option) =>{
    let optionFormated = [];
    Array.isArray(options);
    options.forEach((element, i ) => {
        const stringParts = element.split("/");
        let idOption = stringParts[stringParts.length - 1];
        let auxObject ={
            idCharacter: idOption,
            urlFetch:element
        }
        optionFormated.push(auxObject);
    });

    return optionFormated;
}


// const addEventsToDetailsLinks = () => {
//     const detailsLinks = document.querySelectorAll("[data-link]");
//     detailsLinks.forEach(element => {
//         element.addEventListener("click",  () => {
//             printPageDetails(element.getAttribute("data-link"));
//         })
//     })
// }


