const menuIcon = document.getElementById("menu-icon");
const navegation= document.querySelector(".navegation")
const logo = document.getElementById("corporate-logo");
const iconNav= document.querySelector(".header-icon");
const iconClose = document.getElementById("navegation-close");

function showList(){
  navegation.classList.toggle("menu-active");
  logo.classList.toggle("hidden");
  iconNav.classList.toggle("hidden");


}
menuIcon.addEventListener("click", showList);
iconClose.addEventListener("click", showList);