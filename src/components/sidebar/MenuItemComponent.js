import React from "react";
import { bool, func, string } from "prop-types";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  activeBar: {
    height: 50,
    borderRadius: 50,
    width: 3,
    backgroundColor: "#FFF",
    position: "absolute",
    left: 0, // places the bar to the left most position
  },
  activeContainer: {
    backgroundColor: "rgba(221,226,255, 0.08)",
    // borderBottomRightRadius: 20,
    // borderTopRightRadius: 20,
  },
  activeTitle: {
    color: "#FFF",
    opacity: 1,
  },
  container: {
    height: 50,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(221,226,255, 0.08)",
    },
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.2px",
    color: "#a9a9a9",
    opacity: 0.8,
    marginLeft: 24,
  },
});

function MenuItemComponent(props) {
  const { active, icon, title, ...otherProps } = props;
  const Icon = icon;
  return (
    <Row
      className={css(styles.container, active && styles.activeContainer)}
      vertical="center"
      {...otherProps} // use this since in the parent ' SideBarComponent', i passed 4 props but since i'm only using 3, i add  others to prevent error.
      // if props is 'active', add activeContainer style to the container containing the icon & title.
    >
      {/* if props is active, add a vertical bar element */}
      {active && <div className={css(styles.activeBar)}></div>}
      {/* if props is active, fill the icon color with bright style. If not active, increase the icon opacity */}
      <Icon fill={active && "#fff"} opacity={!active && "0.4"} />
      {/* if props is active, apply activeTitle style which makes the title brighter */}
      <span className={css(styles.title, active && styles.activeTitle)}>
        {title}
      </span>
    </Row>
  );
}

MenuItemComponent.propTypes = {
  active: bool,
  icon: func,
  title: string,
};

export default MenuItemComponent;
