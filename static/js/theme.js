// When the page loads, do this.
document.addEventListener("DOMContentLoaded", () => {

  // Get the theme from local storage, then apply it.
  const theme = getTheme();
  applyTheme(theme);
  setStamp(theme);

});

// Apply the theme by changing icon, activating button, changing document class.
// Still need to save to local storage explicitly.
function applyTheme(color) {
  console.log(`Applying theme "${color}".`);
  setIcon(color);

  const button = getColorButton(color);

  if (button) {
    activateButton(button);
  } else {
    // If the button corresponding to the color is not found,
    // set a default button as active (for the initial load).
    const defaultButton = document.getElementById("white"); // Change "white" to your default theme color ID
    activateButton(defaultButton);
  }

  document.documentElement.className = color;
}

function setStamp(color) {
  const stamp = document.getElementById("stamp-img");
  const stampColor = mapThemeToIconColor(color);
  if (stamp) {
    stamp.src = `/icons/stamps/${stampColor}-c.png`;
  } else {
    console.log("Stamp element not found on this page.");
  }
}

// Called when you actually click the button.
function handleThemeButtonClick(color, element) {
  element.blur();  // Remove focus from the button that was just clicked.

  saveThemeToLocalStorage(color);  // Save it to local storage.

  applyTheme(color);
  setStamp(color);
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
  icon.src = `/icons/${iconColor}-c.svg`;
   // Update favicon based on the theme color
   updateFavicon(iconColor);
}

// Function to update favicon based on the theme color
function updateFavicon(iconColor) {
  const favicon = document.querySelector('link[rel="icon"]');

  // Set the new favicon path based on the theme color
  favicon.href = `/icons/${iconColor}-c.svg`;
}

// Given the theme color, return the logo color.
function mapThemeToIconColor(themeColor) {
  switch (themeColor) {
    case "blue":
      return "yellow";
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