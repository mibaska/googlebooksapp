const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.route("/api/books")
    .get()
    .post(booksController.create);

router
    .route("/api/books/:id")
    .delete(booksController.remove);

module.exports = router;