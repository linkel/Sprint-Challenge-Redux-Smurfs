import React from 'react';

const UpdateSmurfForm = props => {
    return (
        <form onSubmit={(e) => {e.preventDefault(); props.updateSmurf(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value);e.target.reset()}} className="add-smurf">
            <h1>Edit Smurf</h1>
            <input type="number" placeholder="id"></input>
            <input type="text" placeholder="smurf name"></input>
            <input type="number" placeholder="age"></input>
            <input type="text" placeholder="height"></input>
            <input type="submit"></input>
        </form>
    )
}

export default UpdateSmurfForm;
