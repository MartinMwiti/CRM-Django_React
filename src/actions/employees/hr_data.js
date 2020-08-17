import { createMessage, returnErrors } from "../messages";
import API from "../api";

import {
  GET_EMPLOYEE_DATA,
  ADD_EMPLOYEE_DATA,
  DELETE_EMPLOYEE_DATA,
  TOGGLE_MODAL,
} from "../types";


// Toggle Modal
export const toggleModal = () => (dispatch) => {
  dispatch({
    type: TOGGLE_MODAL,
  });
};

// GET EMPLOYEE DATA
export const getEmployeeData = () => async (dispatch) => {
  await API.get("/accounts/employees_hr/")
    .then((res) => {
      try {
        dispatch({
          type: GET_EMPLOYEE_DATA,
          payload: res.data.results,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch(() =>
      dispatch(
        createMessage({ getEmployeeData: "Employees records not found" })
      )
    );
};

// ADD EMPLOYEE DATA
export const addEmployeeData = (employee) => async (dispatch) => {
  await API.post("/accounts/employees_hr/", employee)
    .then((res) => {
      try {
        dispatch(createMessage({ addEmployeeData: "New Employee added" }));
        dispatch({
          type: ADD_EMPLOYEE_DATA,
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

// // UPDATE EMPLOYEE DATA
// export const updateEmployeeData = (updateData) => async (dispatch) => {
//   await API.put("/accounts/employees_hr/${updateData.id}", updateData)
//     .then((res) => {
//       try {
//         dispatch(createMessage({ addEmployeeData: "New Employee added" }));
//         dispatch({
//           type: ADD_EMPLOYEE_DATA,
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


// DELETE EMPLOYEE DATA
export const deleteEmployeeData = (id) => async (dispatch) => {
  await API.delete(`/accounts/employees_hr/${id}`)
    .then((res) => {
      try {
        dispatch(createMessage({ deleteEmployeeData: "Employee deleted" }));
        dispatch({
          type: DELETE_EMPLOYEE_DATA,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
