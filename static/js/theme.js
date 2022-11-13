// When the page loads, do this.
window.addEventListener("load", (event) => {

  // Get the theme from local storage, then apply it.
  const theme = getTheme();
  applyTheme(theme);

}); 

// Apply the theme by changing icon, activating button, changing document class.
// Still need to save to local storage explicitly.
function applyTheme(color) {
  console.log(`Applying theme "${color}".`);
  setIcon(color);

  const button = getColorButton(color);
  activateButton(button);
  document.documentElement.className = color;
}

// Called when you actually click the button.
function handleThemeButtonClick(color, element) {
  element.blur();  // Remove focus from the button that was just clicked.

  saveThemeToLocalStorage(color);  // Save it to local storage.

  applyTheme(color);
}

/* Bunch of little functions below */

// Get the theme from local storage, return "white" if not present.
function getTheme() {
  return localStorage.getItem("theme") || "white";
}

// Get the button element that corresponds with a given color.
function getColorButton(color) {
  return document.getElementById(color);
}

// Make sure none of the buttons have .btn-border.
function deactivateAllButtons() {
  const buttons = Array.from(document.querySelectorAll(".theme-button"));

  for (let button of buttons) {
    button.classList.remove("btn-border");
  }
}

// Apply .btn-border to a specific button.
function activateButton(button) {
  deactivateAllButtons();
  button.classList.add("btn-border");
}

// Save the selected theme to local storage.
function saveThemeToLocalStorage(color) {
  localStorage.setItem("theme", color);
}

// Change the icon to the selected color.
function setIcon(color) {
  const icon = document.getElementById("navbarIcon");
  const iconColor = mapThemeToIconColor(color);
  icon.src = `/icons/${iconColor}-c.png`;
}

// Given the theme color, return the logo color.
function mapThemeToIconColor(themeColor) {
  switch(themeColor) {
    case "blue":
      return "green";
    case "green":
      return "blue";
    case "pink":
      return "yellow";
    case "yellow":
      return "red";
    case "red":
      return "yellow";
    default:
      return "red";  // default
  }
}