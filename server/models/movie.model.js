const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    },
    rating: { type: Number,
        required: [true,"{PATH} is required"],
    },
    review: { type: String,
        required: [true,"{PATH} is required"],
        minlength: [10, "{PATH} must be at least 10 chars"]
    }
}, { timestamps: true });
module.exports.Review = mongoose.model('Review', ReviewSchema);

const MovieSchema = new mongoose.Schema({
    title: { type: String,
        required: [true,"Movie title is required"],
        minlength: [3, "{PATH} must be at least 3 chars"]
    },
    reviews: [ReviewSchema]
}, { timestamps: true });
module.exports.Movie = mongoose.model('Movie', MovieSchema);