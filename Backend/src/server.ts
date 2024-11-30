// bearbeitet von Marcia Perez Heilig

import dotenv from 'dotenv';
import app from './app';

dotenv.config(); // load environment variables

const port = process.env.PORT; // set port from environment variables

// start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});