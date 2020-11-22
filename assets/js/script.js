var button = document.querySelector('#searchButton')
var input = document.querySelector('.inputValue')
var nameCity = document.querySelector('#cityName');
var desc = document.querySelector('#cityWeather');
var temp = document.querySelector('#curTemp');

button.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=653f9a4ef4ab668df3bcf20b253fcd37')

.then(response => response.json())
.then(data => {
    console.log(data);
  let cityVal = data['main']['name']; 
  let tempVal = data['main']['temp'];

  nameCity.innerHTML = cityVal;
  temp.innerHTML = tempVal;
})

.catch (err => alert("Wrong City")) 
})
