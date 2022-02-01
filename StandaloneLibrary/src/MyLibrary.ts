// import { ChildProcess, spawn } from 'child_process'
// import * as fs from 'fs'
import * as net from 'net'
// import * as os from 'os'
// import * as path from 'path'

export function printStuff () {
    // console.log(fs.constants.F_OK)
    console.log(net.isIP('notIP'))
    // console.log(os.tmpdir)
    // console.log(path.join('tmp', 'dir'))
}
