import express from "express";
import cors from "cors";
// import errorHandler from "./middleware/error.middleware.js";

// routes
import bookrouter from "./modules/book/book.routes.js";
import userRoutes from "./modules/user/user.routes.js";
import issueRoutes from "./modules/issueDate/issueDate.routes.js";

const app = express();
// global middlewares
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  res.json({ success: true, message: "Library API running" });
});

// module routes
app.use("/books", bookrouter);
app.use("/users", userRoutes);
app.use("/issuedbooks", issueRoutes);

// app.use(errorHandler);
export default app;
