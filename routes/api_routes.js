const api_router = require('express').Router();
const  User = require('../models/user');
const bcrypt = require('bcrypt');
const { db } = require('../models/user');

api_router.get('/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

api_router.post('/user', async (req, res) => {
    const req_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = req_pass;
    const createUser = await User.create(req.body);
    res.send(createUser);
});

api_router.put('/user:id', async (req, res) => {
   const updateUser = await User.updateOne(req.body);
   res.send(updateUser)
})

module.exports = api_router;