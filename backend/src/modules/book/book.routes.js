import express from "express";
import { getBooks, getBookById } from "./book.controller.js";
const bookrouter = express.Router();
bookrouter.use(express.json());
//rout for all books
bookrouter.get("/", getBooks);
//by id
bookrouter.get("/:id", getBookById);
export default bookrouter;
