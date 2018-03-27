$(document).ready(function() {
  $("button").click(function(event){
  event.preventDefault();
  var vowels = 'you can do it'.split("");
  // vowels.split("");
  alert(vowels);
  // debugger;
  for (var i = 0; i<vowels.length;i++) {
    if (vowels[i] === "a" || vowels[i]==="e" || vowels[i]==="i" || vowels[i]==="o" || vowels[i]==="u") {
       vowels.splice(i,1,"-");
       var word = vowels.join("");
    };
  };
    console.log(word);

  //   alert(vowels);
  });
});
// debugger;
// for (i=0;i<vowels.length; i++){
//   if (i === "a" || "e" || "i" || "o" || "u") {
//     vowels.splice(if (true) {
//
//     });
// }alert(vowels);
// };
