import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../actions/auth";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";


import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

// components
import SidebarComponent from "../components/sidebar/SidebarComponent";
import HeaderComponent from "../components/header/HeaderComponent";
// Alert
import Alerts from "./Alerts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "../components/authorization/SignUp";
import SignIn from "../components/authorization/SignIn";



const Layout = (props) => {

  const [tokenData, setTokenData] = useState({
    selectedItem: localStorage.getItem("selectedItem"),
  });

  const { isAuthenticated } = props.auth;

  const { checkAuthenticated, load_user } = props


  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);

  const { selectedItem } = tokenData;

  const onChange = (selectedItem) =>
    setTokenData({
      selectedItem: localStorage.setItem("selectedItem", selectedItem),
    });

  const authLinks = (
    <Fragment>
      <SidebarComponent
        selectedItem={selectedItem}
        onChange={(selectedItem) => onChange(selectedItem)}
      />
    </Fragment>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />

        <Fragment>
          <Row className={css(styles.container)}>
            {isAuthenticated ? authLinks : ""}

            <Column flexGrow={1} className={css(styles.mainBlock)}>
              <Column>
                <HeaderComponent
                  title={selectedItem}
                  className={css(styles.header)}
                />
                <Alerts />
                {/* BREADCRUMBS */}
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  <Link color="inherit">You're here</Link>
                  <Typography color="textPrimary">
                    <span className={css(styles.title)}>
                      {localStorage.getItem("selectedItem")}
                    </span>
                  </Typography>
                </Breadcrumbs>

                <div className="content">{props.children}</div>
              </Column>
            </Column>
          </Row>
        </Fragment>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// No need for mapStateToProps since i only need the func and not there states
export default connect(mapStateToProps, { checkAuthenticated, load_user })(
  Layout
);

// Style
const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    color: "f4f7fa",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: 0.2,
    ":hover":{
      cursor: "pointer"
    },
  },
  container: {
    height: "100%",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "inherit",
    height: 50,
    paddingRight: 30,
    marginTop: -30,
    paddingLeft: -30,
  },
  mainBlock: {
    backgroundColor: "#f4f4f4",
    padding: 30,
    marginLeft: 240,
    "@media (max-width: 768px)": {
      marginLeft: 0,
    },
  },
});
