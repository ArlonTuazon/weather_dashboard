//Initialize variables
var button = document.querySelector('#searchButton')
var input = document.querySelector('.inputValue')
var nameCity = document.querySelector('#cityName');
var desc = document.querySelector('#cityWeather');
var temp = document.querySelector('#curTemp');
var cWind = document.querySelector('#curWind');
var cDate = document.querySelector('#date');
var cSearch = document.querySelector('#curSearch');
var curIcon = document.querySelector('curIcon');

//Display Today's date
var nMoment = moment().format('ddd MM/DD/YYYY');
//var display = $('#date');
//display.text(nMoment);
console.log(nMoment)

getcurWeather();

//Function to get current weather
function getcurWeather() {
button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=653f9a4ef4ab668df3bcf20b253fcd37')

.then(response => response.json())
.then(data => {
    console.log(data);
  let cityVal = data.name; 
  let cIcon = data['weather'][0]['icon'];
  let tempVal = data.main.temp;
  let windSpeed = data['wind']['speed']

  nameCity.innerHTML = cityVal +" " + nMoment + " " + cIcon;
  temp.innerHTML = "Temperature: " + tempVal;
  cWind.innerHTML = "Wind: " + windSpeed;

  cSearch.innerHTML = input.value;  
  //curIcon.innerHTML = cIcon;  
})


.catch (err => alert("Wrong City")) 
})
}

function getForecast(){

    fetch ('http://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=653f9a4ef4ab668df3bcf20b253fcd37')

    .then(response => response.json())
    .then(data => {
      console.log(data);
    // let cityVal = data.name; 
    // let cIcon = data['weather'][0]['icon'];
    // let tempVal = data.main.temp;
    // let windSpeed = data['wind']['speed']

    //     nameCity.innerHTML = cityVal +" " + nMoment + " " + cIcon;
    //     temp.innerHTML = "Temperature: " + tempVal;
    //     cWind.innerHTML = "Wind: " + windSpeed;

    //     cSearch.innerHTML = input.value;  
        //curIcon.innerHTML = cIcon;  
})


.catch (err => alert("Wrong City")) 
}

getForecast();
