import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const PlayAgainModal = (
  {
    gameStatus, onClick, gamesWon, time,
  },
) => (
  <Modal open={gameStatus} closeOnDimmerClick={false}>
    <Modal.Header>Winner Winner Chicken Dinner</Modal.Header>
    <Modal.Content>
      <p>
        You&apos;re the bestest
      </p>
      <p>
        Games won&nbsp;
        {gamesWon + 1}
      </p>
      <p>
        You had&nbsp;
        {time}
        &nbsp;
        seconds
        remaining!
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => onClick(gameStatus)}>
        <Icon name="check" />
      </Button>
    </Modal.Actions>
  </Modal>
);

PlayAgainModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  gameStatus: PropTypes.bool.isRequired,
  gamesWon: PropTypes.number.isRequired,
};

export default PlayAgainModal;
