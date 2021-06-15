const initialstate = {
  loading: false,
  loggedInUser: {},
};

export default function loginReducer(state = initialstate, action) {
  switch (action.type) {
    case "SAVE_LOGGEDIN_USER": {
      return {
        ...state,
        loggedInUser: action.payload,
      };
    }
    default:
      return state;
  }
}
