const express = require('express')

 const hubsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());
server.use('/api/posts', hubsRouter)

server.get('/', (req, res) => {
    res.send(`
    <p>Server.js</p>
    `);
});


module.exports = server;