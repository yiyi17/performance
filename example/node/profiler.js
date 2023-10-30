import profiler from 'v8-profiler-node8';
import * as fs from 'fs';
// const Bluebird = require('bluebird');

console.log(profiler);

profiler.startProfiling('CPU profile');
const profile = profiler.stopProfiling();
profile.export()
  .pipe(fs.createWriteStream(`cpuprofile-${Date.now()}.cpuprofile`))
  .on('finish', () => profile.delete());
