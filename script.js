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

  // Adjust the specific project title (.project-title--smaller) to be as large as possible
  // while staying on a single line. This measures the element and increases font-size
  // until it would overflow, then steps back one pixel. Runs on load and on resize.
  function fitProjectTitleToOneLine(){
    const el = document.querySelector('.project-title--smaller');
    if(!el) return;
    // Ensure it doesn't wrap
    el.style.whiteSpace = 'nowrap';
    el.style.display = 'block';

    const parentWidth = el.parentElement ? el.parentElement.clientWidth : el.clientWidth;
    // Start from current computed font-size + 1px
    const cs = window.getComputedStyle(el);
    const currentSize = parseFloat(cs.fontSize) || 16;
    let size = Math.max(currentSize + 1, 12);
    el.style.fontSize = size + 'px';

    // Increase until it overflows, but cap to prevent runaway sizing
    const CAP = 200; // px
    while(size < CAP){
      // If content width fits within parent, try increasing
      if(el.scrollWidth <= parentWidth){
        size += 1;
        el.style.fontSize = size + 'px';
        // If after increasing it now overflows, step back
        if(el.scrollWidth > parentWidth){
          size -= 1;
          el.style.fontSize = size + 'px';
          break;
        }
      } else {
        // If it already overflows at starting size, reduce until it fits
        size -= 1;
        if(size < 8) break;
        el.style.fontSize = size + 'px';
        if(el.scrollWidth <= parentWidth) break;
      }
    }
  }

  // Run on load and resize (debounced)
  fitProjectTitleToOneLine();
  let fitTimeout;
  window.addEventListener('resize', ()=>{
    clearTimeout(fitTimeout);
    fitTimeout = setTimeout(fitProjectTitleToOneLine, 120);
  });

  // Contact form was removed from the page; contact section now only displays direct contact information.
});
