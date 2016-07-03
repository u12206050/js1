/**
 * Instagram OAuth Exercise
 * ====
 *
 * See the README.md for instructions
 */

(function() {

  var forecastBasUrl = 'https://crossorigin.me/https://api.forecast.io/forecast/'
  var instagramBasUrl = 'https://crossorigin.me/https://api.instagram.com/v1/'
  var container = document.querySelector('#container')
  var state = {
        accessToken: window.location.hash.split("=")[1],
        image:'',
	      weather:'sunny',
       latitude: '',
       longitude: '',
       apikey: '7d7126710ec5368cc1acc12af7b9b01c'
  }
 
 console.log(state.accessToken);


  if (/* TODO: did user authorize? */ !state.accessToken) {
    renderLogin(state, container)
  } else {
    // TODO: Make your fetch calls here
    // console.log("ready");
    fetch(instagramBasUrl + 'users/self/media/recent/?access_token=' + state.accessToken)
    .then(function(reply) {
      return reply.json();
    }).then(function(responseItselfJson) {
      console.log(responseItselfJson);

state.image = responseItselfJson.data[0].images.low_resolution.url
state.latitude = responseItselfJson.data[0].location.latitude
state.longitude = responseItselfJson.data[0].location.longitude

      fetch(forecastBasUrl + state.apikey + '/LATITUDE,LONGITUDE')
    
    

    // Test that url was fetched
    console.log("url fetched ok");
    

    renderImages(state, container)
    })
  }

  function renderLogin(data, into) {
    // TODO: Add the template
    
    into.innerHTML = `
    <h2>MOO What was the weather when you snapped your shot?</h2>
    
    <form action="https://api.instagram.com/oauth/authorize/?client_id=f51b97af106643a2b0034e17b36b632c&redirect_uri=http://localhost:3000&response_type=token" method="post">
    
    <button type="submit">Login to Instagram</button>
    
    </form>
    `
  }



  function renderImages(data, into) {
    // TODO: Add the template

    // <!-- The "authorized" state -->
    into.innerHTML = `
    <h2>MOO Hey, here's the weather during your shot!</h2>

    <div class="instaweather">
      <img src="${data.image}" />
      The weather was: ${data.weather}
    </div>
    `

  }
})()
