import express from "express";
import cors from "cors";
import connectDB from "./src/database";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// // Connetti alla base di dati MongoDB
// mongoose.connect(process.env.MONGODB_URI, {});

// // Definisci i modelli di dati
// const BoulderSchema = new mongoose.Schema({
//   name: String,
//   grade: String,
//   holds: String,
// });

// const HoldsLayoutSchema = new mongoose.Schema({
//   name: String,
//   holds: String,
// });

// const Boulder = mongoose.model("Boulder", BoulderSchema);
// const HoldsLayout = mongoose.model("HoldsLayout", HoldsLayoutSchema);

// // Definisci le rotte
// app.post("/api/boulders", async (req, res) => {
//   logger(req.body);
//   const { grades } = req.body;
//   let boulders;
//   if (grades.length > 0) {
//     boulders = await Boulder.find({ grade: { $in: grades } });
//   } else {
//     boulders = await Boulder.find();
//   }
//   try {
//     res.json(boulders);
//     console.log("Lista boulder recuperata correttamente");
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/getLayout", async (req, res) => {
//   try {
//     const layout = await HoldsLayout.find({ name: "Layout 2024" });
//     res.json(layout);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/setLayout", async (req, res) => {
//   const holdsLayout = new HoldsLayout();
//   holdsLayout.name = "Layout 2024";
//   holdsLayout.holds = process.env.holdsLayout;
//   try {
//     await holdsLayout.save();
//     res.status(201).json(holdsLayout);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.post("/api/boulder", async (req, res) => {
//   try {
//     const boulder = new Boulder(req.body);
//     const existingBoulder = await Boulder.findOne({ name: boulder.name });
//     if (existingBoulder) {
//       console.log("Nome boulder giá presente");
//       return res.status(409).json("Nome boulder giá utilizzato");
//     }
//     await boulder.save();
//     console.log("Boulder " + boulder.name + " salvato corretamente");
//     res.status(201).json(boulder);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.delete("/api/deleteBoulder", async (req, res) => {
//   try {
//     const boulderId = req.body;
//     const boulder = await Boulder.findOneAndDelete({ _id: boulderId });

//     if (!boulder) {
//       return res.status(404).json({ message: "Boulder non trovata" });
//     }
//     res.status(200).json({ message: "Boulder eliminato con successo" });
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: "Errore durante l'eliminazione del boulder" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

// function logger(data) {
//   const now = new Date();
//   console.log(`[${now.toISOString()}]`, data);
// }
