import React from "react";

function NavBar({handlePrevClick, handleNextClick}) {

return (

    <>
        <div>
            <button onClick={handlePrevClick}>Précédent</button>
            <button onClick={handleNextClick}>Suivant</button>
        </div>
    </>)
}

export default NavBar