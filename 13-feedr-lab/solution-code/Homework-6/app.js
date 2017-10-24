$(function() {
  // DOM is now ready
  _500px.init({
  //  sdk_key: 'YOUR JAVASCRIPT SDK KEY'
    sdk_key: 'APIKEY' // replace APIKEY with your own API key or this code won't work
  });

  // When the user logs in we will pull their favorite photos
  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    // check if navigator geolocation is available from the browser
    if (navigator.geolocation) {
      // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        let radius = '25mi';

        let searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
          rpp: 28,  // Return 28 results
          sort: 'highest_rating'  // Sort results by highest rated
        };

        // Now that we have the user's location, let's search the API for landscape photos nearby
        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found!');
          } else {
            handleResponseSuccess(response);
          }
        });

        // Get the currently logged in user
        _500px.api('/users', function(response) {
          let me = response.data.user.username;
          // Now we have access to the user name and other information
          console.log('Logging in: ', me);
        });
      });
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });

  function handleResponseSuccess(response) {
    let allData = response.data.photos;

    $.each(allData, function() {
      let element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }

  // If the user clicks the login link, log them in
  $('#login').click(function() {
    _500px.login();
  });

  // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
  // This keeps the site from prompting the user to log in each time the page is refreshed
  _500px.getAuthorizationStatus();
});
