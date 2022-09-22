import  express  from 'express';
import cors from 'cors';
import db from "./database/db.js";
import router from "./routes/routes.js";

const app = express();
app.use(cors());

app.use("/users", router);

try {
    await db.authenticate();
    console.log("exito")
} catch (error) {
    console.log(error)
}

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(8000, () => {
    console.log("server running at http://localhost:8000/")
})
