import express from "express";
import db from "./config/database";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Connected');
}
catch { 
    console.log('Connectiob error', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Server runnig at port 5000'));