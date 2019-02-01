import React from 'react';

const AddSmurfForm = props => {
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.addSmurf(e.target[0].value, e.target[1].value, e.target[2].value);e.target.reset()}} className="add-smurf">
            <h1>Add Smurf</h1>
            <input type="text" placeholder="smurf name"></input>
            <input type="number" placeholder="age"></input>
            <input type="text" placeholder="height"></input>
            <input type="submit"></input>
        </form>
    )
}

export default AddSmurfForm;
