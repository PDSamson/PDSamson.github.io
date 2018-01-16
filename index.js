'use strict'

$('.skill-page').hide()
$('.contact-page').hide()
$('.resume-page').hide()
$('.projects-page').hide()

const showSkills = function () {
  $('.skill-page').show()
  $('.contact-page').hide()
  $('.resume-page').hide()
  $('.projects-page').hide()
  $('.me-page').hide()
}

const showContact = function () {
  $('.skill-page').hide()
  $('.contact-page').show()
  $('.resume-page').hide()
  $('.projects-page').hide()
  $('.me-page').hide()
}

const showResume = function () {
  $('.skill-page').hide()
  $('.contact-page').hide()
  $('.resume-page').show()
  $('.projects-page').hide()
  $('.me-page').hide()
}

const showProjects = function () {
  $('.skill-page').hide()
  $('.contact-page').hide()
  $('.resume-page').hide()
  $('.projects-page').show()
  $('.me-page').hide()
}

const showMe = function () {
  $('.skill-page').hide()
  $('.contact-page').hide()
  $('.resume-page').hide()
  $('.projects-page').hide()
  $('.me-page').show()
}

$('.skills').click(showSkills)
$('.contact-info').click(showContact)
$('.resume').click(showResume)
$('.projects').click(showProjects)
$('.about-me').click(showMe)
