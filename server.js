const express = require('express')

// const hubsRouter = require('')

const server = express();

server.use(express.json());
// server.use

server.get('/', (req, res) => {
    res.send(`
    <p>Server.js</p>
    `);
});


module.exports = server;