import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';
import { getContentType } from './getContentType.js';

export async function serveStatic(req, res, baseDir) {
    const { pathname } = new URL(req.url || '/', `http://${req.headers.host}`);
    const relPath = pathname === '/' ? 'index.html' : pathname;

    const filePath = path.join(baseDir, 'public', relPath);

    try {
        const content = await fs.readFile(filePath);
        const contentType = getContentType(path.extname(filePath).toLowerCase());
        sendResponse(res, 200, contentType, content);
    } catch (err) {
        console.log(err);
    }
}
