const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/inventory");

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("123456", 10);

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin created successfully");
  mongoose.disconnect();
}

createAdmin();