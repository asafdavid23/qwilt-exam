const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome to v${process.env.APP_VERSION}`)
})


app.listen(PORT, HOST);
console.log(`docker is Running on http://${HOST}:${PORT}`);