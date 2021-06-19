const initialState = {
  fruitsArray: [],
  appleCount: 10,
  orangeCount: 10,
  grapesCount: 10,
};

export default function fruitReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_APPLE_TO_CART": {
      console.log("---invoked ADD_APPLE_TO_CART");
      if (state.appleCount == 0) {
        return state;
      }
      return {
        ...state,
        appleCount: state.appleCount - 1,
        fruitsArray: [...state.fruitsArray, "apple"],
      };
    }
    case "ADD_ORANGE_TO_CART": {
      if (state.orangeCount == 0) {
        return state;
      }
      return {
        ...state,
        orangeCount: state.orangeCount - 1,
        fruitsArray: [...state.fruitsArray, "orange"],
      };
    }
    case "ADD_GRAPES_TO_CART": {
      if (state.grapesCount == 0) {
        return state;
      }
      return {
        ...state,
        grapesCount: state.grapesCount - 1,
        fruitsArray: [...state.fruitsArray, "grapes"],
      };
    }
    case "REMOVE_APPLE_FROM_CART": {
      if (state.appleCount == 10) {
        return state;
      }
      state.fruitsArray.splice(state.fruitsArray.length - 1, 1);
      return {
        ...state,
        appleCount: state.appleCount + 1,
        fruitsArray: [...state.fruitsArray],
      };
    }
    case "REMOVE_ORANGE_FROM_CART": {
      if (state.orangeCount == 10) {
        return state;
      }
      state.fruitsArray.splice(state.fruitsArray.length - 1, 1);
      return {
        ...state,
        orangeCount: state.orangeCount + 1,
        fruitsArray: [...state.fruitsArray],
      };
    }
    case "REMOVE_GRAPES_FROM_CART": {
      if (state.grapesCount == 10) {
        return state;
      }
      state.fruitsArray.splice(state.fruitsArray.length - 1, 1);
      return {
        ...state,
        grapesCount: state.grapesCount + 1,
        fruitsArray: [...state.fruitsArray],
      };
    }
    default:
      return state;
  }
}
