// Theme toggle
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    if (body.classList.contains('light-theme')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });

  // Modal functionality for all clickable items (services + tech)
  const cards = document.querySelectorAll('.clickable');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-modal');

  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      const modalId = this.dataset.modal;
      if (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('show');
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      this.closest('.modal').classList.remove('show');
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  });

  // Eye tracking for the big golden eye
  const eye = document.getElementById('tracking-eye');
  const pupil = document.getElementById('pupil');
  if (eye && pupil) {
    const maxMove = 45;

    function movePupil(e) {
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let deltaX = e.clientX - centerX;
      let deltaY = e.clientY - centerY;

      const dist = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
      if (dist > maxMove) {
        deltaX = (deltaX / dist) * maxMove;
        deltaY = (deltaY / dist) * maxMove;
      }

      pupil.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    window.addEventListener('mousemove', movePupil);
  }

  // Co-founder toggle expand/collapse
  const henokCard = document.getElementById('founder-henok');
  const yosefCard = document.getElementById('founder-yosef');
  const founderGrid = document.getElementById('cofounders-grid');

  // Store original short bio and full content
  const henokFull = henokCard.querySelector('.founder-full');
  const yosefFull = yosefCard.querySelector('.founder-full');

  function resetFounders() {
    henokCard.classList.remove('expanded');
    yosefCard.classList.remove('expanded');
    henokFull.style.display = 'none';
    yosefFull.style.display = 'none';
    henokCard.style.display = 'block';
    yosefCard.style.display = 'block';
    // restore short bio visibility
    henokCard.querySelector('.founder-bio-short').style.display = 'block';
    yosefCard.querySelector('.founder-bio-short').style.display = 'block';
  }

  henokCard.addEventListener('click', function(e) {
    e.stopPropagation();
    if (henokCard.classList.contains('expanded')) {
      // collapse
      resetFounders();
    } else {
      // expand henok, hide yosef
      resetFounders(); // first reset
      henokCard.classList.add('expanded');
      henokFull.style.display = 'block';
      henokCard.querySelector('.founder-bio-short').style.display = 'none';
      yosefCard.style.display = 'none';
    }
  });

  yosefCard.addEventListener('click', function(e) {
    e.stopPropagation();
    if (yosefCard.classList.contains('expanded')) {
      // collapse
      resetFounders();
    } else {
      // expand yosef, hide henok
      resetFounders();
      yosefCard.classList.add('expanded');
      yosefFull.style.display = 'block';
      yosefCard.querySelector('.founder-bio-short').style.display = 'none';
      henokCard.style.display = 'none';
    }
  });
});
