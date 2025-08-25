import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    if (req.url === '/api' && req.method === 'GET') {
        sendJSONResponse(res, 200, destinations);
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const parts = req.url.split('/');
        const continentName = parts[parts.length - 1];

        const filteredData = destinations.filter(
            (destination) => destination.continent.toLowerCase() === continentName.toLowerCase()
        );

        sendJSONResponse(res, 200, filteredData);
    } else {
        const errorBody = { error: 'not found', message: 'The requested route does not exist' };
        sendJSONResponse(res, 404, errorBody);
    }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
