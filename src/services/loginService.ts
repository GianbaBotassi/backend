import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { UserInfo } from "os";

dotenv.config();

export const checkUserGetToken = async (req: any) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    console.log(password);

    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await User.findOne({
      username: username,
    });
    if (!user) {
      throw new Error("User not found");
    }
    console.log(user.password);
    // const isPasswordValid = await bcrypt.compare(password, user.password); // Confronta la password fornita con l'hash memorizzato
    // if (!isPasswordValid) {
    //   throw new Error("Invalid password");
    // }

    const secretKey = process.env.SECRET_KEY;
    if (!secretKey) {
      throw new Error("SECRET_KEY not defined");
    }
    const payload = {
      username: user.username,
      role: user.role,
    };
    const token = jwt.sign(payload, secretKey);
    return token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Errore recupero utente: ${error.message}`);
    }
  }
};

export const registerUser = async (req: any) => {
  try {
    const { username, password } = req.body;

    // Controlla se l'utente esiste già
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      throw new Error("Username already exists");
    }

    // Genera un salt e hash per la password
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Salva il nuovo utente
    const newUser = new User({
      username,
      password: hashedPassword,
      role: "admin",
    });
    newUser.save();
    return { message: "User registered successfully" };
  } catch (error) {
    throw new Error("Internal server error");
  }
};
