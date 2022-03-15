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
var searchBtn = document.getElementById('search');
var austinBtn = document.querySelector('.austin');
var austin = document.getElementById('city-austin-value');
console.log(`austin is: ${austinBtn}`);
// set time using moment.js
// var localTime = $('#currentDay').text();
// var currentTime =  moment().format('MM-DD-YYYY  h:mm:ss a');


function getApi (city){  
  return (e) => {
  console.log(`city = ${city}`);
  //API url to get the weather data
  if(city.value){
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + ',us&appid=d43b06dc5d3db058fa0badac12a7945a';
    // var requestUrl  = 'https://api.openweathermap.org/data/2.5/weathre?q='/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d43b06dc5d3db058fa0badac12a7945a';

    fetch(requestUrl).then(function(response) {  // this will take the response and turn it to an object 
      // request was successful
      if (response.ok) {
        response.json().then(function(data){
          console.log(data);

          var valueHumidityName = data['main']['humidity'];
          var currentCityName = data['name'];
          var valueTempName = data['main']['temp'];
          var valueWindName = data['wind']['speed'];

          currentCity.innerHTML  = currentCityName;
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
// austinBtn.addEventListener('click', getApi(houston));
// austinBtn.addEventListener('click', getApi(ney-york));
// austinBtn.addEventListener('click', getApi(chicago));
// austinBtn.addEventListener('click', getApi(orlando));
// austinBtn.addEventListener('click', getApi(orlando));
// austinBtn.addEventListener('click', getApi(orlando));

