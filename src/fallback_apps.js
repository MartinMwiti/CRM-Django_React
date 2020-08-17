// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./App.css";
// import { Column, Row } from "simple-flexbox";
// import { StyleSheet, css } from "aphrodite";

// // For styling
// import "./sass/main.scss";

// // components
// import SidebarComponent from "./components/sidebar/SidebarComponent";
// import HeaderComponent from "./components/header/HeaderComponent";
// import ContentComponent from "./containers/content/ContentComponent";
// import ProductsComponents from "./containers/products/ProductsComponents";
// import MainAnalytics from "./containers/analytics/MainAnalytics";
// import NotFound from "./components/pages/NotFound";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItem: localStorage.getItem("selectedItem") || "Overview",
//     };
//   }

//   componentDidMount() {
//     window.addEventListener("resize", this.resize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.resize);
//   }

//   resize = () => this.forceUpdate();

//   render() {
//     const { selectedItem } = this.state;

//     return (
//       <Router>
//         <Row className={css(styles.container)}>
//           <SidebarComponent
//             selectedItem={selectedItem}
//             onChange={(selectedItem) =>
//               this.setState({ selectedItem }, () => {
//                 localStorage.setItem("selectedItem", selectedItem);
//               })
//             }
//           />

//           <Column flexGrow={1} className={css(styles.mainBlock)}>
//             <HeaderComponent title={selectedItem} />

//             <div className={css(styles.content)}>
//               <Switch>
//                 <Route exact path="/" component={ContentComponent} />
//                 <Route exact path="/products" component={ProductsComponents} />
//                 <Route exact path="/analytics" component={MainAnalytics} />
//                 <Route component={NotFound} />
//               </Switch>
//             </div>
//           </Column>
//         </Row>
//       </Router>
//     );
//   }
// }

// export default App;

// // Style
// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     minHeight: "100vh",
//   },
//   content: {
//     marginTop: 54,
//   },
//   mainBlock: {
//     backgroundColor: "#f9fafa",
//     padding: 30,
//     marginLeft: 240,
//     "@media (max-width: 768px)": {
//       marginLeft: 0,
//     },
//   },
// });
