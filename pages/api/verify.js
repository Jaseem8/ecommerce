const jwt = require("jsonwebtoken");
const User = require("@/models/user/userModel").default;
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
const mongoose = require("mongoose");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const token = req.body;
    try {
      const connect = async () => {
        await mongoose.connect(
          "mongodb+srv://jaseem8:3ZdteCS4u7edTcfN@cluster0.5kc1kni.mongodb.net/Ecommerce"
        );
      };
      connect();
      const payload = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

      const user = await User.findOne({ email: payload.email });

      res.status(201).json(user);
    } catch (error) {
      deleteCookie("jwt");
      res.send("error");
    }
  }
}
