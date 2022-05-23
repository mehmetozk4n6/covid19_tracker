import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";
import { itemsSelector } from "../redux/covidSlice";
import { lightBlue, teal, pink, amber } from "@mui/material/colors";

function Graphic() {
  const items = useSelector(itemsSelector);
  const data = [
    { cases: 1, nums: items && items?.confirmed.value },
    { cases: 2, nums: items && items?.recovered.value },
    { cases: 3, nums: items && items?.deaths.value },
    {
      cases: 4,
      nums:
        items &&
        items?.confirmed.value - items?.recovered.value - items?.deaths.value,
    },
  ];

  return (
    <div className="graphic">
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Infected", "Recovered", "Deaths", "Active"]}
          style={{
            tickLabels: { fontSize: 10 },
          }}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => x}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 20, padding: 20 },
            grid: { stroke: ({ tick }) => (tick > 0.5 ? "red" : "grey") },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 5 },
          }}
        />
        <VictoryStack>
          <VictoryBar
            style={{
              data: {
                fill: ({ index }) => {
                  return index === 0
                    ? lightBlue["200"]
                    : index === 1
                    ? teal["200"]
                    : index === 2
                    ? pink["200"]
                    : amber["200"];
                },
              },
            }}
            data={data}
            labels={({ datum }) => datum.x}
            // data accessor for x values
            x="cases"
            // data accessor for y values
            y="nums"
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
}

export default Graphic;
