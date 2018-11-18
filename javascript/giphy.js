
/* TO DO 

- Function to create a button adding and to search for that topic ( doesn't define the other's value)
- Stop and Animate gif from a click 
- If a button clicked and if there are gif displayed then it will clear and only show 
what are called 

*/

var cartoons = ["Hey Arnold", "Daria", "Spongebob"];

 

// It ONLY CALLS the first one DOESN'T LET THE OTHER DATAS BE SEARCH
//$("button").on("click",
   function displayGiphy() {
  
    var gif = $(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    cartoons + "&api_key=lvXhJs5YhXegPJAXaiQL17UgecJxBEgA&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        console.log(response);
        var results= response.data;



      for (var i = 0; i < results.length; i++) {

        var giphyDiv = $("<div>");
        
        var rating = results[i].rating;
        
        var p = $("<p>").text("Rating: " + rating);
        
        var giphyImage = $("<img>");
        giphyImage.attr("src", results[i].images.fixed_height.url);
        
      $("#rating").prepend(p);
        
        giphyDiv.append(giphyImage);
        
        $("#gifs-view").append(giphyDiv); // before preppend
         }
        


    });

};


 // Function for display data buttons
 function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    $("#giphy-buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < cartoons.length; i++) {

      var a = $("<button>");
      // Adding a class
      a.addClass("gif");
      a.attr("data-name", cartoons[i]);
      a.text(cartoons[i]);
      // Adding the button to the HTML
      $("#giphy-buttons").append(a);
    }
 }

      $("#add-giphy").on("click", function(event) {
        event.preventDefault();
        var gifs = $("#giphy-input").val().trim();

        cartoons.push(gifs);

        renderButtons();
      });

      $(document).on("click", ".gif", displayGiphy);


  renderButtons();





