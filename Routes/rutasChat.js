const { Router } = require("express");
const chat = require("../Daos/daoChat.js");
const routerChat = Router();

routerChat.get('/mensajes', async (req, res) => {
    res.json(await chat.obtenerTodos())
})

routerChat.post("/mensajes", async (req, res) => {
    const msj = req.body
    console.log(msj)
    if (msj.username === "" || msj.text === "") {
        res.send(alert('Algunos campos del producto estan vacios'))
    } else {
        await chat.agregarItem(msj);
        res.redirect("http://localhost:3000/");
    }
});

module.exports = routerChat;