const { ROLES } = require("../models/Role");

exports.checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ msg: `Rol ${req.body.roles[i]} no existe` });
      }
    }
  }

  next();
};
