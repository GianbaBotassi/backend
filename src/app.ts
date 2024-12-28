import express from "express";
import cors from "cors";
import boulderRoutes from "./routes/boulderRoutes";
import layoutRoutes from "./routes/layoutRoutes";
import loginRoutes from "./routes/loginRoutes";
import homeRoutes from "./routes/homeRoutes";

const app: any = express();

app.use(express.json());
app.use(cors());
app.use("/", homeRoutes);
app.use("/api", loginRoutes);
app.use("/api/boulder", boulderRoutes);
app.use("/api/layout", layoutRoutes);

export default app;
