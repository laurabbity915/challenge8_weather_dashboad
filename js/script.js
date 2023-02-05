var APIkey = "d48d3c22f832571855dc4c11ed8381b0";

var weatherqueryURL ="http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIkey

$.ajax({
    url: weatherqueryURL,
    method: "GET"
}).then(function(Response){
    console.log(response)
})