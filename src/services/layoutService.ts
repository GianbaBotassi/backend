import HoldsLayout from "../models/HoldsLayout";

export const findLayout = async () => {
  try {
    const layout = await HoldsLayout.findOne({
      _id: "6751b7698b0501e1e2d85ecd",
    });
    return layout;
  } catch (error) {
    console.error("Errore recupero layout: ", error);
  }
};
