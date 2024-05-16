const {Schema, model} = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError.js");
const Joi = require("joi");

const ParticipantsSchema = new Schema({
    event_id: {
        type: String,
        required: [true, 'Set name for contact'],
      },
   fullname: {
        type: String,
        required: [true, 'Set name for contact'],
      },
      email: {
        type: String,
      },
      birth: {
        type: String,
      },
      source: {
        type: String,
      },
},
{versionKey: false, timestamps: true});

ParticipantsSchema.post("save", handleMongooseError);

const Participant = model("participant", ParticipantsSchema);



const createParticipantSchema = Joi.object({
event_id: Joi.string().required(),
fullname: Joi.string().required(),
email: Joi.string().required(),
birth: Joi.string().required(),
source: Joi.string().required(),
})

const schemas = {createParticipantSchema,
}

module.exports = {Participant,
  schemas
};


