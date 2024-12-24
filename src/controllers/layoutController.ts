import { Request, Response } from "express";
import { findLayout } from "../services/layoutService";

export const getLayout = async (req: Request, res: Response): Promise<void> => {
  const boulders = await findLayout();
  res.json(boulders);
};
