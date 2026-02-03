const toggleTheme = document.getElementById('themeToggle');
const iconContainer = document.getElementById('themeIcon');

fetch('assets/icons/theme.svg')
  .then(res => {
    if (!res.ok) throw new Error('SVG not found');
    return res.text();
  })
  .then(svg => {
    iconContainer.innerHTML = svg;
  })
  .catch(err => {
    console.error(err);
  });
  
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});