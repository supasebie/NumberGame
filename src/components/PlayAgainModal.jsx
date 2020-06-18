import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const PlayAgainModal = ({ gameIsDone, startNewGame, gamesWon, time }) => (
  <Modal open={gameIsDone} closeOnDimmerClick={false}>
    <Modal.Header>Winner Winner Chicken Dinner</Modal.Header>
    <Modal.Content>
      <p>You&apos;re the bestest</p>
      <br />
      <p>
        Games won&nbsp;
        {gamesWon}
      </p>
      <p>
        You had {time}
        &nbsp;
        remaining!
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => startNewGame()}>
        <Icon name="check" />
      </Button>
    </Modal.Actions>
  </Modal>
);

PlayAgainModal.propTypes = {
  time: PropTypes.number.isRequired,
  gameIsDone: PropTypes.bool.isRequired,
  startNewGame: PropTypes.func.isRequired,
  gamesWon: PropTypes.number.isRequired,
};

export default PlayAgainModal;
