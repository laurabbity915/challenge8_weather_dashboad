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

function getWeather(city) {
    return $.ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
        dataType: 'json',
    });
}

$(document).ready(function () {
    $('#search-btn').click(function () {
        const city = $('#search-input').val();
        getWeather(city).then(function (weather) {
            console.log(weather);
            
        // }).fail(function (error) {
        //     console.error(error);
        //     $('#weather-data').html('City not found');
        });
    });
});
