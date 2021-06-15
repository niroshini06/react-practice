const initialState = {
  feed: {},
};

export default function feedReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_FEED": {
      return {
        feed: action.payload,
      };
    }
    default:
      return state;
  }
}
