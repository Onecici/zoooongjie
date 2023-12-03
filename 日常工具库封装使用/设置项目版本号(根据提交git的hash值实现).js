var fs = require("fs");

var gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim() // ref: refs/heads/develop
var ref = gitHEAD.split(': ')[1] // refs/heads/develop
var develop = gitHEAD.split('/')[2] // 环境：develop
var gitVersion = fs.readFileSync('.git/' + ref, 'utf-8').trim() // git版本号，例如：6ceb0ab5059d01fd444cf4e78467cc2dd1184a66
var gitCommitVersion = `${develop}:${gitVersion}` // 例如dev环境: "develop: 6ceb0ab5059d01fd444cf4e78467cc2dd1184a66"
// console.log(gitCommitVersion)

module.exports = gitCommitVersion;
