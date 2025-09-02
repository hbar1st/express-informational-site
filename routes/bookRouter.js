// routes/bookRouter.js
const { Router } = require("express");

/**
 * Since we’ll make this router usable only for paths that start with /books, our route paths here don’t need to include it. 
 * Instead, they extend the parent path (we wouldn’t want our route to match /books/books/:bookID).
 */
const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
});

module.exports = bookRouter;
