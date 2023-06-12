const initialState = {
  categoryList: [],
  currentPage: 1,
};

export const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_CATEGORY":
      return { ...state, categoryList: action.payload };

    default:
      return state;
  }
};
