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
      return {
        ...state,
        addingSmurf: true,
      }
    case "ADD_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: '',
      }
    case "UPDATING":
      return {
        ...state,
        updatingSmurf: true,
      }
    case "UPDATE_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        error: '',
      }
    case "DELETING":
      return {
        ...state,
        deletingSmurf: true,
      }
    case "DELETE_SUCCESS":
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        error: '',
      }
    case "FAILURE":
      return {
        ...state,
        error: action.error,
        fetchingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
      }
    default:
      return state;
  }
};
