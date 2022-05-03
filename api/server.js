const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Spell list generator back end.")
});

module.exports = server