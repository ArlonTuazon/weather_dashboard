//Initialize variables
var button = document.querySelector('#searchButton');
var listButton = document.querySelector('#searchList');
var input = document.querySelector('.inputValue');
var nameCity = document.querySelector('#cityName');
var desc = document.querySelector('#cityWeather');
var temp = document.querySelector('#curTemp');
var cWind = document.querySelector('#curWind');
var cDate = document.querySelector('#date');
var cSearch = document.querySelector('#curSearch');
var wIcon = document.querySelector('#curIcon');
var lat = document.querySelector('#lat');
var lon = document.querySelector('#lon');
var notification = document.querySelector('#notify');
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
  //let weatherIcon = "";
  let wlat = response.coord.lat;
  let wlon = response.coord.lon
  console.log (wlat,wlon);
  let iconURL = 'https://openweathermap.org/img/w/' + cIcon+ '.png';
  
  nameCity.innerHTML = cityVal +" " + nMoment + "<img src = "+iconURL+">";
  temp.innerHTML = "Temperature: " + tempVal;
  cWind.innerHTML = "Wind: " + windSpeed;
  //wIcon.innerHTML = iconURL;
  
  cSearch.innerHTML += `<li class="list-group-item list-group-item-action" id="searchItems">${input.value}</li>`; 
 
  var newCity = input.value;
  localStorage.setItem  ('city' ,newCity);
  localStorage.getItem(newCity);
  
  var listItems = document.querySelectorAll ("#curSearch li");
  for (var i = 0; i < listItems.length; i++){
    listItems[i].onclick =function() {
      input.value = "";
      document.getElementById ("cityValue").value = this.innerHTML;
      getcurWeather();
      
    };
  }
  
  console.log (wIcon,);

  //   weatherIcon = document.createElement('img');
  // //  weatherIcon.setAttribute('src', iconURL);
  //   weatherIcon.src = 'https://openweathermap.org/img/w/' + cIcon+ '.png';
  //   wIcon.appendChild(weatherIcon);
    
    

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
   var cUV = document.querySelector('#indexUV');   
      
   

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
      
      //let day1Icon = "";

      var day1Icon = document.querySelector('#firstIcon');
      let day1Iconimg = 'https://openweathermap.org/img/w/' + ffIcon+ '.png';
         day1Icon.innerHTML= "<img src = "+day1Iconimg+">"

      let sfIcon = data['daily'][2]['weather'][0]['icon'];
     // let day2Icon = "";

      var day2Icon = document.querySelector('#secondIcon');
      let day2Iconimg = 'https://openweathermap.org/img/w/' + sfIcon+ '.png';
          day2Icon.innerHTML= "<img src = "+day2Iconimg+">"
      
      let tfIcon = data['daily'][3]['weather'][0]['icon'];
      //let day3Icon = "";
   
      var day3Icon = document.querySelector('#thirdIcon');
      let day3Iconimg = 'https://openweathermap.org/img/w/' + tfIcon+ '.png';
          day3Icon.innerHTML= "<img src = "+day3Iconimg+">";

      let frIcon = data['daily'][4]['weather'][0]['icon'];
      //let day4Icon = "";
     
      var day4Icon = document.querySelector('#fourthIcon');
      let day4Iconimg = 'https://openweathermap.org/img/w/' + frIcon+ '.png';
          day4Icon.innerHTML= "<img src = "+day4Iconimg+">";

      let ftIcon = data['daily'][5]['weather'][0]['icon'];
      //let day5Icon = "";
       
      var day5Icon = document.querySelector('#fifthIcon');
      let day5Iconimg = 'https://openweathermap.org/img/w/' + ftIcon+ '.png';
          day5Icon.innerHTML= "<img src = "+day5Iconimg+">";

      let weathercUV = data['daily'][0]['uvi'];
      cUV.innerHTML =  weathercUV;

      if (weathercUV <= 2 ){
        document.getElementById('indexUV').style.color = "green";
      }
      else if (weathercUV <=5 ){
        document.getElementById('indexUV').style.color = "yellow";
      }
      else if (weathercUV <=7) {
        document.getElementById('indexUV').style.color = "orange";
      }
      else if (weathercUV <=10) {
        document.getElementById('indexUV').style.color = "red";
      }
      else if (weathercUV >=11) {
        document.getElementById('indexUV').style.color = "purple";
      }
     
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
       let nexthumid = data['daily'][1]['humidity'];
       oneHumid.innerHTML = "Humidity: " + nexthumid + "%";
      
       let next2humid = data['daily'][2]['humidity'];
       twoHumid.innerHTML = "Humidity: " + next2humid +"%";
      
       let next3Humid = data['daily'][3]['humidity'];
       threeHumid.innerHTML = "Humidity: " + next3Humid+ "%";
 
       let next4humid = data['daily'][4]['humidity'];
       fourHumid.innerHTML = "Humidity: " + next4humid + "%";
 
       let next5humid = data['daily'][5]['humidity'];
       fiveHumid.innerHTML = "Humidity: " + next5humid + "%";


})
.catch(error => console.log('error', error));
}


