const express = require("express")
const { getUser, setUser, updateUser, deleteUser } = require("../controller/userController")
const router = express.Router()


router.route("/").get(getUser).post(setUser)
router.route("/:id").put(updateUser).delete(deleteUser)


module.exports = router;