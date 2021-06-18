const initialState = {
  fruitsArray: ["kilo"],
  appleCount: 10,
  orangeCount: 10,
  grapesCount: 10,
};

export default function fruitReducer(state = initialState, action) {
  console.log("initial state", initialState);
  switch (action.type) {
    case "increment-apple": {
      if (state.appleCount === 10) {
        return state;
      }
      return {
        ...state,
        appleCount: state.appleCount + 1,
        fruitsArray: [...state?.fruitsArray, "apple"],
      };
    }
    case "increment-orange": {
      if (state.orangeCount === 10) {
        return state;
      }
      return {
        ...state,
        orangeCount: state.orangeCount + 1,
        fruitsArray: [...state?.fruitsArray, "orange"],
      };
    }
    case "increment-grapes": {
      if (state.grapesCount === 10) {
        return state;
      }
      return {
        ...state,
        grapesCount: state.grapesCount + 1,
        fruitsArray: [...state?.fruitsArray, "grapes"],
      };
    }
    case "decrement-apple": {
      if (state.appleCount === 0) {
        return state;
      }
      return {
        ...state,
        appleCount: state.appleCount - 1,
        fruitsArray: state?.fruitsArray?.pop(),
      };
    }
    case "decrement-orange": {
      if (state.orangeCount === 0) {
        return state;
      }
      return {
        ...state,
        orangeCount: state.orangeCount - 1,
        fruitsArray: state?.fruitsArray?.pop(),
      };
    }
    case "decrement-grapes": {
      if (state.grapesCount === 0) {
        return state;
      }
      return {
        ...state,
        grapesCount: state.grapesCount - 1,
        fruitsArray: state?.fruitsArray?.pop(),
      };
    }
    default:
      return state;
  }
}
