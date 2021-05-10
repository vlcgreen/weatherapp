

// var locInput = document.getElementById("cityinput").value;
//     console.log(locInput)
var locInput = "Houston"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locInput}&units=imperial&appid=${apiKey}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)

    const temp1 = data.main.temp
    const winds1 = data.wind.speed
    const feels1 = data.main.feels_like

    let temp = document.getElementById("temp1")
    let feels = document.getElementById("feels1")
    let winds = document.getElementById("clouds1")

    temp.textContent = `Temp: ${temp1.toString()}\u00B0`
    feels.textContent = `Feels Like: ${feels1.toString()}\u00B0`
    winds.textContent = `Wind Speed: ${winds1} mph`


    // let div = document.querySelector('div');

    })