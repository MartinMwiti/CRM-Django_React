import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

// Chart
import Chart from "../../components/charts/Chart";

class TodayTrendsComponent extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  getChartData() {
    // Ajax call here to get data
    this.setState({
      chartData: {
        labels: [
          "Bo",
          "Wo",
          "Sp",
          "Lo",
          "Ca",
          "Ne",
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    });
  }

  componentWillMount() {
    this.getChartData();
  }


  render() {
    return (
        <Row
          flexGrow={1}
          className={css(styles.container)}
          horizontal="center"
          breakpoints={{ 1024: "column" }}
        >
          {/* GRAPH */}
          <Column
            wrap
            flexGrow={7}
            flexBasis="735px"
            className={css(styles.graphSection)}
            breakpoints={{
              1024: { width: "calc(100% - 48px)", flexBasis: "auto" },
            }}
          >
            {/* <Row wrap horizontal="space-between">
              <Column>
                <span className={css(styles.graphTitle)}>Today’s trends</span>
                <span className={css(styles.graphSubtitle)}>
                  as of 25 May 2019, 09:41 PM
                </span>
              </Column>
            </Row> */}
            <div>
              <Chart
                width={10}
                height={5}
                options={{ maintainAspectRatio: false }}
                chartData={this.state.chartData}
                location="Massachusets"
                legendPosition="bottom"
              />
            </div>
          </Column>
        </Row>
    );
  }
}

export default TodayTrendsComponent;

// styles
const styles = StyleSheet.create({
  section: {
    backgroundColor: "#FFFFFF",
    color: "#0000",
    borderRadius: 4,
    marginLeft: 30,
  },
  container: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: 4,
    cursor: "pointer",
  },
  graphContainer: {
    marginTop: 24,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  graphSection: {
    padding: 24,
  },
  graphSubtitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "16px",
    letterSpacing: "0.1px",
    color: "#9FA2B4",
    marginTop: 4,
    marginRight: 8,
  },
  graphTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 19,
    lineHeight: "24px",
    letterSpacing: "0.4px",
    color: "#252733",
  },
  legendTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: "15px",
    letterSpacing: "0.1px",
    color: "#9FA2B4",
    marginLeft: 8,
  },
  separator: {
    backgroundColor: "#DFE0EB",
    width: 1,
    minWidth: 1,
  },
  statContainer: {
    borderBottom: "1px solid #DFE0EB",
    padding: "24px 32px 24px 32px",
    height: "calc(114px - 48px)",
    ":last-child": {
      border: "none",
    },
  },
  stats: {
    borderTop: "1px solid #DFE0EB",
    width: "100%",
  },
  statTitle: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: "22px",
    letterSpacing: "0.3px",
    textAlign: "center",
    color: "#9FA2B4",
    whiteSpace: "nowrap",
    marginBottom: 6,
  },
  statValue: {
    fontFamily: "Muli",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "30px",
    letterSpacing: "0.3px",
    textAlign: "center",
    color: "#252733",
  },
});
