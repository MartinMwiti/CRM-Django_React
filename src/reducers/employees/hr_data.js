import {
  GET_EMPLOYEE_DATA,
  ADD_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  TOGGLE_MODAL,
} from "../../actions/types";

const initialState = {
  employeesDetail: [],
  modalState: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalState: !state.modalState,
      };

    case GET_EMPLOYEE_DATA:
      return {
        ...state,
        employeesDetail: action.payload,
      };

    case ADD_EMPLOYEE_DATA:
      return {
        ...state,
        employeesDetail: [...state.employeesDetail, action.payload],
      };

    default:
    case DELETE_EMPLOYEE_DATA:
      return state;
  }
}
