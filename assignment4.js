// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types
//

(function() {

  $('.flexsearch-input').keyup(function(e) {
    var searchText = $('.flexsearch-input').val();
    $('.results').html("")
    $('.results').css("border-color", "white");
    getJSON(searchText);
  });

  function getJSON(text) {
    $.ajax({
      url:"http://www.mattbowytz.com/simple_api.json?data=interests",
      type: "GET",
      dataType: "json"
    })
    .done(function(info) {
      text = text.toLowerCase()
      var googleSearchBase = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=";
      info.data.forEach(function(e) {
        e = e.toLowerCase();
        if(e.startsWith(text) && text.length > 0) {
          $('.results').append('<a target="_blank" href=' + googleSearchBase + e.replace(' ', '%20') + '>' + e + '</a><br>');
          $('.results').css("border-color", "purple");
        }
      });
    });
  }
})();
