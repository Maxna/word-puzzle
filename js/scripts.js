$(document).ready(function() {
  $("#question").click(function(event){
  event.preventDefault();
  $("#help").click(function(){
    $("p#answer").toggle();
    $("#help").html("Click to hide answer.");
    
  })
  var string = 'You can do it!';
  var vowels = 'You can do it!'.split("");

  for (var i = 0; i<vowels.length;i++) {
    if (vowels[i] === "a" || vowels[i]==="e" || vowels[i]==="i" || vowels[i]==="o" || vowels[i]==="u") {
       vowels.splice(i,1,"-");
       var word = vowels.join("");
       var newWord = word;
    };
  };
  $("p#puzzle").text(word);
  $("p#answer").text(string);
  });
});
