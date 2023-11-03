const { getUsers, searchUser } = require('../controller/userController');

function userRoutes(fastify, options, done) {
  // Get All Users
  fastify.get('/', getUsers);
  // Search 
  fastify.post('/', searchUser);
  done();
};

module.exports = userRoutes;