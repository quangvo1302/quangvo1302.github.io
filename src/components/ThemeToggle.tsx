"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "site-theme";

function currentTheme(): Theme {
  const explicitTheme = document.documentElement.getAttribute("data-theme");
  if (explicitTheme === "light" || explicitTheme === "dark") {
    return explicitTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(storageKey, theme);
  } catch {
    return;
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  function toggleTheme() {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      data-theme-toggle
      aria-label={
        isDark
          ? "Giao diện tối đang bật. Chuyển sang giao diện sáng"
          : "Giao diện sáng đang bật. Chuyển sang giao diện tối"
      }
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" data-theme-toggle-icon aria-hidden="true">
        {isDark ? "☾" : "☀"}
      </span>
      <span className="theme-toggle-label" data-theme-toggle-label>
        {isDark ? "Tối" : "Sáng"}
      </span>
    </button>
  );
}
