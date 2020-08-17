import {
  GET_INVOICE_DATA,
  ADD_INVOICE_DATA,
  DELETE_INVOICE_DATA,
  TOGGLE_MODAL,
} from "../../actions/types";

const initialState = {
  invoiceData:[],
  newInvoiceModal: false,
  editInvoiceModal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        newInvoiceModal: !state.newInvoiceModal
      };


    case GET_INVOICE_DATA:
      return {
        ...state,
        invoiceData: action.payload,
      };

    case ADD_INVOICE_DATA:
      return {
        ...state,
        invoiceData: [...state.invoiceData, action.payload],
      };

    default:
    case DELETE_INVOICE_DATA:
      return state;
  }
}
