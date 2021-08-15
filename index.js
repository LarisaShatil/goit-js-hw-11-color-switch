// на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  toStart: document.querySelector('[data-action="start"]'),
  toStop: document.querySelector('[data-action="stop"]'),
};

const INTERVAL = 1000;

function changeColorTheme() {
  refs.toStart.disabled = true;
  intervalID = setInterval(() => refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)], INTERVAL);
};


function changesStop() {
  refs.toStart.disabled = false;
  clearInterval(intervalID);
}

refs.toStart.addEventListener('click',  changeColorTheme);
refs.toStop.addEventListener('click',  changesStop);


