const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnected",socket.id)
    });
})

app.get('/', (req, res, next) => {
    res.send('OK !');
})

server.listen(8000, () => {
    console.log('Server running on port : 8000');
})