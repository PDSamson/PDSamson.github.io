'use strict'

const events = require('./events')

$('.skill-page').hide()
$('.contact-page').hide()
$('.resume-page').hide()
$('.projects-page').hide()

$(() => {
  events.addHandlers()
})
