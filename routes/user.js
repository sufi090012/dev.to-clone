import express from "express";
const router = express.Router();
import {
  signup,
  signin,
  changeEmail,
  changePassword,
  updateRegistrationInfo,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/changeEmail", auth, changeEmail);
router.post("/changePassword", auth, changePassword);
router.patch("/updateRegistrationInfo", auth, updateRegistrationInfo);

export default router;
