const express = require("express");
const {schemas} = require("../models/participants.js")
const validateBody = require("../helpers/validateBody.js")

const ctrl = require("../controllers/participantsController.js");
const participantsRouter = express.Router();
participantsRouter.get(
    "/", ctrl.getAllParticipants);
    

    participantsRouter.post(
        "/", 
        validateBody(schemas.createParticipantSchema),
        ctrl.createParticipant
      );
module.exports = participantsRouter;
