import "./Button.css";

const Button = ({currentPage,previousPage,nextPage}) =>{

    return(
    <div className="button__container">
    <button className="button" onClick={previousPage}>Previous Page </button>
    <p className="text">{currentPage}</p>
    <button className="button"  onClick={nextPage}>Next Page</button>
    </div>
    )
}

export default Button;