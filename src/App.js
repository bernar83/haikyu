import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Button from "@material-ui/core/Button";

import CategoryForm from "./components/CategoryForm";

class App extends Component {
  state = {
    chartData: {
      labels: ["start"],
      datasets: [
        {
          label: "Trend",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0],
          steppedLine: true
        }
      ]
    },
    isFormOpen: false,
    isAdd: false
  };

  handleAddFormOpen = () => {
    this.setState({ isFormOpen: true, isAdd: true }, () => {
      this.setData();
    });
  };

  handleSubtractFormOpen = () => {
    this.setState({ isFormOpen: true, isAdd: false }, () => {
      this.setData();
    });
  };

  setData = () => {
    if (this.state.isAdd) {
      const { datasets, labels } = this.state.chartData;
      datasets[0].data = add(datasets[0].data);
      this.setState({ chartData: { labels, datasets } });
    } else {
      const { datasets, labels } = this.state.chartData;
      datasets[0].data = subtract(datasets[0].data);
      this.setState({ chartData: { labels, datasets } });
    }
  };

  render() {
    return (
      <div>
        <Line data={this.state.chartData} />
        <CategoryForm />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubtractFormOpen}
        >
          -
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleAddFormOpen}
        >
          +
        </Button>
      </div>
    );
  }
}

const add = data => {
  const lastArraryNumber = data[data.length - 1];
  data.push(lastArraryNumber + 1);
  return data;
};

const subtract = data => {
  const lastArraryNumber = data[data.length - 1];
  data.push(lastArraryNumber - 1);
  return data;
};

export default App;
