import express from "express";

import cors from 'cors';
import orderRoutes from "./routes/order.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/api", orderRoutes);

export default app;

