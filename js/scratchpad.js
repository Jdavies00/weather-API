
// variables for all
var zip = 40502; // document.getHTMLById(input)
var key = "&APPID=9521de32c9a40758378a329b2e45b936";
var api = `https://api.openweathermap.org/data/2.5/weather?id=${key}&zip=${zip}`;
var data = null;

async function callWeatherAPI(){
    const response = await fetch(api).then(function(response){ 
        return response.json();
    }).then(function(json){  
        console.log(json);
        data = json;
    }).catch(function(err){
        console.log("Fetch problem:" + err.message);

    });
    console.log(response);
    alert("page call completed");
}

function doSearc(){



}




