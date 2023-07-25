const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    date: { type: Date
    },
    link: { type: String
    },
    name: { type: String
    }
}, { timestamps: true });
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);


const ServiceSchema = new mongoose.Schema({
    type: { type: String,
        required: [true,"{PATH} is required"]
    },
    description: { type: String,
        required: [true,"{PATH} is required"],
    },
    name: { type: String,
        required: [true,"{PATH} is required"],
    },
    price: { type: Number,
        required: [true,"{PATH} is required"],
    },
    appointments: [AppointmentSchema]
}, { timestamps: true });
module.exports.Service = mongoose.model('Service', ServiceSchema);