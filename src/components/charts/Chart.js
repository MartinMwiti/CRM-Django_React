import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };

  render() {
    // use render if you wish to output to a screen
    return (
      <div>
        <Bar
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  barPercentage: 0.3,
                },
              ],
            },
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />

        {/* <Line
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        /> */}
      </div>
    );
  }
}
export default Chart;
