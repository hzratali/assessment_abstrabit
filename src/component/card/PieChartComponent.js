import React from "react";
import { Pie } from "react-chartjs-2";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

function PieChartComponent({ pieData, pieOptions }) {
  const [selectedValue, setSelectedValue] = React.useState("Deposit Amt");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="pie-chart-container">
      <div className="pie-chart-header">
        <h2>Your FD Portfolio</h2>
        <FormControl variant="outlined" size="small">
          <InputLabel>Deposit Amt</InputLabel>
          <Select
            value={selectedValue}
            onChange={handleChange}
            label="Deposit Amt"
          >
            <MenuItem value="Deposit Amt">Deposit Amt</MenuItem>
            {/* Add other options here if necessary */}
          </Select>
        </FormControl>
      </div>
      <div className="pie-chart-content">
        <div className="pie-chart">
          <Pie
            data={pieData}
            options={{
              ...pieOptions,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="pie-chart-legend">
          <ul>
            {pieData.labels.map((label, index) => (
              <li key={index}>
                <span
                  style={{
                    backgroundColor: pieData.datasets[0].backgroundColor[index],
                  }}
                ></span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PieChartComponent;
