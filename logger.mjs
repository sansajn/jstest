// simple logger module
'use strict'

export const Level = {FINE:1, INFO:2, WARN:3, ERROR:4};
export let currentLevel = Level.INFO;
export const setLevel = level => { currentLevel = level; };
