const apiKey = "d48d3c22f832571855dc4c11ed8381b0";

var cityButton = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London", "Hong Kong"];

var city = $(this).attr("city name");


//function for display the default citys button
function dispalyCityButton() {
    $("citybtn").empty();
    for (var i = 0; i < cityButton.length; i++) {
        let btn = "";
        btn += "<div>";
        btn += "<button type='button' class='btn btn-primary countrybtn' onclick='buttonList(\"" + cityButton[i] + "\")'>" + cityButton[i] + "</button>";
        btn += "</div>";

        $("#citybtn").append(btn);
    }
}

function buttonList(city) {
    fetchData(city);
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

function fetchData(city) {
    getWeather(city).then(function (weather) {
        console.log(weather);
        $("#data-container").removeAttr('hidden');
        let html = "";
        html += "<p class='city-name'>" + weather.name + " (" + moment().format('d/M/yyyy') + ") </p>";
        html += "<p> Temp: " + weather.main.temp + "°C </p>";
        html += "<p> Wind: " + weather.wind.speed + " KPH </p>";
        html += "<p> Humidity: " + weather.main.humidity + "% </p>";
        $("#today").html(html);
    }).fail(function (error) {
        console.error(error);
        $('#weather-data').html('City not found');
    });

    // get 5-days forecast
    getForecast(city).then(function (forecasts) {
        console.log(forecasts);
        let html = "";
        html += "<p class='forecast-header'>5-Day Forecast:</p>";
        html += "<div class='row'>"
        forecasts.list.forEach((forecast) => {
            if (forecast.dt_txt.split(" ")[1] == "00:00:00") {
                html += "<div class='col-2 border border-dark forecast-container'>";
                html += "<p class='forecast-date'>" + moment(forecast.dt * 1000).format("DD/MM/YYYY") + "</p>";
                html += "<p> Temp: " + forecast.main.temp + "°C </p>";
                html += "<p> Wind: " + forecast.wind.speed + " KPH </p>";
                html += "<p> Humidity: " + forecast.main.humidity + "% </p>";
                html += "</div>";
            }
        });
        html += "</div>"
        $('#forecast').html(html);
    });
}

$(document).ready(function () {
    $('#search-btn').click(function () {
        const city = $('#search-input').val();
        // get currect weather
        fetchData(city);
    });
});



