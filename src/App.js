import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import Button from "@material-ui/core/Button";

import CategoryForm from "./components/CategoryForm";

class App extends Component {
  state = {
    labels: ["start"],
    chartData: [0],
    isAdd: false,
    category: "Ace"
  };

  handleAdd = () => {
    this.setState({ isAdd: true }, () => {
      this.setData();
    });
  };

  handleSubtract = () => {
    this.setState({ isAdd: false }, () => {
      this.setData();
    });
  };

  setData = () => {
    const { chartData, labels } = this.state;
    const lastDataPoint = chartData[chartData.length - 1];
    this.pushNewDataPoint(chartData, lastDataPoint);
    labels.push(this.state.category);
    this.setState({ chartData: chartData, labels: labels });
  };

  handleDelete = () => {
    const { chartData, labels } = this.state;
    if (chartData.length > 1) {
      chartData.pop();
      labels.pop();
      this.setState({ chartData: chartData, labels: labels });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  pushNewDataPoint(dataPoints, lastDataPoint) {
    if (this.state.isAdd) {
      dataPoints.push(lastDataPoint + 1);
    } else {
      dataPoints.push(lastDataPoint - 1);
    }
  }

  render() {
    return (
      <div>
        <Line
          data={{
            labels: this.state.labels,
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
                data: this.state.chartData,
                steppedLine: "after"
              }
            ]
          }}
          options={{
            responsive: true,
            title: {
              display: true,
              text: "Haikyu"
            }
          }}
          redraw
        />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "10px"
            }}
          >
            <CategoryForm
              handleChange={this.handleChange}
              category={this.state.category}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubtract}
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
              onClick={this.handleAdd}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
