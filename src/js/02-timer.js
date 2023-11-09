
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

// data-start
// data-days
// data-hours
// data - minutes
// data - seconds
// datetime - picker

const refs = {
  startBtn: document.querySelector('button[data-start]'),
};
console.log(refs.startBtn);

refs.startBtn.addEventListener('click', () => {
    console.log("rrrrrrrrrr");
});
