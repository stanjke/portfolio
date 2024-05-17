export const defineTheme = () =>
  localStorage.getItem("theme") === null
    ? "light"
    : localStorage.getItem("theme") === "light"
      ? "light"
      : "dark";
