document.addEventListener('DOMContentLoaded', function() {
  // Service descriptions data (concise, two‑line friendly)
  const descriptions = {
    ai: `Machine learning for policy, fraud detection, and citizen service automation. Multilingual NLP for regional administration.`,
    cyber: `Government network hardening, national red teaming, and cross‑agency SOCs for real‑time threat intelligence.`,
    military: `Battlefield AI, tactical encryption, unmanned systems C2, and precision data analytics for defence.`,
    embedded: `Secure ID terminals, IoT infrastructure monitoring, and Hardware Security Modules (HSM).`,
    cloud: `Government private cloud with strict data residency, DevSecGovOps, and sovereignty controls.`,
    data: `Census analytics, real‑time governance dashboards, and privacy‑preserving ML for policy insights.`
  };

  const titles = document.querySelectorAll('.service-title');
  const descContainer = document.getElementById('service-description');

  // Function to set active title and update description with slide animation
  function setActiveService(serviceKey, clickedElement) {
    // Remove active class from all titles
    titles.forEach(t => t.classList.remove('active'));
    // Add active class to clicked title
    clickedElement.classList.add('active');
    // Update description – wrap in a div to allow slide animation
    descContainer.innerHTML = `<div class="desc-content">${descriptions[serviceKey]}</div>`;
  }

  // Add click handlers to each title
  titles.forEach(title => {
    title.addEventListener('click', function(e) {
      const service = this.dataset.service;
      setActiveService(service, this);
    });
  });

  // Set default active (first service)
  if (titles.length > 0) {
    setActiveService(titles[0].dataset.service, titles[0]);
  }

  // Co-founder expand/collapse
  const henokCard = document.getElementById('founder-henok');
  const yosefCard = document.getElementById('founder-yosef');
  const henokFull = henokCard.querySelector('.founder-full');
  const yosefFull = yosefCard.querySelector('.founder-full');

  function resetFounders() {
    henokCard.classList.remove('expanded');
    yosefCard.classList.remove('expanded');
    henokFull.style.display = 'none';
    yosefFull.style.display = 'none';
    henokCard.querySelector('.founder-bio-short').style.display = 'block';
    yosefCard.querySelector('.founder-bio-short').style.display = 'block';
    henokCard.style.display = 'block';
    yosefCard.style.display = 'block';
  }

  henokCard.addEventListener('click', function(e) {
    e.stopPropagation();
    if (henokCard.classList.contains('expanded')) {
      resetFounders();
    } else {
      resetFounders();
      henokCard.classList.add('expanded');
      henokFull.style.display = 'block';
      henokCard.querySelector('.founder-bio-short').style.display = 'none';
      yosefCard.style.display = 'none';
    }
  });

  yosefCard.addEventListener('click', function(e) {
    e.stopPropagation();
    if (yosefCard.classList.contains('expanded')) {
      resetFounders();
    } else {
      resetFounders();
      yosefCard.classList.add('expanded');
      yosefFull.style.display = 'block';
      yosefCard.querySelector('.founder-bio-short').style.display = 'none';
      henokCard.style.display = 'none';
    }
  });
});
