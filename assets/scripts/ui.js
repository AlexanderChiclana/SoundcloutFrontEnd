const store = require('./store')


const signUpSuccess = function (data) {
  // $('#message').text('Signed up successfully')
  // $('#message').css('background-color', 'green')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  // $('#message').text('Error on sign up')
  // $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('.hiddenContent').css('display', 'block')
  $('.navbar').css('visibility', 'visible')

  $('#entry').css('display', 'none')
  $('#clearContent').css('display', 'none')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#getMyAlbums').click()
  $('body').css("background-image", "url(https://wallpaper-house.com/data/out/9/wallpaper2you_353822.jpg)")
  $('#allAlbums').submit()
  $('#books-search').submit()
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const onPostReviewSuccess = function (data) {
  $('#message').text('Posted Review successfully')
  $('#message').css('background-color', 'green')
  $('#content').text('My Collection')
  $('#books-search').submit()
  console.log('review data', data)
}

// const onCommunityAlbumSuccess = function (data) {
//   console.table(data.albums)

//   $('#content').html('')
//   data.albums.forEach(album => {
//     const albumHTML = (`
//       <h4>Album:${album.title}</h4>
//       <p>Artist:${album.artist}</p>
//       <p> ID: ${album.id}</p>
//       <br>
//     `)
//     $('#content').append(albumHTML)
//   })
// }


// used for putting into table
const onCommunityAlbumSuccess = function (data) {
  console.table(data.albums)

  data.albums.forEach(album => {
    const albumHTML = (`
    <table>
      <tr>
      <td class="ratingData">ID:${album.id}</td>
      <td> ${album.title}</td>
      <td> ${album.artist}</td>


    </tr>
    </table>
    `)
    $('#communityContent').append(albumHTML)
  })
}


// const onIndexSuccess = function (data) {
//   console.log(data.discs)
//   // data.discs is the array to iterate over and find each item.
//   // loop over array data.discs[i] where for each
//   // if data.discs[i].user.id equals store.user.id THEN console.log(data.discs[i])
//   console.log(data.discs.length)
//   $('#content').css('display', 'block')
//   //
//   for (let i = 0; i < data.discs.length; i++) {
//     if (data.discs[i].user.id === store.user.id) {
//       console.log('match successful')
//       $('#content').append(
//         `<h4>${data.discs[i].album.title}</h4>
//          <p>Artist: ${data.discs[i].album.artist}</p>
//          <p>Year: ${data.discs[i].album.year}</p>
//          <p>Rating: ${data.discs[i].rating}
//         `)

//     } else {
//       console.log(' match unsuccessful')
//     }
//   }
// }


// this one is used for pushing data into a table
const onIndexSuccess = function (data) {
  console.log(data.discs)
  // data.discs is the array to iterate over and find each item.
  // loop over array data.discs[i] where for each
  // if data.discs[i].user.id equals store.user.id THEN console.log(data.discs[i])
  console.log(data.discs.length)
  $('#content').css('display', 'block')
  //
  for (let i = 0; i < data.discs.length; i++) {
    if (data.discs[i].user.id === store.user.id) {
      console.log('match successful')
      $('#content').append(`
        <table>
          <tr>
          <td>${data.discs[i].id}</td>
        <td>${data.discs[i].album.title}</td>
         <td>Artist: ${data.discs[i].album.artist}</td>
         <td>Year: ${data.discs[i].album.year}</td>
         <td class="ratingData">Rating: ${data.discs[i].rating}</td>
         </tr>
         </table>
        `)

    } else {
      console.log(' match unsuccessful')
    }
  }


}


const onError = function (err) {
  console.error(err)

  $('#message').text('Something went wrong with that last request!')

  // 5 seconds after the message appears, clear it
  setTimeout(() => $('#message').text(''), 5000)
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the album!')

  $('#communityContent').html('Community Collection')
  $('#allAlbums').submit()

}

const onDeleteSuccess = function (){
  console.log('You successfully deleted the album from your collection!')

}

const onPostSuccess = function () {
  console.log('You successfully uploaded the community album!')
  $('#allAlbums').submit()
}

const onGetMyAlbumSucess = function (data) {
  // console.log(data.user.collection)

  let bio = data.user.collection
  // clear content section
  let name = data.user.email
  console.log(bio)
  $('#bio').text(bio)
  $('#name').html(name)
  $('#content').css('display', 'block')



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
  onCommunityAlbumSuccess,
  onPostReviewSuccess
}
