import * as issueService from "./issueDate.service.js";

export const issueBook = async (req, res) => {
  try {
    const result = await issueService.issueBook(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getIssuedBooks = async (req, res) => {
  try {
    const data = await issueService.getAllIssuedBooks();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

