// coloration.js
const settings = JSON.parse(localStorage.getItem("settings"));
if (settings) {
  const colorScheme =
    settings.appearance.colorScheme === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : settings.appearance.colorScheme;

  document.documentElement.style.backgroundColor =
    settings.appearance.themes[settings.appearance.activeTheme][
      colorScheme
    ].background;
  document.documentElement.style.color =
    settings.appearance.themes[settings.appearance.activeTheme][
      colorScheme
    ].textColor;
} else {
  document.documentElement.style.backgroundColor = "#000000";
  document.documentElement.style.color = "#FFFFFF";
}
