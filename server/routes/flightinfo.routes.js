module.exports = (app) => {
    const scrape = require('../controllers/scrape.controller.js');

    // Get all departures
    app.get('/flights', scrape.flights);

}