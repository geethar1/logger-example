var bunyan = require('bunyan');
var config = require('./config');
var log = bunyan.createLogger({
  name: 'services',
  streams: [
    {
      path: config.logpath + config.logfile
    }
  ],
  level: config.loglevel
});


log.info('logger info ', {result: "some object"});
log.debug('logger debug ', { result: 80, status: { started: 'yes'} });
log.warn('logger warn ', { result: 120 });
log.error('logger error ', new Error('result: 500'));
log.fatal('logger fatal ');


/*
LOG on /tmp/test.log

{"name":"services","hostname":"clpstpdfc208","pid":17461,"level":40,"msg":"logger warn  { result: 120 }","time":"2017-04-07T09:02:15.033Z","v":0}
{"name":"services","hostname":"clpstpdfc208","pid":17461,"level":50,"msg":"logger error  Error: result: 500\n    at Object.<anonymous> (/home/geetha/cox-workspace/TAM/logger.js:17:28)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (/home/geetha/cox-workspace/TAM/server.js:2:14)\n    at Module._compile (module.js:570:32)","time":"2017-04-07T09:02:15.036Z","v":0}
{"name":"services","hostname":"clpstpdfc208","pid":17461,"level":60,"msg":"logger fatal ","time":"2017-04-07T09:02:15.037Z","v":0}
*/