const fs = require('fs');
try {
  const buffer = fs.readFileSync('./tsconfig.json')
  const tsConfig = JSON.parse(buffer.toString());
  start(tsConfig);
} catch (er) {
  console.log('error:', er)
}

function start(_tsConfig) {
  _tsConfig.compilerOptions.watch = false;
  console.log('tsConfig: ', _tsConfig)
  require('ts-node').register(_tsConfig)

  const lab = require('./lab.ts')

  // const color = require('./color-functions/index.ts');
  // console.log(color)
}



