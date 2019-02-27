const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (divInfo) {
  this.divInfo = divInfo;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:country',(evt)=>{
    this.divInfo.innerHTML = '';
    const info = evt.detail;
    const header = document.createElement('h2');
    header.textContent = info.name;
    const flag = document.createElement('img');
    flag.src = info.flag;
    const regionHeader = document.createElement('h3');
    regionHeader.textContent = 'Region:';
    const region = document.createElement('p');
    region.textContent = info.region;
    this.divInfo.appendChild(header);
    this.divInfo.appendChild(flag);
    this.divInfo.appendChild(regionHeader);
    this.divInfo.appendChild(region);
    this.getLanguages(info.languages);
  });
};
ResultView.prototype.getLanguages = function(languages){
  languages.forEach((language) =>{
    const listElement = document.createElement('li');
    listElement.textContent = language.name;
    this.divInfo.appendChild(listElement);
  });
};
module.exports = ResultView;
