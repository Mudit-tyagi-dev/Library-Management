import {  } from 'express';
import * as bookService from './book.service.js';

// GET /api/books
export const getBooks = async (req, res ) => {
  try {
    const books = await bookService.getAllBooks()
    // console.log("running");
    res.status(200).json({books});
  } catch (err) {
    console.log(err);
  }
}

// GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookbyId(Number(req.params.id))
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
}