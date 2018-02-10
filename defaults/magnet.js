provider = async state => {
    return [ /*something from somewhere else!*/ ]
}

module.exports = async state => ({
    magnets: [
        // 'magnet:?abcdefg', // just a name, will use the md5 hash as a directory,
        // ['magnet:?abcdefg', 'Name'], // custom names!
        // ...(await provider(state)), // async functions work here! they'll be added in place!
        // ...(require('./someOtherFile.json')) // bring in from a json file!
    ]
})
