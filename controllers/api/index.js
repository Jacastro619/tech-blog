const router = require("express").Router();

const userRoutes = require("./user-routes");
const infoRoutes = require("./info-routes");

router.use("/user", userRoutes);
router.use("/info", infoRoutes);

module.exports = router;
