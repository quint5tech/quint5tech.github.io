// Responsive Queries (Top)

function topNavbar() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += "top-responsive";
  } else {
    x.className = "topnav";
  }
}

// Responsive Queries (Bottom)

function botNavbar() {
  var x = document.getElementById("botNav");
  if (x.className === "botnav") {
    x.className += "bottom-responsive";
  } else {
    x.className = "botnav";
  }
}

// Google Analytics

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141685685-1');
