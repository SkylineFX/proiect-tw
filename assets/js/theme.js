let themeButtons = document.getElementsByClassName('theme');

let theme = 'light';
if (localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme');
}
theme === 'dark' ? enableDarkMode() : enableLightMode();

Array.from(themeButtons).forEach(element => {
  element.addEventListener('click', (e) => {
    if (e.target.classList.contains('light')) {
      enableLightMode()
    }
    else if (e.target.classList.contains('dark')) {
      enableDarkMode()
    }
  })
});

function enableDarkMode() {
  document.body.setAttribute('data-theme', 'dark');
  localStorage.setItem('theme', 'dark');
  themeButtons[1].style.display = 'none';
  themeButtons[0].style.display = 'block';
}

function enableLightMode() {
  document.body.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
  themeButtons[0].style.display = 'none';
  themeButtons[1].style.display = 'block';
}
