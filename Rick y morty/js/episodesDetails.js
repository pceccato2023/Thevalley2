const printEpisodesDetails = (episodeId) => {
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
  buttonBack.addEventListener("click", printEpisodes);
  getDetailsEpisodes(episodeId).then((response) => {
  formatEpisodesDetails(response);

  });
};

const getDetailsEpisodes = async (episodeId) => {
  let url = "https://rickandmortyapi.com/api/episode/" + episodeId;
  console.log(url);
  let response = await fetch(url);
  let data = await response.json();
  data = mapDataEpisodesDetails(data);
  console.log(data);
  return data;
};

const mapDataEpisodesDetails = (data) => {
  let object = {
    id: data.id,
    name: data.name,
    date: data.air_date,
    episode: data.episode,
    characters: mapOptions(data.characters, "characters"),
  };
  return object;
};

const formatEpisodesDetails = async (episode) => {
  const episodesImgs = await formatOptionsEpisodes(episode.characters)
  mainContainer.innerHTML = 
  `
   <main class="details">
        <div class="details__principal">
           <h1 class="details__title">${episode.name}</h1>
        </div>
        <div class="details__secondary">
            <h2 class="details__subtitle">EPISODE</h2>
            <p class="details__text">${episode.episode}</p>
            <h2 class="details__subtitle">DATE</h2>
            <p class="details__text">${episode.date}</p>
            <h2 class="details__subtitle">CHARACTERS</h2>
            <div class="details__images">
            ${episodesImgs}
            </div>
            </main>
            </section>`;
};

const formatOptionsEpisodes = async ( options) => {
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

/*
<section class="section">
    <main class="details">
    <div class="details__principal">
    <h1 class="details__title">The Ricklantis Mixup</h1>
    </div>
    <div class="details__secondary">
    <h2 class="details__subtitle">EPISODE</h2>
    <p class="details__text">S03E07</P>
    <h2 class="details__subtitle">DATE</h2>
    <p class="details__text">September 10 ,2017</P>
    <h2 class="details__subtitle">CHARACTERS</h2>


    <div class="details__images">
        <div class="details__images__item"> </div>
        <div class="details__images__item"> </div>
        <div class="details__images__item"> </div>
        <div class="details__images__item"> </div>
        <div class="details__images__item"> </div>
        <div class="details__images__item"> </div>
    </div>

    </div>
    </main>
    </section>` */
