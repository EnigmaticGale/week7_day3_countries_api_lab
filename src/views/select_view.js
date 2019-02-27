const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(container) {
  this.container = container;
  // console.log(container);
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all-loaded', (evt) => {
    this.fillDropdown(evt.detail);
  });
  this.container.addEventListener('change',(evt) =>{
    const country = evt.target.value;
    PubSub.publish('SelectView:country',country)
  });
};

SelectView.prototype.fillDropdown = function (countries) {
  countries.forEach((country,index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.container.appendChild(option)
  });

}
module.exports = SelectView
