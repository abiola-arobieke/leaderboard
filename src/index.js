import './style.css';
import createNewElement from '../modules/render.js';

// Declare global variable
const submitBtn = document.getElementById('submit');

// Save input data
const saveUserData = (user, theirScore) => {
  const leaderBoardArr = JSON.parse(localStorage.getItem('userData')) || [];
  const receivedData = {};

  receivedData.name = user;
  receivedData.score = theirScore;
  leaderBoardArr.push(receivedData);
  localStorage.setItem('userData', JSON.stringify(leaderBoardArr));
};

// Callback function
const displayResult = (name, score, saveUser) => {
  saveUser(name, score);
};

submitBtn.addEventListener('click', () => {
  const username = document.getElementById('user-name');
  const score = document.getElementById('score');
  if (username.value && score.value) {
    displayResult(username.value, score.value, saveUserData);
    createNewElement();
    username.value = '';
    score.value = '';
  }
});

// Load existing data and create new element
createNewElement();
