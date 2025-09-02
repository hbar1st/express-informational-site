// routes/authorRouter.js
const { Router } = require("express");

/**
 * Since we’ll make this router usable only for paths that start with /authors, our route paths here don’t need to include it. 
 * Instead, they extend the parent path (we wouldn’t want our route to match /authors/authors/:authorId).
 */
const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;
