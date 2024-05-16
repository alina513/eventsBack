const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const EventSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      description: {
        type: String,
      },
      participants: {
        type: String,
      },
},
{versionKey: false, timestamps: true});

EventSchema.post("save", handleMongooseError);

const Event = model("event", EventSchema);



const createEventSchema = Joi.object({
name: Joi.string().required(),
description: Joi.string().required(),
participants: Joi.string().required(),
})

const schemas = {createEventSchema,
}

module.exports = {Event,
  schemas
};


