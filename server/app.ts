import express from "express";
import morgan from "morgan";
import cors from "cors";
import payablesRoutes from "./routes/payabales";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", payablesRoutes);



export default app