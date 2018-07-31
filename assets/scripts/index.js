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
    // console.log('sign up ran!')

    const data = getFormFields(this)
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }

  const onSignIn = function (event) {
    event.preventDefault()
    // console.log('sign in ran!')

    const data = getFormFields(this)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  }


  const onGetAlbums = function (event) {

    event.preventDefault()
    api.index()
      .then(ui.onIndexSuccess)
      .catch(ui.onError)
  }

  const onCommunityAlbums = function (event) {
    event.preventDefault()
    api.communityIndex()
      .then(ui.onCommunityAlbumSuccess)
      .catch(ui.onError)
  }

  const onUpdateAlbum = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // console.log(data)
    // const album = data.album
    // if (album.title === '') {
    //   // alert('title required')
    //   $('#content').html('<p>Title is required</p>')
    //   $('#content').css('background-color', 'red')
    //   return false
    // }
    // if (album.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onError)
    // } else {
    //   console.log('Please provide a book id!')
    // }
  }

  const onDeleteAlbum = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // console.log(data)

    api.destroy(data)
      .then(ui.onDeleteSuccess)
      .catch(ui.onError)

  }


  const onPostAlbum = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // console.log(data)

    api.post(data)
      .then(ui.onPostSuccess)
      .catch(ui.onError)

  }

  const onPostReview = function (event) {
    event.preventDefault()
    const data = getFormFields(event.target)
    // console.log(data)

    api.postReview(data)
      .then(ui.onPostReviewSuccess)
      .catch(ui.onError)

  }

  const onGetMyAlbums = function (event) {
    event.preventDefault()
    api.collect()
      .then(ui.onGetMyAlbumSucess)
      .catch(ui.onError)
  }

  const clearFields = function () {
    event.preventDefault()
    $('#content').html('')
    $('#communityContent').html('')
  }

  // const getAvg = function (event) {
  //   event.preventDefault()
  //   const data = getFormFields(event.target)
  //   api.index()
  //     .then(ui.onAvgSuccess(data))
  //     .catch(ui.onError)
  // }

  const editAlbums = function () {
    $('#stageOne').css('display', 'none')
    $('#stageTwo').css('display', 'block')
    // console.log('hi')
  }

  const onSignOut = function (event) {
    event.preventDefault()
    // console.log('sign out ran')

    api.signOut()
      .then(ui.signOutSuccess)
      .catch(ui.onError)
  }

  const postSection = function () {
    $('#stageOne').css('display', 'block')
    $('#stageTwo').css('display', 'none')
    // console.log('hi')
  }

  const onChangePassword = function (event) {
    event.preventDefault()
    // console.log('change password ran!')

    const data = getFormFields(this)
    api.changePassword(data)
      .then(ui.changePasswordSuccess)
      .catch(ui.changePasswordFailure)
  }

  const changePasswordSection = function () {
    // console.log('clearing')
    $('#stageOne').css('display', 'none')
    $('#stageTwo').css('display', 'none')
    $('#changePassSpace').css('display','block')
  }

  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#books-search').on('submit', onGetAlbums)
  $('#book-update').on('submit', onUpdateAlbum)
  $('#album-post').on('submit', onPostAlbum)
  $('#getMyAlbums').on('click', onGetMyAlbums)
  $('#allAlbums').on('submit', onCommunityAlbums)
  $('#ratingPost').on('submit', onPostReview)
  $('#clear').on('click', clearFields)
  // $('#albumAvg').on('submit', getAvg)

  $('#edit').on('click', editAlbums)
  $('#albumDelete').on('submit', onDeleteAlbum)
  $('#signOut').on('click', onSignOut)
  $('#postSection').on('click',postSection)
  $('#changePassword').on('click', changePasswordSection)
  $('#change-password').on('submit', onChangePassword)
})
