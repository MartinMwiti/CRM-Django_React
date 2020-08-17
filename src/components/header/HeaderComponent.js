import React from "react";
import { useDispatch } from "react-redux";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

//action
import { logout } from "../../actions/auth"


function HeaderComponent(props) {
  const { user } = props.auth;
  const { ...otherProps } = props;
  const dispatch = useDispatch();
  return (
    <Row
      className={css(styles.container)}
      vertical="center"
      horizontal="space-between"
      {...otherProps}
    >
      <span></span>

      <Row vertical="center">
        <Row vertical="center">
          {/* Logged in User */}
          <span className={css(styles.name, styles.cursorPointer)}>
            <small>{user ? `Logged as ${user.name}` : ""}</small>
          </span>
          <div className={css(styles.separator)}></div>
          <div className="logoutBtn">
            <a onClick={() => dispatch(logout())} href="/login">
              Logout
            </a>
          </div>
        </Row>
      </Row>
    </Row>
  );
}

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderComponent);


// Style
const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: "#fff",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  name: {
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    marginRight: "5px",
    fontWeight: 500,
    color: "#a9a9a9",
    fontSize: "18px",
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: 0.2,
    transition: "all .5s ease-in-out",
    ":hover": {
      fontWeight: "600",
      color: "#111",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  separator: {
    borderLeft: "1px solid #DFE0EB",
    marginLeft: 20,
    marginRight: 20,
    height: 32,
    width: 2,
    "@media (max-width: 768px)": {
      marginLeft: 12,
      marginRight: 12,
    },
  },

});