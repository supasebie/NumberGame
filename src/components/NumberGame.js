import React from "react";
import utils from "../utils.js";
import NumberPad from "./NumberPad.js";
import StarsRender from "./StarsRender";
import PlayAgain from "./PlayAgain.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, GridRow } from "semantic-ui-react";

const NumberGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;
  const gameIsDone = availableNumbers.length === 0;

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return "used";
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const onNumberClick = (numberId, currentStatus, notify) => {
    if (currentStatus === "used") {
      return;
    }

    const newCandidateNumbers =
      currentStatus === "available"
        ? candidateNumbers.concat(numberId)
        : candidateNumbers.filter((cn) => cn !== numberId);

    candidateNumbers.concat(numberId);
    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (n) => !newCandidateNumbers.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      correctToast();
      setCandidateNumbers([]);
    }
  };

  const onFinishGameClick = () => {
    setAvailableNumbers([]);
  }

  const onPlayAgainClick = () => {};

  const correctToast = (props) => toast("Correct");
  const gameOverToast = () => toast("Game Over Man! You win!");

  return (
    <>
      <ToastContainer />
      <Grid columns={2}>
        <Grid.Row centered>
          <Grid columns={3}>
            {gameIsDone ? (
              // <PlayAgain
              //   availableNumbers={availableNumbers}
              //   onClick={onPlayAgainClick}
              // />
              <PlayAgainModal/>
            ) : (
              utils
                .range(1, stars)
                .map((starId) => <StarsRender starId={starId} key={starId} />)
            )}
          </Grid>
          <Grid columns={3}>
            {utils.range(1, 9).map((numberId) => (
              <NumberPad
                onClick={onNumberClick}
                key={numberId}
                numberId={numberId}
                status={numberStatus(numberId)}
                correctToast={correctToast}
              />
            ))}
          </Grid>
        </Grid.Row>
      </Grid>
      <Grid columns={2} centered>
          <p>Time Remaining: 10</p>
          <button
            class='ui button'
            onClick={onFinishGameClick}
          >
            Finish game
          </button>
      </Grid>
    </>
  );
};

export default NumberGame;
