//Initialize variables
var button = document.querySelector('#searchButton')
var input = document.querySelector('.inputValue')
var nameCity = document.querySelector('#cityName');
var desc = document.querySelector('#cityWeather');
var temp = document.querySelector('#curTemp');
var cWind = document.querySelector('#curWind');
var cDate = document.querySelector('#date');
var cSearch = document.querySelector('#curSearch');
var wIcon = document.querySelector('#curIcon');
var lat = document.querySelector('#lat');
var lon = document.querySelector('lon');
var oneIcon = document.querySelector('#firstIcon');
var twoIcon = document.querySelector('#secondIcon');
var threeIcon = document.querySelector('#thirdIcon');
var fourIcon = document.querySelector('#fourthIcon');
var fiveIcon = document.querySelector('#fifthIcon');

//Display Today's date
var nMoment = moment().format('(ddd MM/DD/YYYY)');
//var display = $('#date');
//display.text(nMoment);
console.log(nMoment)
button.addEventListener('click', function(){
    
    getcurWeather();
    
})

//Function to get current weather
function getcurWeather() {


fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial'+'&appid=653f9a4ef4ab668df3bcf20b253fcd37')

.then(response => response.json())
.then(response => {
    console.log(response);
  let cityVal = response.name; 
  let cIcon = response['weather'][0]['icon'];
  let tempVal = response.main.temp;
  let windSpeed = response['wind']['speed']
  let weatherIcon = "";
  let wlat = response.coord.lat;
  let wlon = response.coord.lon
  console.log (wlat,wlon);
  //let iconURL = 'https://openweathermap.org/img/w/' + cIcon+ '.png';
 
  nameCity.innerHTML = cityVal +" " + nMoment;
  temp.innerHTML = "Temperature: " + tempVal;
  cWind.innerHTML = "Wind: " + windSpeed;
  //wIcon.innerHTML = iconURL;
  cSearch.innerHTML = input.value; 
  console.log (wIcon,);

    weatherIcon = document.createElement('img');
  //  weatherIcon.setAttribute('src', iconURL);
    weatherIcon.src = 'https://openweathermap.org/img/w/' + cIcon+ '.png';
    wIcon.appendChild(weatherIcon);
  
    lat = wlat;
    lon = wlon;
    console.log (lat,lon);
    getForecast (lat,lon);
  
})


.catch(error => console.log('error', error));
 }

 
