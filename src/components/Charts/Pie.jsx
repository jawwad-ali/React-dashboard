import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../context/ContextProvider";

const Pie = ({ id, data, legendVisibility, height }) => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <AccumulationChartComponent
        id={id}
        legendSettings={{ visible: legendVisibility }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#333e3E" : "#fff"}
      >
        <Inject
          services={[
            AccumulationLegend,
            PieSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
          ]}
        />

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={data}
            xName="x"
            yName="y"
            type="Pie"
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
