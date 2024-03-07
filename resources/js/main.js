/*-- Side Nav --*/
function openNav() {
  const sideBarWidth = document.getElementById("Sidenav").style.transform;

  if (sideBarWidth == "translateX(120px)") {
    document.getElementById("Sidenav").style.transform = "translateX(0)";
    document.getElementById("Sidebtn").style.transform = "rotate(0deg)";
  } else {
    document.getElementById("Sidenav").style.transform = "translateX(120px)";
    document.getElementById("Sidebtn").style.transform = "rotate(180deg)";
  }
}

/*-- Dropdown --*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "grid") {
      panel.style.display = "none";
    } else {
      panel.style.display = "grid";
    }
  });
}
