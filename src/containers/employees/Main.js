import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite/no-important";

// components
import MiniCardComponent from "../dashboard/MiniCardComponent";
import EmployeeTable from "./EmployeeTable"


function ContentComponent() {
  return (
    <Fragment>
      <Helmet>
        <title>Employee Page</title>
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
          <EmployeeTable />
        </div>
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
  miniCardContainer: {
    flexGrow: 1,
    marginRight: 30,
    "@media (max-width: 768px)": {
      marginTop: 30,
      maxWidth: "none",
    },
  },
});
