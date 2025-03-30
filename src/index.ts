import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

const contents = [
    {
        id: 1,
        title: "Joao",
        text: "lakdsjf;alsdkfj;alsdkfj;alsdkfj;aldksjf;alksdjfladksjf",
        date: Date().toString(),
    },
    {
        id: 2,
        title: "Cleiton",
        text: "al;sdkfiuahpfweojbociug;auyhrpuodfsj",
        date: Date().toString(),
    },
    {
        id: 3,
        title: "Cesar",
        text: "auisdfhgpoiuqewh;oafihdpfouihqerojahdfs",
        date: Date().toString(),
    },
    {
        id: 4,
        title: "Marcos",
        text: "aodskfhpoiadhf;oiasdhfoiahdsf",
        date: Date().toString(),
    },
];

app.use(express.json());
app.use(cors());

app.get("/contents", (req: Request, res: Response) => {
    res.send(contents);
});

app.get("/contents/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const content = contents.find((c) => c.id === id);

    if (content) {
        res.send(content);
    } else {
        res.status(404).send({ message: "Content not found" });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
