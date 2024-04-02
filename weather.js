let city; // to be able to access in the displayData method




async function getWeather(){
    // let city = "mumbai"
    city = document.getElementById('mycity').value;
    let key = 'd72729578543cfc435344f99b226b1c9';
    let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
   try{
    let response = await fetch(wurl)
    let data =  await  response.json();
    displayData(data);
   }
   catch(error){
        console.log(" an error occurred while fetching data, please check city name again");
        //  inline style and no bootstrap
        // document.getElementById('mydiv').innerHTML = "<span style='color:red'> An error occurred while fetching data, please check city name again </span>"
        // bootstrap
        document.getElementById('mydiv').innerHTML = "<span class='text-danger'> An error occurred while fetching data, please check city name again </span>"
   }        


}


//************* promises and catch
// function getWeather(){
//     // let city = "mumbai"
//     city = document.getElementById('mycity').value;
//     let key = 'd72729578543cfc435344f99b226b1c9';
//     let wurl = `https://api.openweathermap.org/data/2.5/weather?q=nnnnnnn&appid=${key}&units=metric`
//     fetch(wurl)
//     .then( (resp) => { return resp.json()})
//     .catch( console.log(" error!!"))
//     .then( (data) => {
//                 displayData(data);          
//     })
//     .catch( console.log(" another error!!"))


// }


function displayData(data) {
        console.log(data);
            let currentTemp = data.main['temp']
            console.log(data.main['temp']);
            let minTemp = data.main['temp_min'];
            console.log(data.main['temp_min']);
            let maxTemp = data.main['temp_max'];
            console.log(data.main['temp_max']);
            let windSpeed = data.wind.speed;
            console.log(data.wind.speed);
            let weatherActual = data.weather[0].main;
            console.log(data.weather[0].main);
            let imgicon = data.weather[0].icon;


            document.getElementById('mydiv').innerHTML = ` <h4> Weather in city --${city} is ${weatherActual} </h4> <br>
                Current temp is ${currentTemp}. Max Temp is ${maxTemp} . Min Temp is ${minTemp} . <br>
                WindSpeed is ${windSpeed}
                <img src='http://openweathermap.org/img/w/${imgicon}.png' alt='icon here' />
            `;              
     
    }




