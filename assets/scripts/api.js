const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/discs',
    method: 'GET'
  })
}

const communityIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/albums',
    method: 'GET'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/albums/' + data.album.id,
    method: 'PATCH',
    data
  })
}

const post = function (data) {
  return $.ajax({
    url: config.apiUrl + '/albums/',
    method: 'POST',
    data
  })
}

const postReview = function () {
  return $.ajax({
    url: config.apiUrl + '/discs',
    method: 'POST',
    data: {
      'disc': {
        'user_id': '2',
        'album_id': '4',
        'rating': '4'
      }
    }

  })
}

const collect = function () {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  index,
  update,
  post,
  collect,
  communityIndex,
  postReview
}
