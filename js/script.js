var APIkey = "d48d3c22f832571855dc4c11ed8381b0";

var weatherqueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIkey

function dispalyCityButton() {
    var cityButton = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London", "Hong Kong"];
    console.log(cityButton);
    var city = $(this).attr("city name");
    var geoqueryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityButton + "&limit=5&appid=";

    for (var i = 0; i < cityButton.length; i++) {

        let btn = "";
        btn += "<div>";
        btn += "<button type='button' class='btn btn-primary countrybtn'>" + cityButton[i] + "</button>";
        btn += "</div>";

        $("#citybtn").append(btn);
    }

}
