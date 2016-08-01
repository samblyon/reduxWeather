import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = data => {
  const sum = data.reduce((prev, curr) => prev + curr)
  return (sum / data.length).toFixed(2);
}

export default (props) => {
  return (
    <div>
      <div>Avg: {average(props.data)} C</div>
      <Sparklines
        svgHeight={120}
        svgWidth={120}
        data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
    </div>
  );
}