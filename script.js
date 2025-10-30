// Basic interactivity: mobile nav toggle, smooth scroll, simple form handling
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const yearSpan = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');
  const mailtoBtn = document.getElementById('mailtoBtn');
  const formNote = document.getElementById('formNote');

  yearSpan.textContent = new Date().getFullYear();

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });

  // Very simple form validation and "send" simulation
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = '';
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill all fields before sending.';
      return;
    }
    // Simulate sending (replace with real backend or service like Formspree)
    formNote.textContent = 'Message sent! (This is a demo — integrate with Formspree or email backend to receive messages.)';
    contactForm.reset();
  });

  // Mailto fallback
  mailtoBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:patilshraddha141@gmail.com?subject=${subject}&body=${body}`;
  });

});
