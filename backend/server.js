import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("hello world:)");
});
app.use(express.json());
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

