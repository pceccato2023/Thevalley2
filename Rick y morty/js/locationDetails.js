const printLocationsDetails = (id) => {
    header.innerHTML = `
      <div class="header__container">
      <h1 class="header__title">RICK & MORTY</h1>
      <span class="header__subtitle">THE WIKI</span>
      </div>
      <div class="header__action">
       <p class="header__name">EPISODE DETAILS</p>
       </div>
      <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack = document.querySelector(".header__back");
    buttonBack.addEventListener("click", printLocations);
    getLocationsDetails(id).then((response) => {
    formatLocationsDetails(response);
  
    });
  };
  
  const getLocationsDetails = async (episodeId) => {
    let url = "https://rickandmortyapi.com/api/location/" + episodeId;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    data = mapLocationsDetails(data);
    console.log(data);
    return data;
  };
  
  const mapLocationsDetails = (data) => {
    let object = {
      id: data.id,
      name: data.name,
      type: data.type,
      dimension: data.dimension,
      residents: mapOptions(data.residents, "residents")
    };
    return object;
  };
  
  const formatLocationsDetails = async (location) => {
    const locationsImgs = await formatOptionsLocations(location.residents)
    mainContainer.innerHTML = 
    `<section>
     <main class="details">
          <div class="details__principal">
             <h1 class="details__title">${location.name}</h1>
          </div>
          <div class="details__secondary">
              <h2 class="details__subtitle">TYPE</h2>
              <p class="details__text">${location.type}</p>
              <h2 class="details__subtitle">DIMENSION</h2>
              <p class="details__text">${location.dimension}</p>
              <h2 class="details__subtitle">RESIDENTS</h2>
              <div class="details__images">
              ${locationsImgs}
              </div>
              </div>
              </main>     
              </section>
         `;
  };
  
  const formatOptionsLocations = async (options) => {
    let htmlStructure = `` 
    for (const element of options) {
      const getImgCharacter = async () => {
        let url = element.urlFetch;
        let response = await fetch(url);
        let data = await response.json();
        let img = data.image;
        return img;
      };
      const imgSrc = await getImgCharacter();
  
        htmlStructure += `
        <img onclick="printCharactersDetails(${element.idCharacter})" class="details__images__item" src="${imgSrc}">
        `;
    
    }
    return htmlStructure;
  };