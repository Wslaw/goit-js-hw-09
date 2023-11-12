import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const refs = {
  startBtn: document.querySelector('[data-start]'),
  timerFieldDays: document.querySelector('[data-days]'),
  timerFieldHours: document.querySelector('[data-hours]'),
  timerFieldMinites: document.querySelector('[data-minutes]'),
  timerFieldSeconds: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, 0);
};
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
      Notify.failure("Please choose a date in the future",{
        timeout: 1000,
          width: '400px',
      });
    } else {refs.startBtn.disabled = false;
    }
  },
};



function onTimerStart() {
  cosetInterval(()=>{})
  refs.startBtn.disabled = true;

}

const fp = flatpickr('#datetime-picker', options);
refs.startBtn.addEventListener('click', onTimerStart);