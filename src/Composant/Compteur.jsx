import React, { useState } from 'react';

const Compteur = () => {
    const [num , Setnum] = useState (0);
    const handleClick = () => {
        Setnum(num +1 )
        console.log(num)
    }

    return (
        <div>
            <h1 className="testcompteur" style={{fontSize : "15px"}}>Combien de jour  {num}</h1>
            <button onClick={handleClick} style={{width:"100px" , height: "50px"}}>Here !</button>
        </div>
    );
};

export default Compteur;