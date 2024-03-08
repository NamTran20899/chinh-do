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
var acc = document.querySelectorAll(".accordion");
acc.forEach(function (a, index) {
  a.onclick = () => {
    a.classList.toggle("accordion-active");
    acc.forEach(function (p, i) {
      var panel = p.nextElementSibling;
      if (index === i) {
        if (panel.style.display === "grid") {
          panel.style.display = "none";
        } else {
          panel.style.display = "grid";
        }
      } else {
        a.classList.remove("accordion-active");
        var panel2 = p.nextElementSibling;
        panel2.style.display = "none";
      }
    });
  };
});

/*-- Board-Button --*/
var btn = document.querySelectorAll(".board-btn");

btn.forEach(function (b, index) {
  b.onclick = () => {
    b.classList.toggle("board-btn-active");
    btn.forEach(function (s, i) {});
  };
});

/*-- Hamburger --*/
function hamburgerBtn() {
  const menuWidth = document.getElementById("hamburger").style.display;

  if (menuWidth == "block") {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("hamburger").style.transform = "translateX(100%)";
  } else {
    document.getElementById("hamburger").style.display = "block";
    document.getElementById("hamburger").style.transform = "translateX(0%)";
  }
}
