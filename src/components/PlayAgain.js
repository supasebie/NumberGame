import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";

const PlayAgain = (props) => (
  <Grid>
    <Card>
      <Card.Content>
        <Card.Header>Winner Winner Chicken Dinner</Card.Header>
        <Card.Meta>
          <span className="date">You're the bestest</span>
        </Card.Meta>
        <Card.Description>
          Congratulations, you win!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          1 win
        </a>
      </Card.Content>
      <button
      class='ui button'
      onClick={() => {
        props.onClick(props.availableNumbers)
      }}
      >
        Play Again!
      </button>
    </Card>
  </Grid>
);

export default PlayAgain;
