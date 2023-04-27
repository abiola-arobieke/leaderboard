import './style.css';
import createNewElement from '../modules/render.js';

// Declare global variable
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('btn-refresh');
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PZpCHLRjH8Q2y1IfdufA/scores/';

// Get all users and their scores from the server
const getAllScores = async () => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json();
  createNewElement(res.result);
};

// Add user and their scores to the server
const addScore = async (data) => {
  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });
};

submitBtn.addEventListener('click', async () => {
  const username = document.getElementById('user-name');
  const score = document.getElementById('score');
  if (username.value && score.value) {
    const data = {
      user: username.value,
      score: Number(score.value),
    };
    await addScore(JSON.stringify(data));
    username.value = '';
    score.value = '';
  }
});

refreshBtn.addEventListener('click', () => {
  getAllScores();
});
