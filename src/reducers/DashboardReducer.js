const initialState = {
    data: {},
  };
  
  export const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DASHBOARD":
        return { ...state, data: action.payload };
  
      default:
        return state;
    }
  };
  