const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const countries = new Countries;
  countries.getData();
  countries.bindEvents();

  const container = document.querySelector('select#countries')
  const selectView = new SelectView(container);
  selectView.bindEvents();

  const divInfo = document.querySelector('#country')
  const resultView = new ResultView(divInfo);
  resultView.bindEvents();
});