function getForecast(lat, lon){

   var fiveLat = lat;
   var fiveLon = lon;
   var oneDay = document.querySelector('#dayOne');
   var twoDay = document.querySelector('#dayTwo');
   var threeDay = document.querySelector('#dayThree');
   var fourDay = document.querySelector('#dayFour');
   var fiveDay = document.querySelector('#dayFive'); 

   var oneTemp = document.querySelector('#firstTemp');
   var twoTemp = document.querySelector('#secondTemp');
   var threeTemp = document.querySelector('#thirdTemp');
   var fourTemp = document.querySelector('#fourthTemp');
   var fiveTemp = document.querySelector('#fifthTemp'); 

   var oneHumid = document.querySelector('#firstHumid');
   var twoHumid = document.querySelector('#secondHumid');
   var threeHumid = document.querySelector('#thirdHumid');
   var fourHumid = document.querySelector('#fourthHumid');
   var fiveHumid = document.querySelector('#fifthHumid'); 

   var cHumid = document.querySelector('#curHumidity');
   var cUV = document.querySelector('#curUV');   

   

   var nextDay = moment().add(1, 'd').format('MM/DD/YYYY');

   oneDay.innerHTML = nextDay;
   twoDay.innerHTML = moment().add(2, 'd').format('MM/DD/YYYY');
   threeDay.innerHTML = moment().add(3, 'd').format('MM/DD/YYYY');
   fourDay.innerHTML = moment().add(4, 'd').format('MM/DD/YYYY'); 
   fiveDay.innerHTML = moment().add(5, 'd').format('MM/DD/YYYY'); 

    fetch ('https://api.openweathermap.org/data/2.5/onecall?lat='+fiveLat+ '&lon=' + fiveLon+ '&exclude=minutely,hourly,&appid=653f9a4ef4ab668df3bcf20b253fcd37')

    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      
      //Five Day Forecast Icon
      let ffIcon = data['daily'][1]['weather'][0]['icon'];
      
      let day1Icon = "";

      day1Icon = document.createElement('img');
      day1Icon.src = 'https://openweathermap.org/img/w/' + ffIcon+ '.png';
         oneIcon.appendChild(day1Icon);

      let sfIcon = data['daily'][2]['weather'][0]['icon'];
      let day2Icon = "";

      day2Icon = document.createElement('img');
      day2Icon.src = 'https://openweathermap.org/img/w/' + sfIcon+ '.png';
         twoIcon.appendChild(day2Icon);
      
      let tfIcon = data['daily'][3]['weather'][0]['icon'];
      let day3Icon = "";
   
      day3Icon = document.createElement('img');
      day3Icon.src = 'https://openweathermap.org/img/w/' + tfIcon+ '.png';
        threeIcon.appendChild(day3Icon);

      let frIcon = data['daily'][4]['weather'][0]['icon'];
      let day4Icon = "";
     
      day4Icon = document.createElement('img');
      day4Icon.src = 'https://openweathermap.org/img/w/' + frIcon+ '.png';
        fourIcon.appendChild(day4Icon);

      let ftIcon = data['daily'][5]['weather'][0]['icon'];
      let day5Icon = "";
       
      day5Icon = document.createElement('img');
      day5Icon.src = 'https://openweathermap.org/img/w/' + ftIcon+ '.png';
        fiveIcon.appendChild(day5Icon);

      let weathercUV = data['daily'][0]['uvi'];
      cUV.innerHTML = "UV Index: " + weathercUV;

      // Current Temperature and Humidity
      let weathercHumid = data['daily'][0]['humidity'];
      cHumid.innerHTML = "Humidity: " + weathercHumid+"%";

      // Five Day Forecast Temperature
      let nexttemp = data['daily'][1]['temp']['max'];
      var number = ((nexttemp-273.15)*9/5)+32; 
      var result = Math.round (number * 100) / 100; 
      oneTemp.innerHTML = "Temp: " + result;
     
      let next2temp = data['daily'][2]['temp']['max'];
      var number1 = ((next2temp-273.15)*9/5)+32; 3
      var result1 = Math.round (number1 * 100) / 100; 
      twoTemp.innerHTML = "Temp: " + result1;
     
      let next3temp = data['daily'][3]['temp']['max'];
      var number2 = ((next3temp-273.15)*9/5)+32; 
      var result2 = Math.round (number2 * 100) / 100; 
      threeTemp.innerHTML = "Temp: " + result2;

      let next4temp = data['daily'][4]['temp']['max'];
      var number3 = ((next4temp-273.15)*9/5)+32; 
      var result3 = Math.round (number3 * 100) / 100; 
      fourTemp.innerHTML = "Temp: " + result3;

      let next5temp = data['daily'][5]['temp']['max'];
      var number4 = ((next5temp-273.15)*9/5)+32; 
      var result4 = Math.round (number4 * 100) / 100; 
      fiveTemp.innerHTML = "Temp: " + result4;
     
       // Five Day Forecast Humidity
       let nexthumid = data['daily'][1]['temp']['max'];
       oneHumid.innerHTML = "Humifdity: " + nexthumid;
      
       let next2humid = data['daily'][2]['temp']['max'];
       twoHumid.innerHTML = "Temp: " + next2humid;
      
       let next3Humid = data['daily'][3]['temp']['max'];
       threeHumid.innerHTML = "Temp: " + next3Humid;
 
       let next4temp = data['daily'][4]['temp']['max'];
       fourHumid.innerHTML = "Temp: " + result3;
 
       let next5temp = data['daily'][5]['temp']['max'];
       fiveHumid.innerHTML = "Temp: " + result4;


})
.catch(error => console.log('error', error));
}


