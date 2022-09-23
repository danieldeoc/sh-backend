import express from "express";
import cors from 'cors';
import db from "./database/db.js";
import userRouter from "./routes/routes.js";
import hotelsRoutes from "./routes/hotelRoutes.js";

const app = express();
app.use(cors());
app.use(express.json())
app.use("/users", userRouter);
app.use("/hotels", hotelsRoutes);

try {
    await db.authenticate();
} catch (error) {
    console.log(error)
}

app.get('/', (req, res) => {
    res.send("SH Hello world");
})

app.listen(8000, () => {
    console.log("server running at http://localhost:8000/")
})

/// run in terminnal > folder node > node app