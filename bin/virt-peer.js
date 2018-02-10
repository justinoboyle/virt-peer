#!/usr/bin/env node

const peerDir = require('../lib/getPeer')()
const { join } = require('path')
const { createHash } = require('crypto')
const { spawn } = require('child_process')

async function _() {
    const config = await(require(join(peerDir, 'config.js'))())
    const magnet = await(require(join(peerDir, 'magnet.js'))())
    const { mountPoint } = config

    const children = []
    try {
        for(let dirTitle in magnet) {
            const dir = join(mountPoint, dirTitle)
            for(let source of magnet[dirTitle]) {
                const child = spawn(`torrent-mount`, [source, '-m', dir])
                child.stderr.on('data', console.error)
                children.push(child)
            }
        }
    }catch(e) { console.error(e) }

    process.on('SIGTERM', () => {
        let wait = 0
        for(let child of children) {
            wait++
            child.on('exit', () => {
                wait--
                if(wait < 1)
                    process.exit(0)
            })
            child.kill()
        }
    })
        

}


_()