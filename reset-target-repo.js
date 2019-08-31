const exec = require("child_process").exec;
module.exports = (config, targetDir) => {
  return new Promise((resolve, reject) => {
    if (config.replace) {
      const cleanDirectoryCommand = config.isWindows
        ? `rmdir ${targetDir} /s /q`
        : `rm -rf ${targetDir}`;
      const makeDirCommand = `mkdir ${targetDir} && git init ${targetDir}`;
      const gitCommand = `cd ${targetDir} && git remote add origin ${config.targetCloneUrl}`;
      exec(
        `${cleanDirectoryCommand} && ${makeDirCommand} && ${gitCommand}`,
        error => {
          if (error) {
            console.log(error);
            return reject();
          } else {
            return resolve();
          }
        }
      );
    } else {
      return resolve();
    }
  });
};
