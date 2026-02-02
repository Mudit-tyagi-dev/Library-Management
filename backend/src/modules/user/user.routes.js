import express from 'express';
import {getUsers , createUser , getuserById } from './user.controller.js';
const userrouter =express.Router();
userrouter.get('/', getUsers);
userrouter.post('/', createUser);
// userrouter.delete('/:id', deleteUser);
userrouter.get('/:id', getuserById);
export default userrouter;