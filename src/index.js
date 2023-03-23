import Snow from './scripts/snow';
import initHolidays from './scripts/holidays';

import './styles/index.css';
import body from './index.html';

function init() {
  const contentBody = document.createElement('div');
  contentBody.innerHTML = body;
  document.body.innerHTML = contentBody.innerHTML;

  document.documentElement.className += ' js';

  initHolidays();
  const snow = new Snow('#snow');
  snow.init();
}
init();
