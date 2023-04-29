import './style.css';
import createNewElement from '../modules/render.js';

// Declare global variable
const submitBtn = document.getElementById('submit');
const refreshBtn = document.getElementById('btn-refresh');
const gamesBtn = document.getElementById('games');
const closeBtn = document.getElementById('close');
const addGameBtn = document.getElementById('add-games');
const gameTab = document.getElementById('all-games');
const overlay = document.getElementById('overlay');
const addNewGameBtn = document.getElementById('add-new');
const gamesData = JSON.parse(localStorage.getItem('leaderboard')) || [];
const selectedGame = JSON.parse(localStorage.getItem('game-select')) || {};
const gameTitle = document.querySelectorAll('.game-title');
let apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/PZpCHLRjH8Q2y1IfdufA/scores/';

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

// Load all games created and stored in the local storage
const existingGames = () => {
  gamesData.forEach((user) => {
    const divElement = document.createElement('div');
    divElement.classList.add('p-5');
    divElement.innerHTML = user.name;
    gameTab.appendChild(divElement);
  });
};

// Create API url
const createApiUrl = (gameName) => {
  gamesData.forEach((gameData) => {
    if (gameData.name === gameName) {
      apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameData.id}/scores/`;
    }
  });
};

const loadPickedGame = () => {
  gameTitle.forEach((gameElement) => {
    gameElement.innerHTML = selectedGame.name;
  });
  createApiUrl(selectedGame.name);
};

// Get user name and score
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

// Refresh button to get users and their scores
refreshBtn.addEventListener('click', () => {
  getAllScores();
});

// Hide and show add game form
gamesBtn.addEventListener('click', () => {
  if (gameTab.className.includes('hide')) {
    gameTab.classList.remove('hide');
    gameTab.classList.add('show');
  } else {
    gameTab.classList.remove('show');
    gameTab.classList.add('hide');
  }
});

// Save selected game to the local storage
gameTab.addEventListener('click', (e) => {
  gameTitle.forEach((gameElement) => {
    gameElement.innerHTML = e.target.innerHTML;
    selectedGame.name = e.target.innerHTML;
    localStorage.setItem('game-select', JSON.stringify(selectedGame));
  });
  createApiUrl(selectedGame.name);
});

// Show overlay
addGameBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

// Close button to hide overlay
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Add new game to the server
const addNewGame = async (data) => {
  const createUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const response = await fetch(createUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  const removePreStr = res.result.slice(14);
  const removeSufStr = removePreStr.slice(0, -7);
  data.id = removeSufStr;
  gamesData.push(data);
  localStorage.setItem('leaderboard', JSON.stringify(gamesData));
};

addNewGameBtn.addEventListener('click', async () => {
  const newGame = document.getElementById('new-game');
  if (newGame.value) {
    const data = {
      name: newGame.value,
    };
    await addNewGame(data);
    newGame.value = '';
  }
});

existingGames();
loadPickedGame();