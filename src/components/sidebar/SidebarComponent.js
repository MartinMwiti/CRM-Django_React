import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { NavLink } from "react-router-dom";

// components
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";

// icons
import IconHome from "../../assets/icon-home.js"
import IconProducts from "../../assets/icon-products.js";
import IconIdeas from "../../assets/icon-ideas.js";
import IconContacts from "../../assets/icon-customers";
import IconAgents from "../../assets/icon-employees";
import IconSettings from "../../assets/icon-settings";
import IconBurger from "../../assets/icon-burger";




class SidebarComponent extends Component {
  state = {
    expanded: false,
  };

  onItemClicked = (item) => {
    this.setState({ expanded: false });
    return this.props.onChange(item);
  };

  isMobile = () => window.innerWidth <= 768;

  toggleMenu = () =>
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  // expanded will be the opposite of the current expanded state

  renderBurger = () => {
    return (
      <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
        <IconBurger />
      </div>
    );
  };

  render() {
    const { expanded } = this.state;
    const isMobile = this.isMobile();

    return (
      <div style={{ position: "relative" }}>
        <Row
          className={css(styles.mainContainer)}
          breakpoints={{
            768: css(
              styles.mainContainerMobile,
              expanded && styles.mainContainerExpanded
            ),
          }}
        >
          {isMobile && !expanded && this.renderBurger()}

          <Column
            className={css(styles.container)}
            breakpoints={{
              768: css(
                styles.containerMobile,
                expanded ? styles.show : styles.hide
              ),
            }}
          >
            <LogoComponent />
            <div className={css(styles.LogoSeparator)}></div>
            <Column className={css(styles.menuItemList)}>
              <NavLink to={"/Dashboard"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Dashboard"
                  icon={IconHome}
                  onClick={() => this.onItemClicked("Dashboard")}
                  active={localStorage.getItem("selectedItem") === "Dashboard"} // returns boolean
                />
              </NavLink>

              <NavLink to={"/Customers"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Customers"
                  icon={IconContacts}
                  onClick={() => this.onItemClicked("Customers")}
                  active={localStorage.getItem("selectedItem") === "Customers"}
                />
              </NavLink>

              <NavLink to={"/Products"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Products"
                  icon={IconProducts}
                  onClick={() => this.onItemClicked("Products")} // when clicked gives onItemClicked the name which in turn returns the name back to the parent(Aoo.js)
                  active={localStorage.getItem("selectedItem") === "Products"}
                />
              </NavLink>

              <NavLink to={"/Analytics"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Analytics"
                  icon={IconIdeas}
                  onClick={() => this.onItemClicked("Analytics")}
                  active={localStorage.getItem("selectedItem") === "Analytics"}
                />
              </NavLink>

              <NavLink to={"/Employees"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Employees"
                  icon={IconAgents}
                  onClick={() => this.onItemClicked("Employees")}
                  active={localStorage.getItem("selectedItem") === "Employees"}
                />
              </NavLink>

              <div className={css(styles.separator)}></div>
              <NavLink to={"/settings"} style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Settings"
                  icon={IconSettings}
                  onClick={() => this.onItemClicked("Settings")}
                  active={localStorage.getItem("selectedItem") === "Settings"}
                />
              </NavLink>
            </Column>
          </Column>

          {isMobile && expanded && (
            <div
              // the shadow next to the extended layout in mobile mode.
              className={css(styles.outsideLayer)}
              onClick={this.toggleMenu}
            ></div>
          )}
        </Row>
      </div>
    );
  }
}

export default SidebarComponent;


//styles
const styles = StyleSheet.create({
  burgerIcon: {
    cursor: "pointer",
    position: "absolute",
    left: 24,
    top: 34,
  },
  container: {
    backgroundColor: "#002333",
    width: 240,
    paddingTop: 10,
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "5px 0 20px 0 #dcdee1",
  },
  containerMobile: {
    transition: "left 0.5s, right 0.5s",
    width: 240,
    height: "100%",
    zIndex: 901,
    position: "fixed",
    overflowX: "hidden",
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh",
  },
  mainContainerMobile: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  mainContainerExpanded: {
    width: "100%",
    minWidth: "100vh",
  },
  menuItemList: {
    marginTop: 52,
  },
  outsideLayer: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900,
  },
  separator: {
    borderTop: "1px solid #fff",
    marginTop: 50,
    marginBottom: 16,
    opacity: 0.15,
  },
  // LogoSeparator: {
  //   borderTop: "1px solid #fff",
  //   // paddingTop: 50,
  //   // marginBottom: 16,
  //   opacity: 0.15,
  // },
  hide: {
    left: -240,
  },
  show: {
    left: 0,
  },
});