import React from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'lightblue',
};

const NumberPad = ({ numberId, status, onClick }) => (
  <Grid.Column>
    <button
      type="button"
      className="number"
      onClick={() => onClick(numberId, status)}
      style={{ backgroundColor: colors[status] }}
    >
      {numberId}
    </button>
  </Grid.Column>
);

NumberPad.propTypes = {
  numberId: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberPad;
