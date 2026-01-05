document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggle-details');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.closest('.project-card').querySelector('.project-details');

      const isExpanded = details.classList.toggle('expanded');

      button.setAttribute('aria-expanded', isExpanded);
      button.textContent = isExpanded ? 'Hide Details' : 'View Details';
    });
  });
});

