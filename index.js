// на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

const colors = [
  '#772222',
  '#235300',
  '#013A65',
  '#f7cac9',
  '#b8c85e',
  '#810040',
  '#660099',
  '#ffefdb',
  '#b3f3f2',
  '#55647E',
  '#FF9500',
  '#C793E1',
  'FFCD00',
];


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  toStart: document.querySelector('[data-action="start"]'),
  toStop: document.querySelector('[data-action="stop"]'),
};
refs.body.style.backgroundColor= '#FFDCA3';

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


