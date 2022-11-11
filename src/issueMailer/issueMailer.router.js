const router = require("express").Router();
const controller = require("./issueMailer.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;
