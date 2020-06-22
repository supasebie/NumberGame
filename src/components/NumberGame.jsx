/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Grid } from 'semantic-ui-react';
import utils from '../utils';
import NumberPad from './NumberPad';
import StarsRender from './StarsRender';
import 'react-toastify/dist/ReactToastify.css';
import PlayAgainModal from './PlayAgainModal';
import GameOverBroModal from './GameOverBroModal';

const NumberGame = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState(utils.range(1, 9));
  const [candidateNumbers, setCandidateNumbers] = useState([]);
  const [gamesWon, setGamesWon] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const gameOverToast = () => toast('uluz');

  useEffect(() => {
    let interval = null;
    if (seconds > 0 && availableNumbers.length > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    if (seconds === 0) {
      gameOverToast();
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const candidatesAreWrong = utils.sum(candidateNumbers) > stars;

  // eslint-disable-next-line no-nested-ternary
  const gameStatus = availableNumbers.length === 0
    ? 'won'
    : seconds === 0 ? 'lost' : 'active';

  const correctToast = () => toast('Correct');

  const numberStatus = (number) => {
    if (!availableNumbers.includes(number)) {
      return 'used';
    }
    if (candidateNumbers.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (numberId, currentStatus) => {
    if (currentStatus === 'used' || gameStatus !== 'active') {
      return;
    }

    const newCandidateNumbers = currentStatus === 'available'
      ? candidateNumbers.concat(numberId)
      : candidateNumbers.filter((cn) => cn !== numberId);

    candidateNumbers.concat(numberId);
    if (utils.sum(newCandidateNumbers) !== stars) {
      setCandidateNumbers(newCandidateNumbers);
    } else {
      const newAvailableNumbers = availableNumbers.filter(
        (n) => !newCandidateNumbers.includes(n),
      );
      setStars(utils.randomSumIn(newAvailableNumbers, 9));
      setAvailableNumbers(newAvailableNumbers);
      correctToast();
      setCandidateNumbers([]);
    }
  };

  const increaseGamesWon = () => {
    setGamesWon(gamesWon + 1);
  };

  const onFinishGameClick = () => {
    increaseGamesWon();
    setAvailableNumbers([]);
  };

  const onPlayAgainClick = () => {
    if (gameStatus === 'won') {
      increaseGamesWon();
    }
    setStars(utils.random(1, 9));
    setAvailableNumbers(utils.range(1, 9));
    setCandidateNumbers([]);
    setSeconds(20);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={200}
      />
      <Grid columns={2}>
        <Grid.Row centered>
          <Grid columns={3}>
            {gameStatus === 'won'
              ? (
                <PlayAgainModal
                  gamesWon={gamesWon}
                  time={seconds}
                  gameStatus={gameStatus}
                  onClick={onPlayAgainClick}
                />
              )
              : gameStatus === 'active'
                ? (
                  utils
                    .range(1, stars)
                    .map((starId) => <StarsRender starId={starId} key={starId} />)
                )
                : (
                  <GameOverBroModal
                    gameStatus={gameStatus}
                    gamesWon={gamesWon}
                    time={seconds}
                    onClick={onPlayAgainClick}
                  />
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
        <p>
          Time remaining&nbsp;
          {seconds}
        </p>
        <button
          type="button"
          className="ui button"
          onClick={onFinishGameClick}
        >
          Finish game
        </button>
      </Grid>
    </>
  );
};

export default NumberGame;
