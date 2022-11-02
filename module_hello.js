'use strict'

// JS module support sample.
import * as logger from './logger.mjs'

console.log(`logging level is set to ${logger.currentLevel}`);  // 2
logger.setLevel(logger.Level.FINE);
console.log(`logging level is set to ${logger.currentLevel}`);  // 1
