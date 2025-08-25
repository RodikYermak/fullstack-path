import http from 'node:http';
import { getDataFromDB } from './database/db.js';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();

    if (req.url === '/api' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(destinations));
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const parts = req.url.split('/');
        const continentName = parts[parts.length - 1];

        const filteredData = destinations.filter(
            (destination) => destination.continent.toLowerCase() === continentName.toLowerCase()
        );

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(filteredData));
    } else {
        const errorBody = { error: 'not found', message: 'The requested route does not exist' };
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(errorBody));
    }
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
