const UserController = require('../controllers/user.controllers');
const {authenticate} = require('../config/jwt.config');
const ServiceController = require('../controllers/service.controller');

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);
    app.get('/api/getuser', UserController.getLoggedUser)

    app.post('/api/service/new', ServiceController.create);
    app.get('/api/services', authenticate, ServiceController.getAll);
    app.get('/api/services/:name',  ServiceController.getByName);
    app.get('/api/service/:id',  ServiceController.getOne);
    app.put('/api/service/update/:id', ServiceController.update);
    app.delete('/api/service/delete/:id', ServiceController.delete);
}
