import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

// data-start
// data-days
// data-hours
// data - minutes
// data - seconds
// datetime - picker

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerFieldDays: document.querySelector('[data-days]'),
  timerFieldHours: document.querySelector('[data-hours]'),
  timerFieldMinites: document.querySelector('[data-minutes]'),
  timerFieldSeconds: document.querySelector('[data-seconds]'),
};
console.log(refs.startBtn);
console.log(refs.timerFieldDays);
console.log(refs.timerFieldHours);
console.log(refs.timerFieldMinites);
console.log(refs.timerFieldSeconds);

// refs.timerFieldDays.textContent = '25';

refs.startBtn.addEventListener('click', onTimerStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = new Date();
    const selectedDate = selectedDates[0];
    if (selectedDate < currentDate) {
      refs.startBtn.disabled = true;
      window.alert("Please choose a date in the future");
    } else {refs.startBtn.disabled = false;
    }
  },
};

const fp = flatpickr('#datetime-picker', options);


function onTimerStart() {}
