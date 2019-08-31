(async () =>{
    const config = require('./workshop-setup.json');
    config.isWindows = process.platform === "win32";
    const tempDir = require('./create-temp-dir')();
    console.log('completed creating temp');
    const directories = await require('./clone-repos')(config, tempDir);
    console.log('completed cloning');
    await require('./reset-target-repo')(config,directories.target);
    console.log('completed reseting');
    await require('./cp-files')(config,directories);
    console.log('completed copying files');
    require('./check-in')(config,directories.target);
    console.log('completed checking in the changes');
})();
