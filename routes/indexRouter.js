const { Router } = require("express");
/**
 * Since we’ll make this router usable only for paths that start with /indexes, our route paths here don’t need to include it.
 * Instead, they extend the parent path (we wouldn’t want our route to match /indexes/indexes/:indexId).
 */
const indexRouter = Router();


indexRouter.get("/", (req, res) => {
  res.send("All indices");
});
indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;
  res.send(`index ID: ${indexId}`);
});

module.exports = indexRouter;
