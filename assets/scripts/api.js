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
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const destroy = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/discs/' + data.album.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const post = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/albums/',
    method: 'POST',
    data
  })
}

// const postReview = function () {
  // console.log(formValue)
//   return $.ajax({
//     url: config.apiUrl + '/discs',
//     method: 'POST',
//     data: {
//       'disc': {
//         'user_id': store.user.id,
//         'album_id': '4',
//         'rating': '4'
//       }
//     }

//   })
// }

const postReview = function (data) {
  // console.log(data)
  // console.log(data.disc.album_id)
  // console.log(data.disc.rating)
  return $.ajax({
    url: config.apiUrl + '/discs',
    method: 'POST',

    data: {
      'disc': {
        'user_id': store.user.id,
        'album_id': data.disc.album_id,
        'rating': data.disc.rating
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
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

const indexOwners = function () {
  return $.ajax({
    url: config.apiUrl + '/discs',
    method: 'GET'
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const changePassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  index,
  update,
  post,
  collect,
  communityIndex,
  postReview,
  destroy,
  changePassword
}
