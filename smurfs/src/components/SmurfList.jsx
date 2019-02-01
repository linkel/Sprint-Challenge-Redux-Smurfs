import React from "react";
import redx from "../img/red-x.png";

const SmurfList = props => {
    return (
        <ul className="list-wrapper">
            {props.smurfs.map((smurf) => <li key={"smurf"+smurf.id}><div className="smurf">
                ID: {smurf.id} | {smurf.name} Smurf is {smurf.age} years old and {smurf.height >= 7 ? <span>an astonishing </span> : <span>a mere </span>}{smurf.height}cm tall.
                </div><img alt="red_x" onClick={() => props.deleteSmurf(smurf.id)} className="red-x" src={redx}/></li>)}
        </ul>
    )
}

export default SmurfList