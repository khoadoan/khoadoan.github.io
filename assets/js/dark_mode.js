// Wires up the header switch. Theme state itself lives in theme.js, which has
// already run by this point (it is loaded in <head>).

$(document).ready(function () {
  const mode_toggle = document.getElementById("light-toggle");
  if (!mode_toggle) {
    return;
  }

  // theme.js set data-theme before the button existed; catch the switch up.
  syncThemeToggle(document.documentElement.getAttribute("data-theme"));

  mode_toggle.addEventListener("click", function () {
    toggleTheme();
  });
});
