const themeScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("site-theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  } catch (error) {
    document.documentElement.removeAttribute("data-theme");
  }
}());
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
