import React from "react";
import redx from "../img/red-x.png";

const SmurfList = props => {
    return (
        <div className="list-wrapper">
            {props.smurfs.map((smurf) => <li key={smurf.id} className="smurf">
                {smurf.name} is {smurf.age} years old and {smurf.height >= 7 ? <span>an astonishing </span> : <span>a mere </span>}{smurf.height}cm tall.
                <img alt="red_x" onClick={() => props.deleteSmurf(smurf.id)} className="red-x" src={redx}/></li>)}
        </div>
    )
}

export default SmurfList