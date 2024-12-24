import app from "./app";
import connectDB from "./database";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
