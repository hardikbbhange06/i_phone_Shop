const initialState = [];

const addItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [
        ...state,
        action.payload
      ];

    case "DELITEM":
      return state.filter((x) => {
        return x.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default addItemsReducer;
