// routes/authorRouter.js
const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");
/**
 * Since we’ll make this router usable only for paths that start with /authors, our route paths here don’t need to include it. 
 * Instead, they extend the parent path (we wouldn’t want our route to match /authors/authors/:authorId).
 */
const authorRouter = Router();

/**
 * 
 */
authorRouter.get("/", (req, res) => res.send("All authors"));

/**
 * 
 */
authorRouter.route("/:authorId").get(getAuthorById).post((req, res) => {
    const { authorId } = req.params;
    res.send(`Create Author ID: ${authorId}`);
});

module.exports = authorRouter;
