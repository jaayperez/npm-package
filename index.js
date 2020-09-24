#!/usr/bin/env node

/**
 * Print current date and time
 *
 * @return {String}
 */

"use strict"

const chalk = require('chalk') // Colorize output
const clear = require('clear') // Clear terminal screen
const figlet = require('figlet') // Create ASCII art from text

clear()
console.log('\n')

console.log(
  chalk.white(
    figlet.textSync('Date and Time', { horizontalLayout: 'full' })
  )
)

const currentTime = 'Date and Time: ' + new Date()

console.log( currentTime )
console.log('\n')
