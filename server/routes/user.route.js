const UserController = require('../controllers/user.controllers');
const {authenticate} = require('../config/jwt.config');
const MovieController = require('../controllers/movie.controller');

module.exports = (app) => {
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.post('/api/logout', UserController.logout);

    app.post('/api/movie/new', MovieController.create);
    app.get('/api/movies', authenticate, MovieController.getAll);
    app.get('/api/movie/:id',  MovieController.getOne);
    app.put('/api/movie/update/:id', MovieController.update);
    app.delete('/api/movie/delete/:id', MovieController.delete);
}
