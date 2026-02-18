// script.js
// Interactivity: nav toggle, reveal on scroll, smooth scrolling, contact form mailto

document.addEventListener('DOMContentLoaded', function(){
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      nav && nav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target){
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    })
  })

  // Reveal on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    })
  },{root:null,threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Contact form: build mailto link to open email client (static-friendly)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = encodeURIComponent(form.name.value.trim());
      const email = encodeURIComponent(form.email.value.trim());
      const message = encodeURIComponent(form.message.value.trim());
  const subject = encodeURIComponent('Contact from portfolio — ' + (name||'Interested'));
  const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}%0D%0AEmail: ${decodeURIComponent(email)}%0D%0A%0D%0A${decodeURIComponent(message)}`);
      // Open default mail client
      window.location.href = `mailto:adolfoyunes1@gmail.com?subject=${subject}&body=${body}`;
    })
  }
});
