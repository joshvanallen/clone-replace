const path = require("path");
const fs = require("fs");
const os = require("os");

module.exports = () => {
  return fs.mkdtempSync(path.join(os.tmpdir(), "wkspcclone-"));
};
