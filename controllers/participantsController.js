const {Participant} = require("../models/participants.js");
const HttpError = require("../helpers/HttpError.js");
const ctrlWrapper = require("../helpers/ctrlWrapper.js");

const getAllParticipants = async (req, res) => {
  const {event_id: event} = req.body;
  const result = await Participant.find({event});
  res.json(result);
};
const createParticipant = async (req, res) => {
  const result = await Participant.create({...req.body});
  if (!result) {
    throw HttpError(400);
  }
  res.status(201).json(result);
};


module.exports = {
  getAllParticipants: ctrlWrapper(getAllParticipants),
  createParticipant: ctrlWrapper(createParticipant)
};
