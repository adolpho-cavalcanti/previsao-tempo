var weather = require('../base/weather.json');

const WeatherController = (req, res) => {
    const { locale } = req.query;        

    if(locale == null) {
        var results = weather;
    } else {
        results = weather.filter(function(we) {
            return we.locale.name == locale;
        })
    }
    return res.json(results);

}

module.exports = WeatherController;