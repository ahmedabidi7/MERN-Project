const { Movie } = require('../models/movie.model');

module.exports.create = (request, response) => {
    Movie.create(request.body)
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Movie.find({})
        .then(objects => response.json(objects))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Movie.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Movie.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Movie.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
