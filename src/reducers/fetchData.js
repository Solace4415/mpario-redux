const dataReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "DATA":
      return { ...state, data: action?.payload?.data };
    default:
      return state;
  }
};

export default dataReducer;
