const printLocations = () => {
    header.innerHTML = `
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
     <p class="header__name">LOCATION FINDER</p>
     </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack = document.querySelector(".header__back");
    buttonBack.addEventListener("click", printHome);
    getLocations().then(response => {
        let locationsCards = formatLocationsCards(response);
        mainContainer.innerHTML = `
    <section class="section">
        <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
        </div>
        <div class="section__container">
            ${locationsCards};
        </div>
        <a class="section__button"> + MORE </a>
    </section>
    `;
        // addEventsToDetailsLinks();
    });
}

const formatLocationsCards = (location) => {
    let templateLocations = location.map(location => {
        return `
        <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations">${location.name}</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container--locations">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">${location.type}</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container--locations">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">${location.dimension}</p>
                    </div>
                </div>
                <a data-link="Characters-Details" onclick="printLocationsDetails(${location.id})" class="card__link--locations" href="#"> + MORE DETAILS</a>
        </div>
        `
    }).join(``);
    return templateLocations;

}

const getLocations = async () => {
    let url = URL_BASE + "/location";
    let response = await fetch(url);
    let data = await response.json();
    data = mapDataLocations(data.results);
    return data;
}

const mapDataLocations = (data) => {
    let dataMapped = data.map(location => {
        let object = {
            name: location.name,
            type: location.type,
            dimension: location.gender,
            id: location.id,
            residents: mapOptions(location.residents, "residents")
        }
        return object;
    });
    return dataMapped;
}






/*<section class="section">
    <section class="section">
        <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
        </div>
        <div class="section__container">
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>
            <div class="card--locations">
                <div class="card__name--locations">
                    <span class="card__title--locations"> CHARACTERS 1</span>
                </div>
                <div class="card__details--locations">
                    <div class="card__info-container">
                        <p class="card__info-title">Type</p>
                        <p class="card__info">Cluster</p>
                    </div>
                    <div class="card__line"></div>
                    <div class="card__info-container">
                        <p class="card__info-title"> DIMENSION</p>
                        <p class="card__info">UNknown</p>
                    </div>
                </div>
                <a data-link="Characters-Details" class="card__link--locations" href="#"> + MORE DETAILS</a>
            </div>

        </div>
        <a class="section__button"> + MORE </a>
    </section>`;*/