import axios from "axios";
import {
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_SUCCESS,
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

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_LOADING });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAILED, payload: error });
  }
};

export default listProducts;
