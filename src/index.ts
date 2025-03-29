import express, { Request, Response } from "express";

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript with Express!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
