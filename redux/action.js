import axios from "axios";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const products = await axios.get("https://fakestoreapi.com/products");
    console.log(products,'yess')
    dispatch({
      type: "FETCH_ALL_PRODUCTS",
      payload:products,
    });
  } catch (error) {
    console.log(error);
  }
};


