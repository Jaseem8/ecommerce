const User = require("@/models/user/userModel").default;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
var Cookies = require("cookies");
const jwt = require("jsonwebtoken");
//import * as jose from "jose";

import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

export default async function handler(req, res) {
  // var cookies = new Cookies(req, res);
  if (req.method === "POST") {
    const connect = async () => {
      await mongoose.connect(
        "mongodb+srv://jaseem8:3ZdteCS4u7edTcfN@cluster0.5kc1kni.mongodb.net/Ecommerce"
      );
    };
    connect();
    const enteredEmail = req.body.email;
    const enteredPassword = req.body.password;
    const user = await User.findOne({ email: enteredEmail });

    if (user && (await bcrypt.compare(enteredPassword, user.password))) {
      const token = jwt.sign(
        { name: user.name, email: user.email },
        process.env.NEXT_PUBLIC_JWT_SECRET,
        {
          expiresIn: process.env.NEXT_PUBLIC_JWT_EXPIRY,
        }
      );

      //
      // const secret = new TextEncoder().encode(
      //   "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
      // );
      // const alg = "HS256";
      // const token = await new jose.SignJWT({
      //   name: user.name,
      //   email: user.email,
      // })
      //   .setProtectedHeader({ alg })
      //   .setIssuedAt()
      //   .setExpirationTime("2h")
      //   .sign(secret);

      //cookies.set("jwt", token);
      // res.setHeader(
      //   "Set-Cookie",
      //   `jwt=${token}; HttpOnly; Path=/; SameSite=Lax;`
      // );
      setCookie("jwt", token, { req, res });
      res.redirect("/");
    }
  } else {
    res.status(200).json({ message: "failed" });
  }
}
