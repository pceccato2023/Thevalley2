import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Button from "../Button/Button";
import Modal from "react-modal";
import CustomModal from "../CustomModal/CustomModal";


const URL = "https://api.disneyapi.dev/character?page=";

const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [maxPages, setMaxPages] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [id, setId] = React.useState();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    fetch(URL + currentPage)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacterList(response.data);
        setMaxPages(response.info.totalPages);
        console.log(characterList);
      })
      .catch((error) => {
        setLoading(false)
        console.log("Error fetching the API: " + error)
      }
      )
      
      ;
  }, [currentPage]);

  //Defino la función de previousPage
  const previousPage = () =>{
    if (currentPage > 1){
      setCurrentPage(currentPage -1)
    } else{
      alert("Ya estas en la primera página")
    }
  }

  const nextPage = () =>{
    if(currentPage <= maxPages){
      setCurrentPage(currentPage + 1)
    } else{
      alert("Ya estas en la última página")
    }
  }

  function closeModal() {
      setModalIsOpen(false);
  }

  return (
    <div className="character_list">
      <h1 className="title">DISNEYPEDIA</h1>
          <CustomModal
            open={modalIsOpen}
            close={()=>{closeModal()}}
            characterId={id}
          />

          <Button
            currentPage={currentPage}
            previousPage={() => previousPage()}
            nextPage={() => nextPage()}
          />
        {characterList.map((character) => {
          return (
            <CharacterCard
              key={character._id}
              img={character.imageUrl}
              name={character.name}
              handleClick = {() => {
              setId(character._id);
              setModalIsOpen(true);
              }
            }
            allies={character.allies}
            enemies={character.enemies}
            films={character.films}
            videogames={character.videogames}
            tvShows={character.tvShows}
            />
          )})}
          </div>)}

export default CharacterList
