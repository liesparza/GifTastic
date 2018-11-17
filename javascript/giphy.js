
/* TO DO 

- Call the Api
- Creating from 6-7 variables with differents buttons to be created that call a different topic
- Function to create a button adding and to search for that topic
- Display all the gif (limited to 10) in a specif div
- Display all the rating a another column
- Stop and Animate gif from a clic 
- If a button clicked and if there are gif displayed then it will clear and only show 
what are called 

*/

var cartoons = ["Hey Arnold", "Daria", "Spongebob"];

 

// It ONLY CALLS REAL MONSTERS DOESN'T LET THE OTHER DATAS BE SEARCH
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


    //  $("#gif").text(JSON.stringify(response));

      for (var i = 0; i < results.length; i++) {

        var giphyDiv = $("<div>");
        
        var rating = results[i].rating;
        
        var p = $("<p>").text("Rating: " + rating);
        
        var giphyImage = $("<img>");
        giphyImage.attr("src", results[i].images.fixed_height.url);
        
      $("#rating").prepend(p);
        
        giphyDiv.append(giphyImage);
        
        $("#gif").append(giphyDiv); // before preppend
         }
        


    });

};


 // Function for display data buttons
 function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#giphy-buttons").empty();

    // Looping through the array of movies
    for (var i = 0; i < cartoons.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("gif");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", cartoons[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(cartoons[i]);
      // Adding the button to the HTML
      $("#giphy-buttons").append(a);
    }
 }

      // This function handles events where a movie button is clicked
      $("#add-giphy").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gifs = $("#giphy-input").val().trim();

        // Adding movie from the textbox to our array
        cartoons.push(gifs);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      $(document).on("click", ".gif", displayGiphy);


  renderButtons();





