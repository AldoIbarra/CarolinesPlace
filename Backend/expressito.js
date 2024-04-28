import express from "express";

const app = express();

// Middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey que tal");
})



app.post("/login", (req, res) => {
    const { user, pass } = req.body;
    if (user === "Fulanito" && pass === "tilin") {
        res.status(200).send();
    } else {
        res.status(403).send();
    }
});

console.log("Escuchando el puerto 3000");
app.listen(3000);