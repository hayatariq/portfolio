document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-details');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('.project-card').querySelector('.project-details');
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
  });
});
