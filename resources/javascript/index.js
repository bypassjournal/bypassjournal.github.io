

function syncHeaderSpacing() { 
  const topbar = document.querySelector('.top-bar'); 
  const filterwrap = document.querySelector('.filter-wrap'); 
  filterwrap.style.paddingTop = topbar.offsetHeight + 'px'; 
} 
window.addEventListener('load', syncHeaderSpacing); 
window.addEventListener('resize', syncHeaderSpacing); 