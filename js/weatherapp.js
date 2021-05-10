

// var locInput = document.getElementById("cityinput").value;
//     console.log(locInput)
var locInput = "Houston"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locInput}&units=imperial&appid=${apiKey}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)

    const temp1 = data.main.temp
    const clouds1 = data.weather[0].description

    let temp = document.getElementById("temp1")
    let feels = document.getElementById("feels1")
    let clouds = document.getElementById("clouds1")

    temp.textContent = `Temp: ${temp1.toString()}`
    clouds.textContent = `Clouds: ${clouds1}`


    // let div = document.querySelector('div');

    })