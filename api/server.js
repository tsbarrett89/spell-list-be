const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../user/userRouter.js');

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Spell list generator back end.")
});

server.use('/user', userRouter);

module.exports = server