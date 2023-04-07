// -----classes and revenue chart-----

import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: true,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 6,
      colors: ["transparent"],
    },
    legend: {
      show: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 2,
      },
    },
    colors: ["green", "#08b185", "green"],
    xaxis: {
      categories: [
        "jss1",
        "jss2",
        "jss3",
        "ss1",
        "ss2a",
        "ss2b",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "30%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Acquired Revenue",
      data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
    },
    {
      name: "Expected Revenue",
      data: [10, 20, 40, 60, 20, 40, 60, 60, 20],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5"><b>Classes </b>Revenue</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">

        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="570" />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
