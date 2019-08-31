const path = require("path");
const exec = require("child_process").exec;
module.exports = (config, tempDir) => {
  const gitCloneSourceCommand = `git clone --single-branch --branch ${config.sourceBranch} ${config.sourceCloneUrl} ${tempDir}${path.sep}source`;
  const gitCloneTargetCommand = `git clone ${config.targetCloneUrl} ${tempDir}${path.sep}target`;
  return new Promise((resolve, reject) => {
    exec(`${gitCloneSourceCommand} && ${gitCloneTargetCommand}`, error => {
      if (error) {
        reject();
      } else {
        resolve({
          source: `${tempDir}${path.sep}source`,
          target: `${tempDir}${path.sep}target`
        });
      }
    });
  });
};
