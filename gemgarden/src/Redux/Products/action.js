import axios from "axios";
import {
  IsError,
  IsLoading,
  PRODUCT_REQUEST_ARRIVAL,
  PRODUCT_REQUEST_BRACELETS,
  PRODUCT_REQUEST_EARRINGS,
  PRODUCT_REQUEST_RINGS,
  SINGLE_PRODUCT_REQUEST,
  TOTALPAGE,
} from "./actionType";

const token = localStorage.getItem("user-token") ||  ""

export const getProducts = (obj, page) => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get(
      `https://gem-garden-tfkw.onrender.com/collections?_page=${page}_limit=10`,
      obj
    )
    .then((data) => {
      dispatch({ type: TOTALPAGE, payload: data.headers["x-total-count"] });
      dispatch({ type: PRODUCT_REQUEST_ARRIVAL, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

export const getProductsArrival = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gem-garden-tfkw.onrender.com/arrival")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_ARRIVAL, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsRings = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gem-garden-tfkw.onrender.com/rings")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_RINGS, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsEarRings = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gem-garden-tfkw.onrender.com/earrings")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_EARRINGS, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsBracelets = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gem-garden-tfkw.onrender.com/bracelets")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_BRACELETS, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get(`https://gem-garden-tfkw.onrender.com/collections/${id}`)
    .then((data) => {
      dispatch({ type: SINGLE_PRODUCT_REQUEST, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

