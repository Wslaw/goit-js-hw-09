import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerFieldDays: document.querySelector('[data-days]'),
  timerFieldHours: document.querySelector('[data-hours]'),
  timerFieldMinutes: document.querySelector('[data-minutes]'),
  timerFieldSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

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
      Notify.failure('Please choose a date in the future', {
        timeout: 2000,
        width: '400px',
      });
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

function addLeadingZero(value) {
  return value.padStart(2, 0);
}

function onTimerStart() {
  console.log("Start");

  const timerId = setInterval(() => {
    const curDate = new Data();
    refs.startBtn.disabled = true;
    console.log(fp.selectedDates[0]);
    console.log(curDate);
    console.log(different);
    if (different < 0) {
      clearInterval(timerId);
      return;
    }
    counter(different);
  }, 1000);
}

function counter({ days, hours, minutes, seconds }) {
  refs.timerFieldDays.textContent = addLeadingZero(days);
  refs.timerFieldHours.textContent = addLeadingZero(hours);
  refs.timerFieldMinutes.textContent = addLeadingZero(minutes);
  refs.timerFieldSeconds.textContent = addLeadingZero(seconds);
}

const fp = flatpickr('#datetime-picker', options);
refs.startBtn.addEventListener('click', onTimerStart);
