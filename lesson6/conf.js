const fs = require('fs');

//加载配置文件
var serverConf = {};
var conf = fs.readFileSync("server.conf");
var confs = conf.toString().split('\n');
for (let i = 0; i < confs.length; i++) {
    let tempConfs = confs[i].split('=');
    if (tempConfs.length < 2) {
        contiune;
    } else {
        serverConf[tempConfs[0]] = tempConfs[1]
    }
}

module.exports = serverConf;