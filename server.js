import express from 'express';

import { fileURLToPath } from 'url';
import path from 'path';
import exp from 'constants';

const app = express();

const PORT = '8000';

// convert the url to path
const pathed = fileURLToPath(import.meta.url);

// parent directory of this file
const dir = path.dirname(pathed);

// combine the parent directory and the static directory 
const staticDir = path.join(dir, 'public');

// middleware to serve the static files
app.use(express.static(staticDir));

app.get('/', (req, res) => {
    res.json({ test: "test"});
})

app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
})