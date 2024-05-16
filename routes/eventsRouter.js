const express = require("express");

const ctrl = require("../controllers/eventsControllers");
const eventsRouter = express.Router();
eventsRouter.get(
    "/", ctrl.getAllEvents)
    

module.exports = eventsRouter;
