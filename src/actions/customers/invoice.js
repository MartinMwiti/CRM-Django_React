import { createMessage, returnErrors } from "../messages";
import API from "../api";

import {
  GET_INVOICE_DATA,
  ADD_INVOICE_DATA,
  DELETE_INVOICE_DATA,
  TOGGLE_MODAL,
} from "../types";


// Toggle Modal
export const toggleModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};



// GET INVOICE DATA
export const getInvoiceData = () => async (dispatch) => {
  await API.get("/clients/invoice/")
    .then((res) => {
      try {
        dispatch({
          type: GET_INVOICE_DATA,
          payload: res.data.results,
        });
      } catch (error) {
        console.log(res, error)
      }
    })
    .catch(() =>
      dispatch(createMessage({ getInvoiceData: "Invoice records not found" }))
    );
};


// ADD INVOICE DATA
export const addInvoiceData = (invoice) => async (dispatch) => {
  await API.post("/clients/invoice/", invoice)
    .then((res) => {
      try {
        dispatch(createMessage({ addInvoiceData: "Invoice detail added" }));
        dispatch({
          type: ADD_INVOICE_DATA,
          payload: res.data,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}
// EXPLAINATION
// Link (shorturl.at/intCD)


// DELETE INVOICE DATA
export const deleteInvoiceData = (id) =>  async (dispatch) => { 
    await API.delete(`/clients/invoice/${id}`)
    .then((res) => {
      try {
        dispatch(createMessage({ deleteInvoiceData: "Invoice data deleted" }));
        dispatch({
          type: DELETE_INVOICE_DATA,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}
