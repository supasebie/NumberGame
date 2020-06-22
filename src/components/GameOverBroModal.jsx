import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const GameOverBroModal = (
  {
    gameStatus, onClick,
  },
) => (
  <Modal open={gameStatus} closeOnDimmerClick={false}>
    <Modal.Header>You ran out of time! :(</Modal.Header>
    <Modal.Content>
      <p>Don&apos;t let that get you down.</p>
      <br />
      <p>It&apos;s never over, you just need to practice and try harder!</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => onClick(gameStatus)}>
        <Icon name="check" />
      </Button>
    </Modal.Actions>
  </Modal>
);

GameOverBroModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default GameOverBroModal;
