var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello",
    user: "Ashley",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Darwin",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Submit a post" });
});

router.post("/new", function (req, res) {
  const body = req.body;
  messages.push({
    text: body.messageText,
    user: body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
