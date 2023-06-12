import axios from "axios";

export const getListCategoryAction = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/category`);
    dispatch({ type: "LIST_CATEGORY", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
  }
};
