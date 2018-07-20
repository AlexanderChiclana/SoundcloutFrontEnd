'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

$(() => {

  const onSignUp = function (event) {
    event.preventDefault()
    console.log('sign up ran!')

    const data = getFormFields(this)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }

  const onSignIn = function (event) {
    event.preventDefault()
    console.log('sign in ran!')

    const data = getFormFields(this)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  }

    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)


})
