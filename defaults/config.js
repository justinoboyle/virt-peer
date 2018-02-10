const { join } = require('path')
module.exports = async() => ({
    apiPort: 3000,
    rootMountPoint: join(__dirname, './data')
})