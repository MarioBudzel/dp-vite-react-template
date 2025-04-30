require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");

const { server, io } = require("./app");

const restoreAndSeedDatabase = require("./seed/seed");

const maintenanceSchedule = {
  active: false,
  nextAlertTimestamp: null,
  inProgress: false,
  firstCall: false,
};

const scheduleMaintenance = () => {
  const now = new Date();
  const nextHour = new Date(now);

  const hoursToNext = maintenanceSchedule.firstCall ? 2 : 1;
  nextHour.setHours(now.getHours() + 2, 0, 0, 0);

  const alertTime = new Date(nextHour - 5 * 60 * 1000);

  const timeUntilAlert = alertTime - now;

  console.log(`Next maintenance alert schelud for: ${alertTime}`);

  setTimeout(() => {
    maintenanceSchedule.active = true;
    maintenanceSchedule.nextAlertTimestamp = alertTime;

    io.emit("incoming_maintenance");

    setTimeout(async () => {
      io.emit("maintenance");
      maintenanceSchedule.active = false;
      maintenanceSchedule.inProgress = true;

      setTimeout(async () => await restoreAndSeedDatabase(), 60000);
    }, 5 * 60 * 1000);
    setTimeout(() => {
      io.emit("maintenance_over");
      maintenanceSchedule.inProgress = false;
    }, 10 * 60 * 1000);

    maintenanceSchedule.firstCall = true;
    scheduleMaintenance();
  }, timeUntilAlert);
};

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DATABASE_URL);
    console.log("Succesfully connected to MongoDB");

    server.listen(3000, () => {
      console.log(`Listening at http://localhost:3000`);
    });

    await restoreAndSeedDatabase();

    scheduleMaintenance();

    io.on("connection", (socket) => {
      console.log("New Web Socket Connection:", socket.id);

      if (maintenanceSchedule.active) {
        socket.emit("incoming_maintenance");
      }

      if (maintenanceSchedule.inProgress) {
        socket.emit("maintenance");
      }

      socket.on("error", (err) => {
        console.log("WebSocket Error:", err);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

start();
