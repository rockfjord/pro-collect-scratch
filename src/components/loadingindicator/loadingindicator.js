function loadingindicator() {
  var fadeTarget = document.getElementById("preloader");

  function fadeOutEffect() {
    var fadeEffect = setInterval(function () {
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
        fadeTarget.style.display = "none";
      }
    }, 100);
  }

  window.onload = setTimeout(fadeOutEffect, 1000);
}

export default loadingindicator;
