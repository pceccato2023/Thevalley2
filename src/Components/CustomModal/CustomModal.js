import React from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const CustomModal = ({open,close,characterId,allies,enemies,films,videogames}) =>{
//debo llamar a la nueva API con el ID del caso para obtener los datos. 
const [character, setCharacter] = React.useState([]);
const URL_Character = "https://api.disneyapi.dev/character/";

React.useEffect(() => {
        fetch(URL_Character + {characterId})
        .then(console.log(URL_Character + {characterId}))
        .then((response) => {
            return response.json();
        })
        .then((response) =>{
            setCharacter(response.data)}
        )
        console.log(character);
    },[])
    return (
      <div>
        <Modal
          isOpen={open}
          onRequestClose={close}
          style={customStyles}
       >
            <div>
                <p>{characterId}</p>
                <p>{allies}</p>
                <p>{enemies}</p>
                <p>{films}</p>
                <p>{videogames}</p>
                </div>
        </Modal>
      </div>
    );

}

export default CustomModal;

