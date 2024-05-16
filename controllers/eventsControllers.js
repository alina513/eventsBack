const {Event} = require("../models/event.js");

const ctrlWrapper = require("../helpers/ctrlWrapper.js");

const getAllEvents = async (req, res) => {
  const result = await Event.find();
  res.json(result);
};

module.exports = {
  getAllEvents: ctrlWrapper(getAllEvents),
};
