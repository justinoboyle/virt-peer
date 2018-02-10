const { join } = require('path')
module.exports = async() => ({
    mountPoint: join(__dirname, './data'),
    mounter: ({ source, dir }) => {
        return { command: 'torrent-mount', args: [source, '-m', dir]}
    } 
})