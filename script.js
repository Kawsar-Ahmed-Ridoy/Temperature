// weather api temperature key 
const API_KEY = `7dd1761224d471be4854aa3baa44fa2f`;
// call api by city name 
const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
// specific data load function 
const displayTemperature = (data) => {
    console.log(data);
  setInnerTextById('city', data.name)
  setInnerTextById('temperature', data.main.temp)
  setInnerTextById('cloud', data.weather[0].main)
};
// call get element by id name
const setInnerTextById = (id, text)=>{
    document.getElementById(id).innerText = text;
}
//button click to collect data search field value 
document.getElementById("search-btn").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  loadTemperature(searchValue);
});
// initial call dhaka city 
loadTemperature("dhaka");
