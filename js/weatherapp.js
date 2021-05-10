

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//http://api.openweathermap.org/data/2.5/weather?q=Kingwood&appid=${apiKey}




//https://api.openweathermap.org/data/2.5/onecall?Houston&exclude=minutely,hourly,alerts,&appid=8376900bd6abe614a433e02fa55182da

var locInput = document.getElementById("cityinput").value;
    console.log(locInput)
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${locInput}&units=imperial&appid=${apiKey}`)
    .then(response=>response.json())
    .then(data=>console.log(data))
    

console.log(locInput)
// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${locInput}&units=imperial&appid=${apiKey}`)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);


    // let degF = data.main.temp;
    // console.log(degF)
    // let degC = Math.floor((degF - 32)/1.8);

    // console.log(degC);

    // let div = document.querySelector('div');

    // div.textContent = `Current Temp: ${degF.toString()}`
