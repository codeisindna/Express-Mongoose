const express = require("express");
const bookController = require("../controllers/book.controller");
const router = express.Router();

// book Routes
router
  .get("/", bookController.find)
  .get("/:id", bookController.findById)
  .post("/", bookController.create)
  .put("/:id", bookController.updateById)
  .delete("/:id", bookController.deleteById);

module.exports = router;
