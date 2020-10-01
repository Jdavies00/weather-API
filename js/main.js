async function callWeatherAPI(e){
    //evaluate the event buttn click or key up even
console.log(e.keyCode)
console.log(e)    
//if the event has a key then check fo rcode 13

if(e.keyCode === 13){ 
    var zip = document.getElementById("userInput").value;
    console.log(zip)
    var key = "&APPID=9521de32c9a40758378a329b2e45b936";
    var api = `https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}`;

    // let zipInput = document.getElementById("userInput").value;
    // console.log(zipInput)

    // if ( zip.length != 5){
    //     invalid.textcontext = "Not a Valid Zip Code" 
    // }
    // else{


            const response = await fetch(api).then(function(response){ 
                return response.json();
            }).then(function(json){  
                console.log(json);
                data = json;
                
                city.innerHTML = data.name;
                tempK.innerHTML = (Math.floor(data.main.temp)+ " "+"K");
                tempF.innerHTML = (Math.floor((data.main.temp - 273.15) * 9/5 +32)+ " "+"F");
                tempC.innerHTML = (Math.floor(data.main.temp - 273.15)+" "+ "C" );
                condition.innerHTML = data.weather[0].description;
                // Image.src = "./images/" +data.weather[0].icon +".png"
                // let str  = data.weather[0].icon;
                // img.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                var img = document.createElement("img");
                let str = data.weather[0].icon;
                console.log(str);
                img.src = "http://openweathermap.org/img/wn/" + str + "@2x.png";
                document.getElementById("magic").style.visibility='visible'
                var imgHolder = document.getElementById("iconHTML");
                imgHolder.innerHTML= ""
                imgHolder.appendChild(img)


                
            }).catch(function(err){
                alert("Fetch problem:" + err.message);
                alert( zip + "is not a vaild zip code");

            });
            console.log(response);
            // alert("page call completed");
    }
    
    
    // zipBttn.onclick =callWeatherApi();
    
    
// }
