import "./CharacterCard.css";

const CharacterCard = ({img,id,name,handleClick}) =>{
    return(
    <div key={id} onClick={handleClick} className="character_card">
        <img className="character_img" src={img}/>
        <p>{name}</p>
    </div>
    )
}

export default CharacterCard