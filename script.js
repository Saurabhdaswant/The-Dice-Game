"use strict";

//Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold  ");

//starting conditions
diceEl.classList.add("hidden");
score1El.textContent = 0;
score0El.textContent = 0;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Rolling dice funtionality
btnRoll.addEventListener("click", function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEl.classList.remove("hidden");
  //logic for displaying the random dice number
  diceEl.src = `img/dice-${dice}.png`;

  //3. check for rolled 1: if true, switch to next player

  if (dice !== 1) {
    currentScore += dice;

    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //changing background while switching player
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
