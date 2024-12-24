import { Request, Response } from "express";
import { checkUserGetToken, registerUser } from "../services/loginService";

export const doLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = await checkUserGetToken(req);
    res.json(token);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const doRegistration = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const message = await registerUser(req);
    res.json(message);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
