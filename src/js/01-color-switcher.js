const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerId = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
refs.stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
});
// ----------------------------inline style-----------
refs.startBtn.style.margin = '500px 20px auto 500px';
refs.startBtn.style.padding = '15px 40px';
refs.stopBtn.style.padding = '15px 40px';
refs.stopBtn.style.padding = '15px 40px';
refs.startBtn.style.fontSize = '18px';
refs.stopBtn.style.fontSize = '18px';
refs.startBtn.style.coursor = '18px';
refs.stopBtn.style.cursor = 'pointer';
refs.startBtn.style.cursor = 'pointer';

refs.startBtn.addEventListener('mouseover', () => {
  refs.startBtn.style.backgroundColor = '#d9d9e2';
});
refs.stopBtn.addEventListener('mouseover', () => {
  refs.stopBtn.style.backgroundColor = '#d9d9e2';
});
refs.startBtn.addEventListener('mouseout', () => {
  refs.startBtn.style.backgroundColor = '';
});
refs.stopBtn.addEventListener('mouseout', () => {
  refs.stopBtn.style.backgroundColor = '';
});
