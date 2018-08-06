const store = require('./store')


const signUpSuccess = function (data) {
  $('#signUpField').html('Signed up successfully, please sign in')
  // $('#message').css('background-color', 'green')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#signUpHead').text('Error, please try again')
  $('#sign-up')[0].reset()

  // $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#panel').css('display', 'block')
  $('#message').text('Signed in successfully')
  $('.hiddenContent').css('display', 'block')
  $('.navbar').css('visibility', 'visible')
  $('#communityContent').css('display','block')
  $('#entry').css('display', 'none')
  $('#clearContent').css('display', 'none')
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
  $('#getMyAlbums').click()
  // $('body').css("background-image", "url(https://wallpaper-house.com/data/out/9/wallpaper2you_353822.jpg)")
  // $('body').css("background-image", "url(https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wonderfulengineering.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fbackground-wallpapers-34.jpg&f=1)")
  $('body').css("background-image","url(https://images.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-nvd8ZvgKh9Q%2FUBQgoMess1I%2FAAAAAAAAGso%2F2ZD7nOMApn4%2Fs1600%2FWood%2BWallpapers%2B2.jpg&f=1)")
  $('#allAlbums').submit()
  $('#books-search').submit()
  let name = data.user.email

  $('#name').text(name)
}

const signInFailure = function (error) {
  $('#signInHead').text('Error on sign in, please try again')
  $('#signInHead').css('background-color', 'red')
  $('#sign-ingit ')[0].reset()

  console.error('signInFailure ran. Error is :', error)
}

const onPostReviewSuccess = function (data) {
  $('#message').text('Posted Review successfully')
  $('#message').css('background-color', 'green')
  $('#content').text('My Collection')
  $('#books-search').submit()
  $('#ratingPost')[0].reset()

  // console.log('review data', data)
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

  // console.table(data.albums)
  $("#communityContent").html('<h3>Community Library</h3>')
  data.albums.forEach(album => {
    const albumHTML = (`
    <table>
      <tr>
      <td class="ratingData">${album.id}</td>
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
  // console.log(data.discs)
  $('#content').html('<h3>My Collection</h3>')
  $('#album-post').children('input').val('')
  // data.discs is the array to iterate over and find each item.
  // loop over array data.discs[i] where for each
  // if data.discs[i].user.id equals store.user.id THEN console.log(data.discs[i])
  // console.log(data.discs.length)
  $('#content').css('display', 'block')
  //
  for (let i = 0; i < data.discs.length; i++) {
    if (data.discs[i].user.id === store.user.id) {
      // console.log('match successful')
      $('#content').append(`
        <table>
          <tr>
          <td class="ratingData">${data.discs[i].id}</td>
        <td>${data.discs[i].album.title}</td>
         <td>${data.discs[i].album.artist}</td>
         <td class="yearData">${data.discs[i].album.year}</td>
         <td class="ratingData"> |  score| ${data.discs[i].rating}</td>
         </tr>
         </table>
        `)

    } else {
      // console.log(' match unsuccessful')
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
  // console.log('You successfully updated the album!')

  $('#communityContent').html('Community Collection')
  $('#allAlbums').submit()
  $('#book-update')[0].reset()

}

const onDeleteSuccess = function (){
  $('#books-search').submit()
  $('#albumDelete')[0].reset()

  // console.log('You successfully deleted the album from your collection!')

}

const onPostSuccess = function () {
  // console.log('You successfully uploaded the community album!')
  $('#album-post')[0].reset()

  $('#allAlbums').submit()
}

const onGetMyAlbumSucess = function (data) {
  // console.log(data.user.collection)

  // clear content section
  let name = data.user.email
  // console.log(bio)
  $('#bio').text(bio)
  $('#name').html(name)
  $('#content').css('display', 'block')



}

const signOutSuccess = function () {
  // console.log('You successfully got outta here!')
  $('#main').css('display','none')
  $('#exitScreen').css('display', 'block')
  window.location.reload()
}

const changePasswordSuccess = function () {
  $('.out-modal-content').css('border-color', 'green')
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('.out-modal-content').css('border-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
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
  onPostReviewSuccess,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  onDeleteSuccess
}
