'use strict'

const events = require('./events')

console.log('blech')

$('.skill-page').hide()
$('.contact-page').hide()
$('.resume-page').hide()
$('.projects-page').hide()

$(() => {
  events.addHandlers()
})
