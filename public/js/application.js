$(document).ready(function() {
  var name = $(location).attr('href').replace('http://localhost:9393/', '');
  $.ajax({
    url: "refresh_cache",
    type: "POST",
    data: {username: name},
    dataType: "html",
    success: function(result){
      $("#loading").hide();
      $("#recent").append(result);
    }
  });
});
