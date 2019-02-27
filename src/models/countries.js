const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.text = null;
};

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data)=>{
    this.text = data;
    PubSub.publish('Countries:all-loaded', this.text);
    });
  };

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:country',(evt)=>{
    const country = this.text[evt.detail];
    PubSub.publish('Countries:country',country);
  });
};
module.exports = Countries;
