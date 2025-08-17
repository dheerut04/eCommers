import axios from "axios";
import {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_LOADING,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_LOADING });

    const { data } = await axios.get("/api/products/");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      action: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default listProducts;
