const { Service } = require('../models/service.model');

module.exports.create = (request, response) => {
    Service.create(request.body)
        .then(object => response.json(object))
        .catch(err => response.status(400).json(err));
}

module.exports.getAll = (request, response) => {
    Service.find({})
        .then(objects => response.json(objects))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Service.findOne({_id:request.params.id})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.getByType = (request, response) => {
    Service.find({type:request.params.type})
        .then(object => response.json(object))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Service.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Service.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
