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
          dispatch({ type: "FAILURE", error: "Fetch failed!" });
      });
  };
};

export const addSmurf = (name, age, height) => {
  const smurfObj = {
      name, age, height
  }
  const promise = axios.post('http://localhost:3333/smurfs/', smurfObj);
  return dispatch => {
      dispatch({ type: "ADDING" });
      promise
      .then(response => {
          dispatch({ type: "ADD_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE", error: "Add failed!" });
      });
  }
}

export const updateSmurf = (id, name, age, height) => {
  const smurfObj = {
      name, age, height
  }
  const promise = axios.put(`http://localhost:3333/smurfs/${id}`, smurfObj);
  return dispatch => {
      dispatch({ type: "UPDATING" });
      promise
      .then(response => {
          console.log(response.data)
          dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE", error: "ID doesn't exist" });
      });
  }
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
      dispatch({ type: "DELETING" });
      promise
      .then(response => {
          dispatch({ type: "DELETE_SUCCESS", payload: response.data });
      })
      .catch(err => {
          console.log(err);
          dispatch({ type: "FAILURE", error: "ID doesn't exist" });
      });
  }
}