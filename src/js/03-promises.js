import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
const delayInput = form.querySelector('[name="delay"]');
const stepInput = form.querySelector('[name="step"]');
const amountInput = form.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmit);

function onSubmit (ev) {
  ev.preventDefault();
  const initialDelay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

   if (isNaN(initialDelay) || isNaN(step) || isNaN(amount)) {
     Notify.failure('Please enter all number.');
     console.log('Please enter all number.');
    return;
  }
  for (let i = 0; i < amount; i += 1){
    const position = i + 1;
    const currentDelay = initialDelay + i*step;
    createPromise(position, currentDelay)
      .then(result => {
        console.log(result);
            Notify.success(`✅ Fulfilled promise ${position} in ${currentDelay}ms`);
      })
      .catch(error => {
        console.error(error);
            Notify.failure(`❌ Rejected promise ${position} in ${currentDelay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        return res(`Promisen ${position} resolved after ${delay} ms.`)
      } else {
        return rej(`Promisen ${position} rejected after ${delay} ms.`)
      }
    }, delay);
    
  });
  return promise;
}

  


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

