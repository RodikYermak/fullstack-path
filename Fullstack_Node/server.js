import http from 'node:http';
import { serveStatic } from './utils/serveStatic.js';
import { handleGet } from './handlers/routeHandlers.js';

const PORT = 8002;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res);
        }
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname);
    }
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));


// if (req.url === '/sub' && req.method === 'POST') {

//     let body = ''

//     for await (const chunk of req) {
//       body += chunk
//     }

//     try {
//       const emailObj = JSON.parse(body)
//       console.log(emailObj)
//       res.statusCode = 201
//       res.setHeader('Content-Type', 'application/json')
//       res.end(JSON.stringify(emailObj))
//     }
//     catch (err) {
//       console.log('Invalid JSON, ', err)
//     }
//     return
//   }