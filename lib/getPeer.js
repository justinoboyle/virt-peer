const { join } = require('path')
const { homedir } = require('os')
const {existsSync, mkdirSync} = require('fs')

module.exports = function() {
    const path = process.env.VIRTPEER || join(homedir(), './virtpeer/')
    existsSync(path) || mkdirSync(path)
    return path
}
