const express = require("express");
const { selectAllUsers, adduser } = require("./user");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/users", async (req, res) => {
    const list = await selectAllUsers()
    res.json(list)
})

app.post("/adduser", async (req, res) => {
    const user = req.body;
    console.log(user)
    await adduser(user)
    res.json({ md: "new user" })
})

app.listen('4000', () => console.log("server started"));