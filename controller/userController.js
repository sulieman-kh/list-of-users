const fs = require('fs');

const getUsers = (req, reply) => {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    };
    if (req.query.term) {
      const result = JSON.parse(data).filter((elem) => elem.name.toLowerCase().search(req.query.term.toLowerCase()) !== -1);
      reply.render('partials/home', { modal: result, data: JSON.parse(data) });

      // To open the user card in a new window:👇
      // reply.render('partials/modal-user', { dataUser: result });
    }
    else {
      reply.render('partials/home', { data: JSON.parse(data) })
    };
  });
};

const searchUser = (req, reply) => {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) {
      console.log('File read failed:', err);
      return;
    };
    if (req.body.search) {
      const result = JSON.parse(data).filter((elem) => elem.name.toLowerCase().search(req.body.search.toLowerCase()) !== -1);
      reply.render('partials/home', { data: result });
    }
    else {
      reply.render('partials/home', { data: JSON.parse(data) });
    };
  });
};

module.exports = {
  getUsers,
  searchUser,
};
