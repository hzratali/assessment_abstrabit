import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "string", id: "Term" },
    { type: "string", id: "Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  ["Utkarsh FD 1", "Utkarsh FD 1", new Date(2024, 0, 1), new Date(2024, 4, 31)],
  [
    "Shriram FD Plan 2",
    "Shriram FD Plan 2",
    new Date(2024, 1, 1),
    new Date(2025, 4, 31),
  ],
  [
    "Bajaj Finserv FD 1",
    "Bajaj Finserv FD 1",
    new Date(2024, 3, 1),
    new Date(2025, 8, 30),
  ],
  [
    "Mahindra FD Plan 2",
    "Mahindra FD Plan 2",
    new Date(2024, 5, 1),
    new Date(2026, 10, 30),
  ],
];

export const options = {
  timeline: { showRowLabels: false },
};

function TimelineChart() {
  return (
    <div className="timeline-chart-container">
      <h2>FD Maturity Timeline</h2>
      <Chart
        chartType="Timeline"
        data={data}
        options={options}
        width="100%"
        height="300px"
      />
    </div>
  );
}

export default TimelineChart;
