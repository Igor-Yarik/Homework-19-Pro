fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(openweathermap => {

    let userWeather = openweathermap.weather[0]
    let weatherDescription = "description";
    let valueDescription = (userWeather[weatherDescription])
    
    const name = openweathermap.name;



    const temp = openweathermap.main.temp;
    const pressure = openweathermap.main.pressure;

    const humidity = openweathermap.main.humidity;
    const speed = openweathermap.wind.speed;
    const deg = openweathermap.wind.deg;

    let weatherIcon1 = ("https://openweathermap.org/img/w/04d.png")

    let weatherIcon = "icon";
    if (weatherIcon = "04d") {
      console.log(weatherIcon1)
    } else { }

    console.log(name)
    console.log(temp)
    console.log(pressure)
    console.log(valueDescription);
    console.log(humidity)
    console.log(speed)
    console.log(deg)

    document.getElementById('test').innerHTML = (name)
    document.getElementById('test2').innerHTML = (temp)
    document.getElementById('test3').innerHTML = (pressure)
    document.getElementById('test4').innerHTML = (valueDescription)
    document.getElementById('test5').innerHTML = (humidity)
    document.getElementById('test6').innerHTML = (speed)
    document.getElementById('test7').innerHTML = (deg)
    
  })

