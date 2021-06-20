const initialState = {
  fruitsArray: [],
  items: [
    {
      name: "apple",
      maxCount: 10,
      color: "red",
      currentCount: 10,
    },
    {
      name: "orange",
      maxCount: 10,
      color: "orange",
      currentCount: 10,
    },
    {
      name: "grapes",
      maxCount: 10,
      color: "violet",
      currentCount: 10,
    },
  ],
};

export default function fruitReducer(state = initialState, action) {
  const index = state.items.findIndex((e) => e.name === action?.payload?.name);
  switch (action.type) {
    case "ADD_TO_CART": {
      let tmp = {
        ...state.items[index],
        currentCount: state.items[index].currentCount - 1,
      };
      return {
        ...state,
        ...state.items.splice(index, 1, tmp),
        fruitsArray: [...state.fruitsArray, action?.payload?.name],
      };
    }
    case "REMOVE_FROM_CART": {
      state.fruitsArray.pop();
      let tmp = {
        ...state.items[index],
        currentCount: state.items[index].currentCount + 1,
      };
      return {
        ...state,
        ...state.items.splice(index, 1, tmp),
        fruitsArray: [...state.fruitsArray],
      };
    }
    default:
      return state;
  }
}
