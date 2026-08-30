// Light/dark theming.
//
// This file is loaded in <head>, before any markup renders, so the stored theme
// is applied to <html> before first paint and the page never flashes light.

const THEME_STORAGE_KEY = "theme";

// What visitors see before they touch the switch. Set to "dark" to flip it.
const DEFAULT_THEME = "light";

// localStorage throws in Safari's private mode, so every access is guarded.
let readStoredTheme = () => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch (e) {
    return null;
  }
};

let storeTheme = (theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    // Preference just won't persist; the page still themes correctly.
  }
};

// The switch is not in the DOM yet when this runs in <head>, hence the guard.
let syncThemeToggle = (theme) => {
  const toggle = document.getElementById("light-toggle");
  if (toggle) {
    toggle.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
  }
};

let setTheme = (theme, persist = true) => {
  transTheme();
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) {
    storeTheme(theme);
  }
  syncThemeToggle(theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background:
        getComputedStyle(document.documentElement).getPropertyValue(
          "--global-bg-color"
        ) + "ee", // + 'ee' for transparency.
    });
  }
};

let toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
};

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 500);
};

let initTheme = () => {
  // Light is the default: the OS preference is deliberately ignored, so a
  // first-time visitor always lands on the light theme. Only an explicit
  // choice made with the header switch moves the site to dark.
  const theme = readStoredTheme() || DEFAULT_THEME;
  // Set directly rather than through setTheme(): no transition on first paint.
  document.documentElement.setAttribute("data-theme", theme);
};

initTheme();
