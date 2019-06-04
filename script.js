// Responsive Queries (Top)

function topNav() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// Responsive Queries (Bottom)

function botNav() {
  var x = document.getElementById("botNav");
  if (x.className === "botnav") {
    x.className += "responsive";
  } else {
    x.className = "botnav";
  }
}
