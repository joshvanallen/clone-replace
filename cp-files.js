const exec = require("child_process").exec;
module.exports = (config, directories) => {
  return new Promise((resolve, reject) => {
    const cpCommand = config.isWindows
      ? `xcopy ${directories.source} ${directories.target} /E /Y`
      : `cp -r ${directories.source}/* ${directories.target}`;
    exec(cpCommand, error => {
      if (error) return reject();
      else return resolve();
    });
  });
};
