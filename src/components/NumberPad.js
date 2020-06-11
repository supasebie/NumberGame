import React from "react";
import { Grid } from "semantic-ui-react";

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "lightblue",
};

const NumberPad = (props) => {
  return (
    <Grid.Column>
      <button
        className="number"
        onClick={() =>
          props.onClick(props.numberId, props.status)
        }
        style={{ backgroundColor: colors[props.status] }}
      >
        {props.numberId}
      </button>
    </Grid.Column>
  );
};

export default NumberPad;
