
let Key="cc28cfe09bb4da6a894ee2c65b342201";
let Url ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let sch = document.querySelector(".search-input");
let sBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(loc) {
  const response = await fetch(Url + loc + `&appid=${Key}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".w-api").style.display = "none !importent";
  } else {
    const data = await response.json();

    document.querySelector(".mainsub").innerHTML = data.name;
    document.querySelector(".main").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

    switch (data.weather[0].main) {
      case "Clear":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-1.svg";
        break;
      case "Clouds":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-7.svg";
        break;
      case "Drizzle":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-34.svg";
        break;
      case "Mist":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-17.svg";
        break;
      case "Rain":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-19.svg";
        break;
      case "Snow":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-30.svg";
        break;
      case "Thunderstorm":
        weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-15.svg";
        break;
      default:
        weatherIcon.src =
          "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png";
    }
  

    document.querySelector(".w-api").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

sBtn.addEventListener("click", () => {
  checkWeather(sch.value);
});