const express = require("express");
const router = express.Router();
const mainRouter = require("../controllers/save-controller")

router.route('/').get(mainRouter.home);
router.route('/save').post(mainRouter.save)
router.route('/exp').get(mainRouter.showExp)

module.exports = router;