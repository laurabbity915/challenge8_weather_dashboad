const apiKey = "d48d3c22f832571855dc4c11ed8381b0";

var cityButton = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London", "Hong Kong"];

var city = $(this).attr("city name");


//function for display the default citys button
function dispalyCityButton() {
    $("citybtn").empty();
    for (var i = 0; i < cityButton.length; i++) {
        let btn = "";
        btn += "<div>";
        btn += "<button type='button' class='btn btn-primary countrybtn'>" + cityButton[i] + "</button>";
        btn += "</div>";

        $("#citybtn").append(btn);
    }
}

function getForecast(city) {
    return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
        dataType: 'json',
    });
}

function getWeather(city) {
    return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        dataType: 'json',
    });
}

$(document).ready(function () {
    $('#search-btn').click(function () {
        const city = $('#search-input').val();
        // get currect weather
        getWeather(city).then(function (weather) {
            console.log(weather);
            $(".todaytemp").removeAttr('hidden');
            let html = "";
            html += "<p class='city-name'>" + weather.name + " (" + moment().format('d/M/yyyy') + ") </p>";
            html += "<p> Temp: " + weather.main.temp + "°C";
            html += "<p> Wind: " + weather.wind.speed + " KPH";
            html += "<p> Humidity: " + weather.main.humidity + "%";
            $("#today").html(html);
        }).fail(function (error) {
            console.error(error);
            $('#weather-data').html('City not found');
        });

        // get 5-days forecast
        getForecast(city).then(function (forecast) {
            console.log(forecast);
            
        });
    });
});

