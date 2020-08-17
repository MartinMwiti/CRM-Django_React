import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

// components
import ContentComponent from "./containers/dashboard/ContentComponent";
import ProductDetails from "./containers/products/Main";
import MainAnalytics from "./containers/analytics/MainAnalytics";
import EmployeesDetails from "./containers/employees/Main";
import CustomerDetails from "./containers/customers/Main";
import ResetPassword from "./components/authorization/ResetPassword";
import ResetPasswordConfirm from "./components/authorization/ResetPasswordConfirm";
import Activate from "./components/authorization/Activate";
import PrivateRoute from "./components/authorization/privateRoute"


// HOC
import Layout from "./hocs/Layout"


const App = () => {
    return (
      <Layout>
        <PrivateRoute exact path="/Dashboard" component={ContentComponent} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          component={ResetPasswordConfirm}
        />
        <Route exact path="/activate/:uid/:token" component={Activate} />

        <PrivateRoute exact path="/Products" component={ProductDetails} />
        <PrivateRoute exact path="/Analytics" component={MainAnalytics} />
        <PrivateRoute exact path="/Employees" component={EmployeesDetails} />
        <PrivateRoute exact path="/Customers" component={CustomerDetails} />
      </Layout>
    );
  }

export default App;
