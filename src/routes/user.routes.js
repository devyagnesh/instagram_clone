const express = require("express");
const Authentication = require("../middlewares/Authentication");
const UploadProfile = require("../middlewares/UploadProfile");
const {
  Signup,
  Login,
  Logout,
  updateBirthDate,
  UpdateProfile,
  RemoveProfile,
  FollowAccount,
  unFollowAccount,
  ConfirmRequest,
} = require("../controllers/user.controller");

const route = express.Router();

route.post("/signup", Signup);
route.post("/login", Login);
route.post("/logout", Authentication, Logout);
route.post("/dob", Authentication, updateBirthDate);
route.post("/profile", Authentication, UploadProfile, UpdateProfile);
route.delete("/profile", Authentication, RemoveProfile);
route.post("/follow", Authentication, FollowAccount);
route.post("/unfollow", Authentication, unFollowAccount);
route.post("/confirm", Authentication, ConfirmRequest);

module.exports = route;
