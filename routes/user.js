const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControolers");
const validator = require('../utils/requestValidation')

router.get("/", userController.getAllUser);
router.post("/", validator("user"), userController.addUser);
router.get("/:id", userController.getUserbyID);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
