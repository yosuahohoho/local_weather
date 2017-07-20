
$(document).ready(function() {
  
  var place ="tangerang";
  
  $.ajax({
    url: "https://api.wunderground.com/api/318ea6be16974b4b/conditions/q/ID/" + place + ".json",
    type: "GET",
    datatype: "json",
    success: function(data) {
      $("#city").html(data["current_observation"]["display_location"]["full"]);
      
      $("#icon").attr("src", data["current_observation"]["icon_url"]
      );
      
      $("#description").html(data["current_observation"]["weather"]
      );
      
      $("#temperature").html(
     data["current_observation"]["temp_c"] + "&#8451");
    }
     
  })
})