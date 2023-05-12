function displayMenu() {
  var nav= document.getElementById("main-nav");
 
  if (nav.className === "mainNav") {
    nav.className += " responsive";
    
  } else {
    nav.className = "mainNav";
  }
}
