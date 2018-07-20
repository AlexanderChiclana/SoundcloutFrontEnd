const config = require('./config')
// const store = require('./store')

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
module.exports = {
  signUp,
  signIn,
  index,
  update
}
