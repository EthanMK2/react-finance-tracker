import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeightPercent = "0%";
  let barFillHeight = "0%"

  console.log("ChartBar: " + props.budget)

  if (props.budget > 0) {
    barFillHeightPercent = Math.round((props.value / props.budget) * 100)
    barFillHeight = barFillHeightPercent > 100 ? "100%" : barFillHeightPercent + "%"  // allows transition duration to work properly if item is way out of budget
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
