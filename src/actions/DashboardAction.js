import axios from "axios";

export const getDashboardAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/dashboard`);
    dispatch({ type: "GET_DASHBOARD", payload: data });
  } catch (error) {
    dispatch({ type: "GET_DASHBOARD_FAIL", payload: error.message });
  }
};
