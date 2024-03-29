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
var accordion = document.querySelectorAll(".accordion");
accordion.forEach(function (a, index) {
  a.onclick = () => {
    a.classList.toggle("accordion-active");
    accordion.forEach(function (p, i) {
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
$(".board-btn").click(function () {
  if (!$(this).hasClass("board-btn-active")) {
    $(".board-btn.board-btn-active").removeClass("board-btn-active");
    $(this).addClass("board-btn-active");
  }
});

$(".board-btn").click(function () {
  if ($(this).hasClass("board-btn-active")) {
    $(".board-content ul.board-content-active").removeClass(
      "board-content-active"
    );
    if ($(this).hasClass("news")) {
      $(".news-list").addClass("board-content-active");
    } else if ($(this).hasClass("events")) {
      $(".events-list").addClass("board-content-active");
    } else if ($(this).hasClass("features")) {
      $(".features-list").addClass("board-content-active");
    } else {
      $(".guides-list").addClass("board-content-active");
    }
  }
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

/*-- Dropdown-Responsive --*/
/*-- Dropdown-Responsive --*/
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownCaret = document.querySelector(".arrow");
const dropdownContent = document.querySelector(".dropdown-content");

// add click event to dropdown button
if (dropdownBtn) {
  dropdownBtn.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent.classList.toggle("menu-open");
  });
}
