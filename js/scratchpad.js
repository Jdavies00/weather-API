var zip = 40502; //document.getElementById("#userInput");
var key = "&APPID=9521de32c9a40758378a329b2e45b936";
var api = `https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}`;
var data = null;

let city = document.getElementById("cityName")
let tempK = document.getElementById("tempK")
let tempF = document.getElementById("tempF")
let tempC = document.getElementById("")
let icon = document.getElementById("")





async function callWeatherAPI(){
    let zipInput = document.getElementById("#userInput");
    // if ( zipInput.length === 5 && zipInput){
        const response = await fetch(api).then(function(response){ 
            return response.json();
        }).then(function(json){  
            console.log(json);
            data = json;
            
            cityName.textcontext = data.name;
            callWeatherAPI.textcontext = data.weather[0].description
            temp.textcontext = data.temp
            
            // https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}
            
        }).catch(function(err){
            console.log("Fetch problem:" + err.message);
            
        });
        console.log(response);
        // alert("page call completed");
    // }else{
    //     weatherContainer.textcontext = "Not a Valid Zip Code" 
    // }
    
    
    // zipBttn.onclick =callWeatherApi();


}