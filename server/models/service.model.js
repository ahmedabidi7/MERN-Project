const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    date: { type: String
    },
    link: { type: String
    },
    name: { type: String
    }
}, { timestamps: true });
module.exports.Appointment = mongoose.model('Appointment', AppointmentSchema);


const ServiceSchema = new mongoose.Schema({
    
    name: { type: String,
        required: [true,"{PATH} is required"],
    },

    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength:[3, "{PATH} must be at least 3 chars"],

    },
    category: {
        type: String,
        required: [ true, 'A Domain is required' ],
 
    },
    image:{
        type: String ,
        
    },
    description:{
        type: String,
        required: [true, "{PATH} is required"],
    },

    price:{
        type: Number ,
        default : true
    },
    appointments: [AppointmentSchema]
}, { timestamps: true });
module.exports.Service = mongoose.model('Service', ServiceSchema);