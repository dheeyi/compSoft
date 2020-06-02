const userController = require('../controllers/user');

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome ... API for creation compSoft(comparaSofware)!'
  }));

  app.post('/platform/api/register', userController.create);
  app.post('/platform/api/login', userController.userLogin);
};
