import React from "react";
import { Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";

import CountUp from "react-countup";


function MiniCardComponent({ className = "", title, value }) {
  const composedClassName = `${css(styles.container)} ${className}`;
  return (
    <Column
      flexGrow={1}
      className={composedClassName}
      horizontal="center"
      vertical="center"
    >
      <span className={css(styles.title)}>{title}</span>
      <span className={css(styles.value)}>
        <CountUp
          start={0}
          end={parseInt(value)}
          duration={2}
          separator=","
          prefix="Ksh "
          // suffix=" /="
        />
      </span>
    </Column>
  );
}

export default MiniCardComponent;

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
    borderRadius: "5px",
    cursor: "pointer",
    height: 110,
    maxWidth: 350,
    padding: "24px 32px 24px 32px",
    transition: "all .5s ease-in-out",
    ":hover": {
      transform: "scale(1.03)",
      boxShadow: "0 10px 20px 0 rgba(3, 27, 78, 0.06)",
      backgroundColor: "#00ff84",
    },
  },
  title: {
    color: "#111",
    opacity: 0.5,
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.4px",
    marginBottom: "19px",
    minWidth: 102,
    textAlign: "center",
  },
  value: {
    color: "#002333",
    fontFamily: "Roboto Slab",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "28px",
    letterSpacing: "1px",
    lineHeight: "50px",
    textAlign: "center",
  },
});
