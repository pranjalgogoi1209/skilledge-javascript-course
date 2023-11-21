const cityForm = document.querySelector('.city-form');
const res = document.querySelector('.res');


const cityData = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return{cityDetails, weather};
}

const updateUI = (data) => {
  // object destructuring

  /* const cityDetails = data.cityDetails;
  const weather = data.weather; */

  const {cityDetails, weather} = data;
  
  res.querySelector('.info').innerHTML = `
    <h3 class='city'>${cityDetails.EnglishName}, ${cityDetails.Country.EnglishName}</h3>
    <h3 class='temp'>${weather.Temperature.Metric.Value}&deg; C</h3>
  `;

  res.querySelector('.bg-img').innerHTML = `
    <div class="icon"></div>
    <h3 class='weather'>${weather.WeatherText} : ${weather.WeatherIcon}</h3>
  `;

  res.setAttribute('style', 'display: flex');

  // update day and night
  const imgSrc = weather.IsDayTime ? 'img/day.jpg' : 'img/night.jpeg';
  res.querySelector('.bg-img').setAttribute('style', `background-image : url(${imgSrc})`);

  // update icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  res.querySelector('.icon').setAttribute('style', `background-image : url(${iconSrc})`);


}







cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.cityName.value.trim();
  cityForm.reset();

  //get all data
  cityData(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));
}); 





















/* cityForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = cityForm.cityName.value.trim();
  cityForm.reset();

  //get all data
  cityData(city)
  .then(data => {
    res.querySelector('.city').querySelector('span').textContent = `${data.cityDetails.EnglishName}`;
    console.log(data);
    res.querySelector('.country').querySelector('span').textContent = `${data.cityDetails.Country.EnglishName}`;
    res.querySelector('.weather').querySelector('span').textContent = `${data.weather.Temperature.Metric.Value}° C`;
  })
  .catch(err => console.log(err));
});  */ 



/* getCity(`${weatherForm.city.value}`).then(city => {
    console.log(city)
    res.querySelector('.city').querySelector('span').textContent = `${city.LocalizedName}`;
    res.querySelector('.country').querySelector('span').textContent = `${city.Country.EnglishName}`;
    getWeather(city.Key).then(weather => {
      console.log(weather);
      res.querySelector('.weather').querySelector('span').textContent = `${weather.Temperature.Metric.Value}`;
    })
  })
  .catch(err => console.log(err)); */