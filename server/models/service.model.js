const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
    type: { type: String,
        required: [true,"{PATH} is required"]
    },
    description: { type: String,
        required: [true,"{PATH} is required"],
    },
    name: { type: String,
        required: [true,"{PATH} is required"],
    }
}, { timestamps: true });
module.exports.Service = mongoose.model('Service', ServiceSchema);