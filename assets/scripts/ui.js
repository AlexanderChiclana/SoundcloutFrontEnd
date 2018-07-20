const store = require('./store')


const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  console.table(data.albums)

  // clear content section
  $('#content').html('')

  data.albums.forEach(album => {
    const albumHTML = (`

      <h4>Title: ${album.title}</h4>
      <p>Artist: ${album.artist}</p>
      <br>


    `)

    $('#content').append(albumHTML)
  })
}

const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong with that last request!')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the album!')
  $('#content').html('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onIndexSuccess,
  onError,
  onUpdateSuccess
}
