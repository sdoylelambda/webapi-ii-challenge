const server = require('./server');

server.lister(4000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
});