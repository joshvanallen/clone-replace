const exec = require('child_process').exec
module.exports = (config, targetDir) => {
    const gitAddCommand = 'git add .';
    const gitCommitCommand = 'git commit -m "Commited By Clone-Replace"';
    const gitPushCommand = `git push -u --force origin ${config.targetBranch}`;
    exec(`cd ${targetDir} && ${gitAddCommand} && ${gitCommitCommand} && ${gitPushCommand}`, error=>{
        if(error){
            console.log(error);
        }
    });
}