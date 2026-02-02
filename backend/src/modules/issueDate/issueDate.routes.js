import express from "express";
import { issueBook, getIssuedBooks } from "./issueDate.controller.js";
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("ISSUED BOOK ROUTE OK");
});

router.use(express.json());

router.post("/", issueBook);
router.get("/", getIssuedBooks);

export default router;
