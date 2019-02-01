/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: '',
}

export default (state = initialState, action) => { 
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        fetchingSmurfs: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: '',
      }
        
    case "ADDING":

    case "ADD_SUCCESS":

    case "UPDATING":
    case "UPDATE_SUCCESS":

    case "DELETING":
    case "DELETE_SUCCESS":

    case "FAILURE":
    default:
      return state;
  }
};
