import express from 'express';
import { dirname }  from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const app = express();
// Have Node serve the files for our built React app
import apiRouter from './api/routes/api.js';

import db from './db.js'
const PORT = process.env.PORT || 3070;
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });
app.use(express.static(path.resolve(__dirname, './xo-guesser/build')));


// DB Middleware
app.use(function (req, res, next) {
    req.db = db;
    next()
})
app.use('/api', apiRouter);
  
app.listen(PORT, () => {
    console.log(`Server listening on the port::${PORT}`);
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './xo-guesser/build', 'index.html'));
  });