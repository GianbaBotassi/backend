import { Request, Response } from "express";
import { findLayout } from "../services/layoutService";
import HoldsLayout from "../models/HoldsLayout";

export const getLayout = async (req: Request, res: Response): Promise<void> => {
  const boulders = await findLayout();
  res.json(boulders);
};

export const testWithoutDb = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const layout = await HoldsLayout.findOne({
      _id: "6751b7698b0501e1e2d85ecd",
    });
    res.status(200).send("OK");
  } catch (error) {
    res.status(404).send("not work");
  }
};
export const testWithDb = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const layout = await HoldsLayout.findOne({
      _id: "6751b7698b0501e1e2d85ecd",
    });
    res.status(200).json(layout);
  } catch (error) {
    res.status(404).send("PRoblemmmm");
  }
};
