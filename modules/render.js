// Method to create and render new element
const createNewElement = (getData) => {
  const ulTag = document.getElementById('score-data');

  while (ulTag.hasChildNodes()) {
    ulTag.removeChild(ulTag.firstChild);
  }

  for (let i = 0; i < getData.length; i += 1) {
    const liTag = document.createElement('li');
    liTag.innerHTML = `${getData[i].user}: ${getData[i].score}`;
    ulTag.appendChild(liTag);
  }
};

export default createNewElement;