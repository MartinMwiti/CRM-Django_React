import {
  GET_PRODUCT_DATA,
  ADD_PRODUCT_DATA,
  // UPDATE_PRODUCT_DATA
  DELETE_PRODUCT_DATA,
  TOGGLE_MODAL,
} from "../../actions/types";

const initialState = {
  productDetail: [],
  modalState: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalState: !state.modalState,
      };

    case GET_PRODUCT_DATA:
      return {
        ...state,
        productDetail: action.payload,
      };

    case ADD_PRODUCT_DATA:
      return {
        ...state,
        productDetail: [...state.productDetail, action.payload],
      };

    default:
    case DELETE_PRODUCT_DATA:
      return state;
  }
}
