require("dotenv").config();

// WEB SOCKET DEPS
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const path = require("path");
const express = require("express");
const { json } = require("body-parser");
const { errorHandler } = require("./src/middleware/ErrorHandler");
const { throwError } = require("./src/universal");

const auth = require("./src/middleware/auth");
const app = express();

// REST
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(json());
app.use(auth);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/public", require("./src/routes/publicRoutes"));
app.use("/user", require("./src/routes/userRoutes"));
app.use("/folder", require("./src/routes/folderRoutes"));
app.use("/file", require("./src/routes/fileRoutes"));

app.use(function (req, res, next) {
  throwError("Hľadaná stránka neexistuje", 404);
});

app.use(errorHandler);

// WEB SOCKET
const server = http.createServer(app);
const io = new Server(server, {
  path: "/socket",
  wssEngine: ["ws", "wss"],
  transports: ["websocket", "polling"],
  cors: {
    origin: "*", // Allows all origins (Recommended to change in PROD)
  },
});

module.exports = { app, server, io };
