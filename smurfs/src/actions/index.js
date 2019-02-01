/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs/`);
  return dispatch => {
      dispatch({ type: "FETCHING" });
      promise
      .then(response => {
          dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE" });
      });
  };
};

export const addSmurf = (name, age, email) => {
  const friendObj = {
      name, age, email
  }
  const promise = axios.post('http://localhost:3333/smurfs/', friendObj);
  return dispatch => {
      dispatch({ type: "ADDING" });
      promise
      .then(response => {
          console.log(response.data)
          dispatch({ type: "ADD_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE" });
      });
  }
}

export const updateSmurf = (id, name, age, email) => {
  const friendObj = {
      name, age, email
  }
  const promise = axios.put(`http://localhost:3333/smurfs/${id}`, friendObj);
  return dispatch => {
      dispatch({ type: "UPDATING" });
      promise
      .then(response => {
          console.log(response.data)
          dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE" });
      });
  }
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
      dispatch({ type: "DELETING" });
      promise
      .then(response => {
          console.log(response.data)
          dispatch({ type: "DELETE_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE" });
      });
  }
}