import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // Middleware to parse JSON bodies (from req.body)
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("hello world:)");
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

