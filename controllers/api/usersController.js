const debug = require("debug")("mern:controllers:api:usersController");

const create = (req, res) => {
  debug("body: %o", req.body);

  const { name, email } = req.body;
  const user = {
    name,
    email,
  };

  debug("user: %o", user);
  res.json({ user });
};

module.exports = {
  create,
};
