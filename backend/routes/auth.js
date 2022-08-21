const router = require("express").Router();

const {
  handleRegister,
  handleLogin,
  handleRefresh,
} = require("../controller/auth");

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/refresh", handleRefresh);

module.exports = router;
