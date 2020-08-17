import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function LogoComponent() {
  return (
    <Row className={css(styles.container)} horizontal="start" vertical="center">
      <FontAwesomeIcon icon="code" size="lg" className={css(styles.icon)} />
      <span className={css(styles.title)}>Icarus</span>
    </Row>
  );
}

export default LogoComponent;


// style
const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 6,
  },
  icon: {
    color: "#00ff84",
  },
  title: {
    fontFamily: "Special Elite",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    color: "#00ff84",
    textAlign: "center",
    opacity: 0.9,
    paddingLeft: 12,
    paddingTop: 8
  },
});