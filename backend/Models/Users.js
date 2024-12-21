const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const UsersSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    address: {
      streetName: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      phoneNumber: { type: String },
    },
  },
  { timestamps: true }
);

// Static sign up method and hashing password
UsersSchema.statics.signup = async function (email, name, password, role) {
  // validation
  if (!name || !email || !password) {
    throw Error("All Fields must be filled");
  } else if (!validator.isEmail(email)) {
    throw Error("Not a valid Email");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("User already exists");
  }

  const user = await this.create({
    name,
    email,
    password,
    role,
  });

  return user;
};

//static login method
UsersSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All Fields must be filled");
  }

  // check is user exists
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User does not exist");
  }

  const match = (await password) === user.password;
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

// Create Mongoose model
const UsersModel = mongoose.model("User", UsersSchema);
module.exports = UsersModel;
