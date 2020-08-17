import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import invoice from "./customers/invoice"
import hr_data from "./employees/hr_data";
import productData from "./products/productData"

export default combineReducers({
  auth,
  errors,
  messages,
  invoice,
  hr_data,
  productData,
});
