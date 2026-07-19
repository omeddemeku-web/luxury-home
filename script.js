const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // የጨለማ ምልክትን መቀየር
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = '☀️';
  } else {
    themeBtn.textContent = '🌙';
  }
});
