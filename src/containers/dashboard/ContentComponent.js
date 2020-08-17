import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";

// components
import MiniCardComponent from "./MiniCardComponent";
// import TodayTrendsComponent from "./TodayTrendsComponent";
// import UnresolvedTicketsComponent from "./UnresolvedTicketsComponent";
// import TasksComponent from "./TasksComponent";
// import ChartComponent from "./ChartComponent"
import TableSection from "./TableSection"


function ContentComponent() {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard Page</title>
      </Helmet>
      <Column>
        {/* CARDS */}
        <Row
          className={css(styles.cardsContainer)}
          wrap
          flexGrow={1}
          horizontal="space-between"
          breakpoints={{ 768: "column" }} // if above breakpoint-768, show all rows(4)
        >
          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }} // if above breakpoint-(384-768), show 2 rows
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Total Revenue"
              value="20000"
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Total Cost"
              value="16"
            />
          </Row>

          <Row
            className={css(styles.cardRow)}
            wrap
            flexGrow={1}
            horizontal="space-between"
            breakpoints={{ 384: "column" }}
          >
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Expenses"
              value="43"
            />
            <MiniCardComponent
              className={css(styles.miniCardContainer)}
              title="Refund"
              value="64"
            />
          </Row>
        </Row>
        {/* Purchase Invoice */}
        <div className="purchaseInvoice">
          <TableSection />
        </div>

        {/* CHART */}
        <div className={css(styles.todayTrends)}>
          <h3>Chart Area</h3>
        </div>

        <Row
          horizontal="space-between"
          className={css(styles.lastRow)}
          breakpoints={{ 1024: "column" }}
        >
          {/* <UnresolvedTicketsComponent
            containerStyles={styles.unresolvedTickets}
          />
          <TasksComponent containerStyles={styles.tasks} /> */}
        </Row>
      </Column>
    </Fragment>
  );
}

export default ContentComponent;


// styles
const styles = StyleSheet.create({
  cardsContainer: {
    marginRight: -30,
    marginTop: -30,
  },
  cardRow: {
    marginTop: 30,
    "@media (max-width: 768px)": {
      marginTop: 0,
    },
  },
  paragraph: {
    fontFamily: "Special Elite",
    fontSize: 'bold'
  },
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none",
    },
  },
  todayTrends: {
    marginTop: 30,
  },
  lastRow: {
    marginTop: 30,
  },
  unresolvedTickets: {
    marginRight: 30,
    "@media (max-width: 1024px)": {
      marginRight: 0,
    },
  },
  tasks: {
    marginTop: 0,
    "@media (max-width: 1024px)": {
      marginTop: 30,
    },
  },
});
