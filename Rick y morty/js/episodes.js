let episodes;
const printEpisodes =() =>{
    episodes = []
    header.innerHTML=`
    <div class="header__container">
    <h1 class="header__title">RICK & MORTY</h1>
    <span class="header__subtitle">THE WIKI</span>
    </div>
    <div class="header__action">
     <p class="header__name">EPISODES</p>
     </div>
    <img class="header__back"src="./Assets/images/back.svg">`;
    const buttonBack = document.querySelector(".header__back");
    buttonBack.addEventListener("click",printHome);
    let url = URL_BASE + "/episode";
    getEpisodes(url).then(response =>{
        console.log(response)
        let episodesCards = formatEpisodesCards(response);
        mainContainer.innerHTML=`
        <section class="section">
            <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
            </div>
            <div class="section__container">
                ${episodesCards}
            </div>
        </section>
        `;
    //addEventsToDetailsLinks();     	
    });
}

const formatEpisodesCards =(episodes) =>{
    let templateEpisode = Object.keys(episodes).map(key =>{
        const episode = episodes[key];
        const name = 'Season' + " " + key.substring(2,3);
        const date1 = episode[0].date
        const date2 = episode[episode.length -1].date
        const episodeId = episode[0].id
        let template =  `
        <div class="card--episodes">
        <div class="card__name--episodes">
            <span class="card__title--episodes"> ${name} </span>
         </div>
         <div class="card__info-container--episodes">
            <p class="card__info-title--episodes"> DATE</p>
             <p  class="card__info--episodes"> ${date1}  - ${date2}</p>
             <p class="card__info-title--episodes"> EPISODES </p>
        `
        episode.forEach(value => {
            template += `<a data-link="Episodes-Details" onclick="printEpisodesDetails(${episodeId})" class="card__link--episodes" href="#"> ${value.name}</a>`
        })
        template += `
                 </div>
                </div>
        `
        return template
    }).join(``);
    return templateEpisode;
}

 const getEpisodes = async (url) =>{
        let response = await fetch(url);
        let data = await response.json();
        let dataAll = data.results;
        for (let i = 0; i < data.info.pages - 1; i++) {
            let response = await fetch(data.info.next);
            data = await response.json();
            dataAll = [...dataAll, ...data.results];
        }
        return mapDataEpisode(dataAll);
    }

const mapListSeason = (data) =>{
    return data.reduce((acc,curr) =>{
        const season = curr.episode.substring(0,3);
        if(Object.keys(acc).every(val => val !== season)){
            acc[season] = [curr];
        } else {
            acc[season].push(curr)
        }
        return acc
    }, {})
}

const mapDataEpisode = (data) =>{ 
    const dataMapped = data.map(episode =>{
        let object ={  
            id:episode.id, 
            name:episode.name,
            date:episode.air_date,
            episode:episode.episode,
            characters:mapOptions(episode.characters, "characters"),
        };     
        return object;
    });
    return mapListSeason(dataMapped);
}



/*
    <section class="section">
         <div class="section__search"> <img class="section__search__img" src="./Assets/images/search.svg">
         </div>
        <div class="section__container">
            <div class="card--episodes">
                <div class="card__name--episodes">
                <span class="card__title--episodes"> SEASON 1</span>
                </div>
                <div class="card__info-container--episodes">
                    <p  class="card__info-title--episodes"> DATE</p>
                    <p  class="card__info--episodes">December 2,2013  - June 15,2014 </p>
                    <p class="card__info-title--episodes"> EPISODES </p>
                    <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                    <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                    <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                    <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                    <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                </div>
            </div>
            <div class="card--episodes">
                 <div class="card__name--episodes">
                <span class="card__title--episodes"> SEASON 1</span>
                </div>
                <div class="card__info-container--episodes">
                <p class="card__info-title--episodes"> DATE</p>
                <p class="card__info--episodes">December 2,2013  - June 15,2014 </p>
                <p class="card__info-title--episodes"> EPISODES </p>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                </div>
             </div>
             <div class="card--episodes">
                 <div class="card__name--episodes">
                <span class="card__title--episodes"> SEASON 1</span>
                </div>
                <div class="card__info-container--episodes">
                <p class="card__info-title--episodes"> DATE</p>
                <p class="card__info--episodes">December 2,2013  - June 15,2014 </p>
                <p class="card__info-title--episodes"> EPISODES </p>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
                </div>
             </div>
             <div class="card--episodes">
             <div class="card__name--episodes">
            <span class="card__title--episodes"> SEASON 1</span>
            </div>
            <div class="card__info-container--episodes">
            <p class="card__info-title--episodes"> DATE</p>
            <p class="card__info--episodes">December 2,2013  - June 15,2014 </p>
            <p class="card__info-title--episodes"> EPISODES </p>
            <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
            <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
            <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
            <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
            <a data-link="Episodes-Details" class="card__link--episodes" href="#"> Pilot</a>
            </div>
         </div>
        </div>
    </section>

    */