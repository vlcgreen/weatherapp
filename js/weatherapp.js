


    var locInput = document.getElementById("cityinput")
    locInput.addEventListener('keyup', (search)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.target.value}&units=imperial&appid=${apiKey}`)
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
    
        
    
        if (temp1 > 80){
            var image = document.getElementById("image")
            image.src="images/hot.png"
        }
        else if (temp1 < 65){ 
            var image =document.getElementById('image') 
            image.src= "https://img.pngio.com/cold-cool-forecast-frost-snowflake-temperature-thermometer-cool-weather-png-512_512.png"
        }
        else
        
    
        })
    })

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locInput}&units=imperial&appid=${apiKey}`)
    // .then(response=>response.json())
    // .then(data=>{
    //     console.log(data)

    // const temp1 = data.main.temp
    // const winds1 = data.wind.speed
    // const feels1 = data.main.feels_like

    // let temp = document.getElementById("temp1")
    // let feels = document.getElementById("feels1")
    // let winds = document.getElementById("clouds1")

    // temp.textContent = `Temp: ${temp1.toString()}\u00B0`
    // feels.textContent = `Feels Like: ${feels1.toString()}\u00B0`
    // winds.textContent = `Wind Speed: ${winds1} mph`

    

    // if (temp1 > 80){
    //     var image = document.getElementById("image")
    //     image.src="images/hot.png"
    // }
    

    // })