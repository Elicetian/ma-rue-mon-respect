/* Graphiques et compteurs. Tout le texte est en HTML (pas de texte SVG : rendu flou sur fond sombre). */
(function () {
  'use strict';

  function fmt(value, unit) {
    var s = (Math.round(value * 10) / 10).toString().replace('.', ',');
    return unit === '%' ? s + ' %' : s + (unit ? ' ' + unit : '');
  }

  var observer = ('IntersectionObserver' in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          observer.unobserve(el);
          if (el.__onReveal) el.__onReveal();
          el.classList.add('in');
        });
      }, { threshold: 0.25 })
    : null;

  function onReveal(el, fn) {
    el.__onReveal = fn;
    if (observer) observer.observe(el); else { fn(); el.classList.add('in'); }
  }

  /* Graphique en barres horizontales.
     series = { title, unit, items: [{ label, value }], source: { org, name, year, url } } */
  function bars(el, series, opts) {
    opts = opts || {};
    var max = opts.max || Math.max.apply(null, series.items.map(function (i) { return i.value; }));
    if (series.unit === '%') max = Math.max(max, 100);
    el.classList.add('chart');
    var html = '';
    if (series.title) html += '<div class="chart-title">' + esc(series.title) + '</div>';
    series.items.forEach(function (it, i) {
      html += '<div class="row' + (it.alt ? ' alt' : '') + '" role="img" aria-label="' + esc(it.label) + ' : ' + esc(fmt(it.value, series.unit)) + '">'
        + '<div class="lbl">' + esc(it.label) + '</div>'
        + '<div class="track"><div class="bar" data-w="' + (100 * it.value / max).toFixed(1) + '"></div></div>'
        + '<div class="val">' + esc(fmt(it.value, series.unit)) + '</div></div>';
    });
    if (series.source && !opts.noSource) html += '<div class="source">' + sourceHtml(series.source) + '</div>';
    el.innerHTML = html;
    onReveal(el, function () {
      el.querySelectorAll('.bar').forEach(function (b, i) {
        setTimeout(function () { b.style.width = b.getAttribute('data-w') + '%'; }, i * 90);
      });
    });
  }

  /* Compteur animé : el reçoit le texte final (ex. « 86 % »). */
  function counter(el, value, unit, duration) {
    duration = duration || 1400;
    el.textContent = fmt(0, unit);
    onReveal(el, function () {
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / duration);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(value * eased, unit);
        if (p < 1) requestAnimationFrame(step); else el.textContent = fmt(value, unit);
      }
      requestAnimationFrame(step);
      /* Sécurité : si l'animation est interrompue (onglet en arrière-plan), afficher la valeur finale. */
      setTimeout(function () { el.textContent = fmt(value, unit); }, duration + 200);
    });
  }

  function sourceHtml(src) {
    if (!src) return '';
    var txt = esc([src.org, src.name, src.year].filter(Boolean).join(', '));
    return 'Source : ' + (src.url ? '<a href="' + esc(src.url) + '" target="_blank" rel="noopener">' + txt + '</a>' : txt);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* Révèle tous les .reveal de la page */
  function revealAll() {
    document.querySelectorAll('.reveal').forEach(function (el) { onReveal(el, function () {}); });
  }

  window.Charts = { bars: bars, counter: counter, fmt: fmt, esc: esc, sourceHtml: sourceHtml, onReveal: onReveal, revealAll: revealAll };
})();
