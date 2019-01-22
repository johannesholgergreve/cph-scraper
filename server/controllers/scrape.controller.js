const fetch = require('node-fetch');
const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');
const _ = require('underscore');
const apiUrl = 'https://www.cph.dk/flyinformation/';
let apiExtension;


exports.flights = (req, res) => {

	const type = req.query.type;	

	// Checking if the proper types has been send with request
	if (type === 'arrivals' || type === 'departures') {
		console.log('Valid type, start fetching');
	} else {
		console.log('req type not valid, stop and ask for it');
		res.send('API needs a flight type. Please set query string type to "/flight?type=arrivals" or "/flight?type=departures"');
		return;
	}
	
	// Setting api apiExtension to fetch arrivals or departures appending the correct link
	type === 'arrivals' ? apiExtension = 'ankomster' : apiExtension = 'afgange';
	console.log(`Fetching ${type} from url: ${apiUrl}` + apiExtension);

	// Fetching api url
	fetch(`${apiUrl}` + apiExtension)
		.then(res => res.text())
		.then(body => {
			// Using cheerio to load body of fetched url
			$ = cheerio.load(body);
			// initializing jsonframe plugin
			jsonframe($);

			const flights = [];
			const bodyRows = $('.stylish-table__row--body');
			
			
			// Using json frame to scrape and structure flights info in object
			const frame = {
                time: '.stylish-table__cell.flights__table__col--time > div > span',
                expected: '.flights__table__col--time > div > .v--mobile-only > em',
                operator: '.stylish-table__cell:nth-child(3) > div > span > span',
                flightNo: '.flights__table__col--destination > div > span > small',
                destination: '.flights__table__col--destination > div > span > strong > span',
                gate: '.flights__table__col--gate',
                terminal: '.flights__table__col--terminal',
                status: '.stylish-table__cell:nth-child(7)',
                linkText: 'a'
            };

			// Pushing each object into flights array
			_.each(bodyRows, (item) => {
				const sFlightInfo = $(item).scrape(frame, { string: true });
				const oFlightInfo = JSON.parse(sFlightInfo);
				const randomId = `CPHF${Math.floor(Math.random() * 1000000000)}`;
				oFlightInfo.id = randomId;
				flights.push(oFlightInfo);
			});

			// Send flights array back to client
			res.send(flights);
			
		})
};