var locales = require('../base/locales.json');

const LocalesController = (req, res) => {
    
    return res.json(locales);
}

module.exports = LocalesController;