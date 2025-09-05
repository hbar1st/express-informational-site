// routes/bookRouter.js
const { Router } = require("express");

/**
* Since we’ll make this router usable only for paths that start with /books, our route paths here don’t need to include it. 
* Instead, they extend the parent path (we wouldn’t want our route to match /books/books/:bookID).
*/
const bookRouter = Router();

//temporarily remember the book ids until the server ends just for example (until we hook up localstorage or db)
let allReservedBooksIds = [];

bookRouter.get("/", (req, res) => res.send("All books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});

bookRouter.route("/:bookId/reserve").get((req, res) => {
    const { bookId } = req.params;
    res.send(`Reserved Book ID: ${bookId}`);
}).post((req, res) => {
    const { bookId } = req.params;
    allReservedBooksIds.push(bookId);
    res.send(`Book ID reserved: ${bookId}`);
});

module.exports = bookRouter;
