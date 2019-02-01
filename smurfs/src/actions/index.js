import axios from "axios";

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