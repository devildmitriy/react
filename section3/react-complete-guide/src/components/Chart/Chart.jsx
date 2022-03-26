import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
  const totalMaximum = Math.max(...dataPoints.map((item) => item.value));
  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMaximum}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
