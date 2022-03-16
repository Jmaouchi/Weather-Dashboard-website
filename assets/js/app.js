var userInput = document.getElementById('user-input');
console.log(`user input: ${userInput}`);
var userInputData = userInput.textContent.trim(); // this will get us the user input value, and trim any extra space
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var currentCity = document.querySelector('.current-city');
var humidity = document.querySelector('.humidity ');
var index = document.querySelector('.uv-index');
var cityBtnSerach =  document.querySelectorAll('.city');
var cityText = document.querySelectorAll('.city').textContent;


// all the buttons that will listen for event
var searchBtn = document.getElementById('search'); //1 search button by input value

var austinBtn = document.querySelector('.austin'); //2 austin p tag class name
console.log(`austin is: ${austinBtn}`);

var chicagoBtn = document.querySelector('.chicago'); //3 chicago p tag class name
console.log(`chicago is: ${chicagoBtn}`);

var orlandoBtn = document.querySelector('.orlando'); //4 orlando p tag class name
console.log(`orlando is: ${orlandoBtn}`);

var sanFranciscoBtn = document.querySelector('.san-francisco');//5 san francisco p tag class name
console.log(`san francisco is: ${sanFranciscoBtn}`);

var seattleBtn = document.querySelector('.seattle');//6 seattle p tag class name
console.log(`seattle is: ${seattleBtn}`);

var newYorkBtn = document.querySelector('.new-york');//7 new york p tag class name
console.log(`new york is: ${newYorkBtn}`);

var denverBtn = document.querySelector('.denver');//8 denver p tag class name
console.log(`denver is: ${denverBtn}`);

var atlantaBtn = document.querySelector('.atlanta');//9  atlanta p tag class name
console.log(`atlanta is: ${atlantaBtn}`);


// all the variables that the event listeners will get the values from 
var austin = document.getElementById('city-austin-value'); 
var chicago = document.getElementById('city-chicago-value');
var newYork = document.getElementById('city-new-york-value');
var orlando = document.getElementById('city-orlando-value');
var sanFrancisco = document.getElementById('city-san-francisco-value');
var seattle = document.getElementById('city-seattle-value');
var denver = document.getElementById('city-denver-value');
var atlanta = document.getElementById('city-atlanta-value');
var sanAntonio = document.getElementById('city-san-antonio-value');
console.log(`new york is:${newYork}`);


function getApi (city){
  return function(e) {
  console.log(`city = ${city}`);
  //API url to get the weather data
  if(city.value){
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + ',us&appid=d43b06dc5d3db058fa0badac12a7945a';

    fetch(requestUrl).then(function(response) {  // this will take the response and turn it to an object 
      // request was successful
      if (response.ok) {
        response.json().then(function(data){
          console.log(data);

          var valueHumidityName = data['main']['humidity'];
          var currentCityName = data['coord']['dt'];
          var curentCityState =  data['sys']['country'];
          var valueTempName = data['main']['temp'];
          var valueWindName = data['wind']['speed'];

          currentCity.innerHTML  = currentCityName + ' ' + curentCityState;
          humidity.innerHTML = valueHumidityName;
          wind.innerHTML = valueWindName;
          temp.innerHTML = valueTempName;

        });
      }else {
        alert('Error: city User Not Found');
      }
    })
    .catch(function(error) {
      // Notice this `.catch()` getting chained onto the end of the `.then()` method
      console.error(error)
      alert("Unable to connect to weather");
    });
  }
};
}

searchBtn.addEventListener('click', getApi(userInput));
austinBtn.addEventListener('click', getApi(austin));
chicagoBtn.addEventListener('click', getApi(chicago));
newYorkBtn.addEventListener('click', getApi(newYork));
orlandoBtn.addEventListener('click', getApi(orlando));
sanFranciscoBtn.addEventListener('click', getApi(sanFrancisco));
seattleBtn.addEventListener('click', getApi(seattle));
denverBtn.addEventListener('click', getApi(denver));
atlantaBtn.addEventListener('click', getApi(atlanta));
window.addEventListener("DOMContentLoaded", getApi(sanAntonio));

