// IIFE to encapsulate the entire script
(function() {
  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name and convert to lower case
    var firstLetter = names[i].charAt(0).toLowerCase();
    
    // Compare the first letter to 'j'
    if (firstLetter === 'j') {
      // Call byeSpeaker's speak method
      byeSpeaker.speak(names[i]);
    } else {
      // Call helloSpeaker's speak method
      helloSpeaker.speak(names[i]);
    }
  }
})();
