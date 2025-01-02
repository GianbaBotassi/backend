import Boulder from "../models/Boulder";

export const findAllBoulders = async () => {
  try {
    const boulders = await Boulder.find();
    return boulders;
  } catch (error) {
    throw new Error(`Errore recupero boulders: ${error}`);
  }
};

export const findBoulderById = async (id: string) => {
  try {
    const boulder = await Boulder.findOne({ _id: id });
    return boulder;
  } catch (error) {
    throw new Error(`Errore recupero boulder con id: ${id} ${error}`);
  }
};

export const saveBoulderDb = async (BoulderData: any) => {
  try {
    const newBoulder = new Boulder(BoulderData);
    const existingBoulder = await Boulder.findOne({ name: BoulderData.name });
    if (existingBoulder) {
      console.log("Nome boulder giá presente");
      throw new Error(`Nome boulder giá utilizzato`);
    }
    const savedBoulder = await newBoulder.save();
    return savedBoulder;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Errore salvataggio boulder: ${error.message}`);
    }
  }
};

export const filteredBouldersByGrades = async (grades: []) => {
  try {
    filteredBouldersByGrades;
    let boulders;
    if (grades.length > 0) {
      boulders = await Boulder.find({ grade: { $in: grades } }).sort({
        createdAt: -1,
      });
    } else {
      boulders = await Boulder.find().sort({
        createdAt: -1,
      });
    }
    console.log("Lista boulder recuperata correttamente");
    return boulders;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Errore recupero boulder: ${error.message}`);
    }
  }
};
