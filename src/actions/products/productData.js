import { createMessage, returnErrors } from "../messages";
import API from "../api";

import {
  GET_PRODUCT_DATA,
  ADD_PRODUCT_DATA,
// UPDATE_PRODUCT_DATA
  DELETE_PRODUCT_DATA,
  TOGGLE_MODAL,
} from "../types";

// Toggle Modal
export const toggleModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};

// GET Product DATA
export const getProductData = () => async (dispatch) => {
  await API.get("/products/")
    .then((res) => {
      try {
        dispatch({
          type: GET_PRODUCT_DATA,
          payload: res.data.results,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch(() =>
      dispatch(
        createMessage({ getProductData: "Products records not found" })
      )
    );
};

// ADD Product DATA
export const addProductData = (product) => async (dispatch) => {
  await API.post("/products/", product)
    .then((res) => {
      try {
        dispatch(createMessage({ addProductData: "New Product added" }));
        dispatch({
          type: ADD_PRODUCT_DATA,
          payload: res.data,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// // UPDATE Product DATA
// export const updateProductData = (updateData) => async (dispatch) => {
//   await API.put("/accounts/Products_hr/${updateData.id}", updateData)
//     .then((res) => {
//       try {
//         dispatch(createMessage({ addProductData: "New Product added" }));
//         dispatch({
//           type: UPDATE_PRODUCT_DATA,
//           payload: res.data,
//         });
//       } catch (error) {
//         console.log(res, error);
//       }
//     })
//     .catch((err) =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };

// DELETE Product DATA
export const deleteProductData = (id) => async (dispatch) => {
  await API.delete(`/products/${id}`)
    .then((res) => {
      try {
        dispatch(createMessage({ deleteProductData: "Product deleted" }));
        dispatch({
          type: DELETE_PRODUCT_DATA,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
