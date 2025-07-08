import express from "express";
import orderRoutes from "./orders";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/api", orderRoutes);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});

