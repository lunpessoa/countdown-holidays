import Countdown from './countdown';

export default function initHolidays() {
  function setElement(chrismas, time) {
    const elements = chrismas.querySelectorAll('[data-time]');
    elements.forEach((el) => {
      el.innerText = time[el.dataset.time];
    });
  }

  const chrimsmas = new Date(new Date().getFullYear(), 11, 25);
  const newYerEve = new Date(new Date().getFullYear(), 11, 31);

  const timeForChrismas = new Countdown(chrimsmas);
  const timeNewYear = new Countdown(newYerEve);

  const chrismasElement = document.querySelector('#chrismas');
  const newYearElement = document.querySelector('#new-years-eve');

  setInterval(() => {
    setElement(chrismasElement, timeForChrismas.countdown);
    setElement(newYearElement, timeNewYear.countdown);
  }, 1000);
}
