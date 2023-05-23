// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "@/models/user/userModel";
import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://jaseem8:3ZdteCS4u7edTcfN@cluster0.5kc1kni.mongodb.net/Ecommerce",
    {
      bufferCommands: false,
    }
  );
};
connect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // create a new user instance from the mongoose model
    const newUser = await User.create(data);

    // save the user instance to the database

    res.redirect("/");
  }

  ////////////
}
