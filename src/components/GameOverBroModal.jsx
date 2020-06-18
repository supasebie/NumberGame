import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'semantic-ui-react';

const PlayAgainModal = ({ gameIsOverBro, onClick }) => (
  <Modal open={gameIsOverBro} closeOnDimmerClick={false}>
    <Modal.Header>You suck dawg</Modal.Header>
    <Modal.Content>
      <p>gg</p>
      <br />
      <p>Everyone hates you wretch</p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={() => onClick()}>
        <Icon name="check" />
      </Button>
    </Modal.Actions>
  </Modal>
);

PlayAgainModal.propTypes = {
  gameIsOverBro: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayAgainModal;
