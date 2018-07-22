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
  $('.hiddenContent').css('display', 'block')
  $('#entry').css('display', 'none')

  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const onPostReviewSuccess = function (data) {
  $('#message').text('Posted Review successfully')
  $('#message').css('background-color', 'green')
  console.log('review data', data)
}

const onCommunityAlbumSuccess = function (data) {
  console.table(data.albums)

  $('#content').html('')



  data.albums.forEach(album => {
    const albumHTML = (`

      <h4>Album:${album.title}</h4>
      <p>Artist:${album.artist}</p>
      <p> ID: ${album.id}</p>


      <br>

    `)

    $('#content').append(albumHTML)
  })
}
const onIndexSuccess = function (data) {
  console.log(data.discs)
  // data.discs is the array to iterate over and find each item.
  // loop over array data.discs[i] where for each
  // if data.discs[i].user.id equals store.user.id THEN console.log(data.discs[i])
  console.log(data.discs.length)
  //
  for (let i = 0; i < data.discs.length; i++) {
    if (data.discs[i].user.id === store.user.id) {
      console.log('match successful')
      $('#content').append(
        `<h4>Name:${data.discs[i].album.title}</h4>
         <p>Artist: ${data.discs[i].album.artist}</p>
         <p>Year: ${data.discs[i].album.year}</p>
         <p>Rating: ${data.discs[i].rating}
        `)

    } else {
      console.log(' match unsuccessful')
    }
  }
  //
  // console.log(data.discs[0].user.id)
  // if (data.discs[0].user.id === store.user.id) {
  //   console.log('conntection successful')
  // } else {
  //   console.log('unsuccessful')
  // }
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

const onPostSuccess = function () {
  console.log('You successfully updated the album!')
  $('#content').html('')
}

const onGetMyAlbumSucess = function (data) {
  console.table(data)

  // clear content section
  $('#content').html('')



  $('#content').append(data.collection)

}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onIndexSuccess,
  onError,
  onUpdateSuccess,
  onPostSuccess,
  onGetMyAlbumSucess,
  onCommunityAlbumSuccess
}
