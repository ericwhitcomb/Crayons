const express = require('express');
const crayonRouter = require('./routers/crayonRouter');

const server = express();
const PORT = 5434;

server.use(express.json());

server.use('/api/crayons', crayonRouter);

server.get('/', (req, res) => {
    res.send('API is active');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});