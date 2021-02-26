const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("paciente").readOwn("profile").updateOwn("profile");

  ac.grant("doctor").extend("paciente").readAny("profile");

  ac.grant("admin")
    .extend("paciente")
    .extend("doctor")
    .updateAny("profile")
    .deleteAny("profile");

  return ac;
})();
