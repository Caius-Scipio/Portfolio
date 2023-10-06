const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const colorThemes = document.querySelectorAll('[name="theme"]');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

// saves user selected theme to local storage
const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
};

// sets theme to revisiting user
const setTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });
    // fallback for no :has() support
    document.documentElement.className = activeTheme;
  };

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
    });
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
});

document.onload = setTheme();