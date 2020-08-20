import React, { Fragment } from 'react'
import { Helmet } from "react-helmet";
import { Column } from "simple-flexbox";

// Component
import AnalyticsComponent from "./AnalyticsComponent"
// import Chart from "../../components/charts/Chart"

const MainAnalytics = () => {
  return (
    <Fragment>
      <Helmet>
        <style>{"body { background-color: white; }"}</style>
        <title>Analysis Page</title>
      </Helmet>
      <Column>
        <div className="contentContainer">
          <strong className="analyticsSection">Build by Martin Mwiti - Nakala</strong>
          <AnalyticsComponent />
          {/* <Chart /> */}
        </div>
      </Column>
    </Fragment>
  );
};

export default MainAnalytics;