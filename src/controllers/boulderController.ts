import { Request, Response } from "express";
import {
  findAllBoulders,
  findBoulderById,
  saveBoulderDb,
  filteredBouldersByGrades,
} from "../services/boulderService";

export const getAllBoulders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const boulders = await findAllBoulders();
    res.json(boulders);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getBoulderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const boulderId = req.body.idBoulder;
    const boulder = await findBoulderById(boulderId);
    res.json(boulder);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const saveBoulder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const boulder = req.body;
    console.log(boulder);
    const savedBoulder = await saveBoulderDb(boulder);
    res.status(200).json(savedBoulder);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const filteredBoulders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { grades } = req.body;
    const boulderList = await filteredBouldersByGrades(grades);
    res.status(200).json(boulderList);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};
