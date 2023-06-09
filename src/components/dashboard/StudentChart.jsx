import React, { Component } from "react";
import Chart from "react-apexcharts";

class StudentChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "SS1",
            "SS2",
            "SS3A",
            "JSS1",
            "JSS2",
            "JSS3",
            "JSS1A",
            "SS3B",
            "SS3C",
          ],
        },
      },
      series: [
        {
          name: "Revenue",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StudentChart;
