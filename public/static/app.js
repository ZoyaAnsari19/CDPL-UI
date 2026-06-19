/* ============================================================
   CINEMATIC DREAM — Motion & Interaction Engine
   (progressive enhancement: page renders fully without JS)
   ============================================================ */
(function () {
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. ANCHOR JUMPS (native scroll) ---------- */
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        closeMobile();
        el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      });
    });
  }

  /* ---------- 2. SCROLL ENGINE (single RAF — header + perf class) ---------- */
  var scrollTicking = false;
  var scrollEndTimer = null;

  function onScrollFrame() {
    var header = document.getElementById('header');
    if (header) {
      if (window.scrollY > 30) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }
    document.body.classList.add('is-scrolling');
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(function () {
      document.body.classList.remove('is-scrolling');
    }, 140);
    scrollTicking = false;
  }

  function requestScrollFrame() {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(onScrollFrame);
    }
  }

  function initScroll() {
    window.addEventListener('scroll', requestScrollFrame, { passive: true });
    onScrollFrame();
  }

  /* ---------- 3. HEADER CLOCK ---------- */
  function initHeader() {

    // Clock: update once per MINUTE (no per-second DOM writes that paint during scroll).
    var clock = document.getElementById('clock');
    function tick() {
      if (!clock) return;
      var d = new Date();
      var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
      var hh = String(d.getHours()).padStart(2,'0');
      var mm = String(d.getMinutes()).padStart(2,'0');
      clock.textContent = days[d.getDay()] + ' · ' + hh + ':' + mm + ' IST';
    }
    tick();
    // align the first update to the next minute boundary, then every 60s
    var msToNextMin = (60 - new Date().getSeconds()) * 1000;
    setTimeout(function(){ tick(); setInterval(tick, 60000); }, msToNextMin);
  }

  /* ---------- 4. MOBILE MENU ---------- */
  function openMobile() {
    var m = document.getElementById('mobileMenu');
    var b = document.getElementById('burger');
    if (m) {
      m.classList.add('open');
      m.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    }
    if (b) b.setAttribute('aria-expanded', 'true');
  }
  function closeMobile() {
    var m = document.getElementById('mobileMenu');
    var b = document.getElementById('burger');
    if (m) {
      m.classList.remove('open');
      m.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    }
    if (b) b.setAttribute('aria-expanded', 'false');
  }
  function initMobile() {
    var b = document.getElementById('burger');
    var c = document.getElementById('mobileClose');
    var m = document.getElementById('mobileMenu');
    if (b) b.addEventListener('click', openMobile);
    if (c) c.addEventListener('click', closeMobile);
    if (m) {
      m.addEventListener('click', function (e) {
        if (e.target === m) closeMobile();
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobile();
    });
  }

  /* ---------- 5. REVEAL ON SCROLL (stagger) ---------- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function(e){e.classList.add('in');}); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var delay = en.target.getAttribute('data-delay') || 0;
          setTimeout(function(){ en.target.classList.add('in'); }, delay * 1);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 4% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- 6. COUNTER COUNT-UP (Indian number format) ---------- */
  function formatIndian(n, decimals) {
    if (decimals > 0) {
      var fixed = n.toFixed(decimals);
      var parts = fixed.split('.');
      return addCommas(parts[0]) + '.' + parts[1];
    }
    return addCommas(String(Math.round(n)));
  }
  function addCommas(x) {
    x = String(x);
    var last3 = x.length > 3 ? x.slice(-3) : x;
    var rest = x.length > 3 ? x.slice(0, -3) : '';
    if (rest !== '') last3 = ',' + last3;
    rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return rest + last3;
  }
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var dur = 1700, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + formatIndian(target * eased, decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + formatIndian(target, decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) { els.forEach(animateCount); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- 7. WIZARD ENGINE ---------- */
  function initWizard() {
    var wiz = document.getElementById('wizard');
    if (!wiz) return;
    var steps = wiz.querySelectorAll('.wiz-step');
    var dots = wiz.querySelectorAll('.dot');
    var total = steps.length;
    var current = 0;
    var data = { categories: [] };

    function render() {
      steps.forEach(function (s, i) { s.classList.toggle('active', i === current); });
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === current);
        d.classList.toggle('done', i < current);
      });
      var media = document.getElementById('wizStepLabel');
      if (media) media.textContent = 'Step ' + (current + 1) + ' / ' + total;
    }

    function go(dir) {
      if (dir > 0 && !validate(current)) return;
      var next = current + dir;
      if (next < 0 || next >= total) return;
      current = next;
      render();
    }

    function validate(i) {
      var step = steps[i];
      var required = step.querySelectorAll('[data-required]');
      var ok = true;
      required.forEach(function (f) {
        var valid = true;
        if (f.type === 'checkbox') valid = f.checked;
        else valid = f.value && f.value.trim() !== '';
        if (f.classList.contains('cat-required')) valid = data.categories.length > 0;
        f.closest('.field, .check, .field-cats')?.classList.toggle('invalid', !valid);
        if (f.style) f.style.borderColor = valid ? '' : 'var(--crimson)';
        if (!valid) ok = false;
      });
      if (!ok) {
        var firstBad = step.querySelector('[style*="crimson"], .invalid');
        if (firstBad && firstBad.scrollIntoView) firstBad.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return ok;
    }

    /* nav buttons */
    wiz.querySelectorAll('[data-wiz="next"]').forEach(function (b) { b.addEventListener('click', function(){ go(1); }); });
    wiz.querySelectorAll('[data-wiz="back"]').forEach(function (b) { b.addEventListener('click', function(){ go(-1); }); });

    /* category chips (multi-select) */
    wiz.querySelectorAll('.chip-sel').forEach(function (chip) {
      chip.addEventListener('click', function () {
        chip.classList.toggle('on');
        var v = chip.getAttribute('data-val');
        var idx = data.categories.indexOf(v);
        if (idx >= 0) data.categories.splice(idx, 1); else data.categories.push(v);
      });
    });

    /* example city chips fill input */
    wiz.querySelectorAll('.ex-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var inp = document.getElementById('f_city');
        if (inp) inp.value = chip.textContent.trim();
      });
    });

    /* minor guardian reveal based on DOB */
    var dob = document.getElementById('f_dob');
    var guardian = document.getElementById('guardianBlock');
    function checkAge() {
      if (!dob || !guardian) return;
      if (!dob.value) { guardian.classList.remove('show'); return; }
      var b = new Date(dob.value);
      var age = (Date.now() - b.getTime()) / (365.25 * 24 * 3600 * 1000);
      guardian.classList.toggle('show', age < 18 && age > 0);
    }
    if (dob) dob.addEventListener('change', checkAge);

    /* audio assist (graceful — uses speechSynthesis if available) */
    wiz.querySelectorAll('.audio-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var txt = b.getAttribute('data-say') || '';
        if ('speechSynthesis' in window && txt) {
          window.speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(txt);
          u.rate = 0.95;
          window.speechSynthesis.speak(u);
        }
      });
    });

    /* submit */
    var submitBtn = wiz.querySelector('[data-wiz="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', function () {
        if (!validate(current)) return;
        /* gather data */
        wiz.querySelectorAll('input, select, textarea').forEach(function (f) {
          if (!f.name) return;
          if (f.type === 'checkbox') data[f.name] = f.checked;
          else data[f.name] = f.value;
        });
        var ref = 'CD-' + new Date().getFullYear() + '-' +
          Math.random().toString(36).substring(2, 7).toUpperCase();
        data.referenceId = ref;
        data.submittedAt = new Date().toISOString();
        console.log('CINEMATIC DREAM — Application submitted:', data);
        var refEl = document.getElementById('refId');
        if (refEl) refEl.textContent = ref;
        current = total - 1;
        render();
      });
    }

    /* copy ref id */
    var copyBtn = document.getElementById('copyRef');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var ref = document.getElementById('refId');
        if (ref && navigator.clipboard) {
          navigator.clipboard.writeText(ref.textContent.trim()).then(function () {
            copyBtn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(function(){ copyBtn.innerHTML = '<i class="far fa-copy"></i>'; }, 1500);
          });
        }
      });
    }

    render();
  }

  /* ---------- INIT ---------- */
  function init() {
    initAnchors();
    initScroll();
    initHeader();
    initMobile();
    initReveal();
    initCounters();
    initWizard();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
