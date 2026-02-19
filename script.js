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

  // Ensure the fixed header height is exposed as a CSS variable so anchors and padding work correctly
  function updateHeaderHeight(){
    const header = document.querySelector('.site-header');
    if(!header) return;
    const h = header.offsetHeight || 68;
    document.documentElement.style.setProperty('--header-height', h + 'px');
  }
  // Run on load and when resizing
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);

  // Header will remain fixed and visible; no hide-on-scroll behavior.
  // Update header height variable if nav toggle is used (mobile)
  const navToggleBtn = document.querySelector('.nav-toggle');
  if(navToggleBtn){
    navToggleBtn.addEventListener('click', ()=>{
      const header = document.querySelector('.site-header');
      if(!header) return;
      const h = header.offsetHeight || 68;
      document.documentElement.style.setProperty('--header-height', h + 'px');
    });
  }

  // Contact form was removed from the page; contact section now only displays direct contact information.
});
