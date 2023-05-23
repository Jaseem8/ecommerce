const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: [true, "There is alrady a account with this email"],
    lowerCase: true,
    validate: [validator.isEmail, "Please enter a  valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "The passwords do not match"],
    minLength: 8,
  },
});
userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password")) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
