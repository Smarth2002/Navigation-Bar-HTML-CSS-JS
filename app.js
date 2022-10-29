// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
  
const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".links");

//by default height of drop down menu is 0 to hide it 

//toggle show-links class (which sets height of links menu to make it visible) in list (ul)
// with links class on clicking toggle button
navToggle.addEventListener("click", function (){
    
    links.classList.toggle("show-links");
})