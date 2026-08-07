/* ============================================================
   RK RIAD 585 — interactions: reveal, typing, stats, filters
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Mobile nav ---------- */
  var burger = document.querySelector('.nav-burger');
  var navLinks = document.querySelector('.nav-links');
  if (burger) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll('section[id]');
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  var spy = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -45% 0px' }
  );
  sections.forEach(function (s) { spy.observe(s); });

  links.forEach(function (l) {
    l.addEventListener('click', function () {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });

  /* ---------- Skill bars animate when visible ---------- */
  var bars = document.querySelectorAll('.bar[data-w]');
  var barWatch = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var bar = e.target;
          bar.querySelector('i').style.width = bar.getAttribute('data-w') + '%';
          barWatch.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach(function (b) { barWatch.observe(b); });

  /* ---------- Count-up stats ---------- */
  var statNums = document.querySelectorAll('.stat .n [data-count]');
  var statWatch = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        statWatch.unobserve(e.target);
        var el = e.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var dur = 1400;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );
  statNums.forEach(function (n) { statWatch.observe(n); });

  /* ---------- Hero typing effect ---------- */
  var phrases = [
    'passionate and driven software developer',
    'ethical hacker · cybersecurity enthusiast',
    'open-source first · privacy focused',
    'building fast, native, beautiful tools'
  ];
  var typeEl = document.querySelector('[data-type]');
  if (typeEl) {
    var pi = 0, ci = 0, deleting = false;
    function type() {
      var word = phrases[pi];
      ci = deleting ? ci - 1 : ci + 1;
      typeEl.textContent = word.slice(0, ci);
      var delay = deleting ? 28 : 55;
      if (!deleting && ci === word.length) {
        delay = 1900;
        deleting = true;
      } else if (deleting && ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        delay = 500;
      }
      setTimeout(type, delay);
    }
    type();
  }

  /* ---------- Project filters ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      projectCards.forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-cat') === f;
        card.classList.toggle('hide', !show);
        if (show) card.classList.add('visible');
      });
    });
  });

  /* ---------- Year ---------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
