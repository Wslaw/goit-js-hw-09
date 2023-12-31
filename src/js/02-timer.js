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

refs.startBtn.addEventListener('click', onTimerStart);
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    const currentDate = new Date();
    
    if (selectedDates[0] > currentDate) {
           refs.startBtn.disabled = false;
    } else {
       refs.startBtn.disabled = true;
       Notify.failure('Please choose a date in the future', {
         timeout: 2000,
         width: '400px',
       });
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

let timerId = 0;

function convertMs(ms) {
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


function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = fp.selectedDates[0];

 timerId = setInterval(() => {
   const startTime = new Date();
   const countdown = selectedDate - startTime;
   refs.startBtn.disabled = true;

    // console.log(fp.selectedDates[0]);
    // console.log(startTime);
    // console.log(countdown);

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    counter(convertMs(countdown));
  }, 1000);
}

function counter({ days, hours, minutes, seconds }) {
  refs.timerFieldDays.textContent = addLeadingZero(days);
  refs.timerFieldHours.textContent = addLeadingZero(hours);
  refs.timerFieldMinutes.textContent = addLeadingZero(minutes);
  refs.timerFieldSeconds.textContent = addLeadingZero(seconds);
}

