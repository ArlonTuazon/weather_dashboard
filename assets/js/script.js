let searchCityEl = document.querySelector("#searchCity");
let cityInputEl = document.querySelector("#cityInput");


let temp = document.querySelector('#curTemp');
 window.addEventListener('load', () => {
     getTemp();

 })
  //let html = "";
 function getTemp (){
    fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=653f9a4ef4ab668df3bcf20b253fcd37")
    .then (response => {
       console.log(response);
       return response.json();

    }).then (data => {
        
        console.log(data);
        

    }).catch(error => {
        console.log(error);
    });
 }
 var searchSubmit = function(event) {
    event.preventDefault();
    console.log(event);
  }
function getCityTemp() {
  

}
 