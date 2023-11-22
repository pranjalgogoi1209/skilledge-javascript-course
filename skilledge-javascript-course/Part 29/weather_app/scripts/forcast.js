const apiKey = '	ppdKu22F9ImYGW0qKIVmJ3U4nrvE3Lm7';

/* // GET FORECAST INFORMATION
const getForecast = async (cityKey) => {
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
} */

// GET WEATHER INFORMATION
const getWeather = async (cityKey) => {
  const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}

// GET CITY INFORMATION
const getCity = async (city) => {
  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}

/* getCity('GUWAHATI').then(city => {
  console.log(city)
  getWeather(city.Key).then(weather => {
    console.log(weather);
    getForecast(city.Key).then((forecast) => {
      console.log(forecast);
    })
  })
})
.catch(err => console.log(err)); */



