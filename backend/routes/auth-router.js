const express = require("express");
const router = express.Router();
const authR =require("../controllers/auth-controller")
const authMiddleware = require("../middlewares/auth-middleware")


router.route('/register').post(authR.register);
router.route('/login').post(authR.login);
router.route('/user').get(authMiddleware,authR.user);

module.exports = router;