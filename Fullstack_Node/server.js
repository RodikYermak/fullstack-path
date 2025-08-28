import http from 'node:http';
import path from 'node:path';
import serveStatic from 'utils/serveStatic.js';
import fs from 'node:fs/promises';

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    const absPathToResource = path.join(__dirname, 'public', 'index.html');
    const relPathToResource = path.join('public', 'index.html');
    console.log('absolute', absPathToResource);
    console.log('relative', relPathToResource);

    serveStatic(__dirname);
    const content = await fs.readFile(absPathToResource);
    console.log(content);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(content);
});

server.listen(PORT, () => console.log('Connected'));
