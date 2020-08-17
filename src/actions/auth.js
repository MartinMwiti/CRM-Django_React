import API from "./api";
import axios from 'axios'
import { createMessage, returnErrors } from "./messages";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
} from "./types";


// Check if a user is Authenticated BY verifying if there is a correct token in the local storage
//  Helps keep you logged in after refresh
export const checkAuthenticated = () => async (dispatch) => {
  const body = JSON.stringify({ token: localStorage.getItem("access") });

  await API
    .post("/auth/jwt/verify/", body)
    .then((res) => {
      try {
        if (res.data.code !== "token_not_valid") {
          dispatch({
            type: AUTHENTICATED_SUCCESS,
          });
        }
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    });
  }


// LOAD USER - Retrieve details of the Authenticated user
// Helps keep you logged in after refresh
export const load_user = () => async (dispatch) => {
  const body = JSON.stringify({ token: localStorage.getItem("access") });

  await API
    .get("/auth/users/me/", body)
    .then((res) => {
      try {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: res.data,
        });
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: USER_LOADED_FAIL,
      });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
  }


// LOGIN
export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  await API
    .post("/auth/jwt/create/", body)
    .then((res) => {
      try {        
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch(createMessage({ login: "Login Successful" }));
      } catch (error) {
        console.log(res, error);
      }
    })
    .catch((err) => {
      console.log(err);
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
}


// LOGOUT
export const logout = () => async (dispatch) => {
  dispatch(createMessage({ logout: "Logout Successful" }));
  dispatch({
    type: LOGOUT,
  });
};
