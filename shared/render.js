/* Rendu des sections communes (chiffres, agir, loi, contacts, sources) depuis shared/data.js.
   Chaque version du site garde son HTML et son ton ; ici seulement le contenu factuel. */
(function () {
  'use strict';
  var esc = Charts.esc, D = window.MRMR;

  function el(html) { var t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

  /* Gros chiffres : liste d'ids de MRMR.stats */
  function bigStats(container, ids, cls) {
    ids.forEach(function (id) {
      var s = D.stats[id];
      if (!s) { console.error('Stat inconnue : ' + id); return; }
      var card = el('<div class="card stat-big reveal ' + (cls || '') + '"><div class="num"></div><div class="label">' + esc(s.label) + '</div><div class="source">' + Charts.sourceHtml(s.source) + '</div></div>');
      container.appendChild(card);
      Charts.counter(card.querySelector('.num'), s.value, s.unit);
    });
  }

  /* Graphiques : liste d'ids de MRMR.series */
  function charts(container, ids, cls) {
    ids.forEach(function (id) {
      var s = D.series[id];
      if (!s) { console.error('Série inconnue : ' + id); return; }
      var card = el('<div class="card reveal ' + (cls || '') + '"></div>');
      container.appendChild(card);
      Charts.bars(card, s);
    });
  }

  /* Actions : victimes / temoins / tous */
  function actions(container, key) {
    D.actions[key].forEach(function (a) {
      container.appendChild(el('<div class="action reveal"><div class="ico" aria-hidden="true">' + a.icon + '</div><div><h3>' + esc(a.titre) + '</h3><p>' + a.texte + '</p></div></div>'));
    });
  }

  function contacts(container) {
    D.contacts.forEach(function (c) {
      container.appendChild(el('<div class="contact"><div class="n">' + esc(c.numero) + '</div><div class="t"><strong>' + esc(c.nom) + '</strong><br>' + esc(c.quand) + '</div></div>'));
    });
  }

  function lois(container, ids) {
    (ids || Object.keys(D.lois)).forEach(function (id) {
      var l = D.lois[id];
      if (!l) { console.error('Loi inconnue : ' + id); return; }
      var natureCls = l.nature.indexOf('crime') === 0 ? 'crime' : (l.nature.indexOf('délit') === 0 ? 'delit' : '');
      var html = '<article class="card law reveal" id="loi-' + esc(id) + '">'
        + '<div class="law-head"><h3>' + esc(l.nom) + '</h3><span class="law-nature ' + natureCls + '">' + esc(l.nature) + '</span></div>'
        + '<div class="law-article">' + esc(l.article) + '</div>'
        + '<p>' + l.definition + '</p>'
        + (l.exemples && l.exemples.length ? '<p><strong>Dans la rue, ça donne :</strong></p><ul>' + l.exemples.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '')
        + '<div class="law-peine"><div><strong>Peine encourue</strong>' + esc(l.peine) + '</div>'
        + (l.peineAggravee ? '<div><strong>Si circonstances aggravantes</strong>' + esc(l.peineAggravee) + '</div>' : '') + '</div>'
        + (l.aggravants && l.aggravants.length ? '<p class="small muted"><strong>Aggravé notamment si :</strong> ' + l.aggravants.map(esc).join(' · ') + '</p>' : '')
        + '<div class="source">' + Charts.sourceHtml(l.source) + '</div>'
        + '</article>';
      container.appendChild(el(html));
    });
  }

  function sources(container) {
    var seen = {}, list = [];
    function add(src) { if (!src) return; var k = src.url || (src.org + src.name); if (seen[k]) return; seen[k] = 1; list.push(src); }
    Object.keys(D.stats).forEach(function (k) { add(D.stats[k].source); });
    Object.keys(D.series).forEach(function (k) { add(D.series[k].source); });
    Object.keys(D.lois).forEach(function (k) { add(D.lois[k].source); });
    var ol = el('<ol></ol>');
    list.forEach(function (s) { ol.appendChild(el('<li>' + Charts.sourceHtml(s).replace(/^Source : /, '') + '</li>')); });
    container.appendChild(ol);
  }

  window.Render = { bigStats: bigStats, charts: charts, actions: actions, contacts: contacts, lois: lois, sources: sources, el: el };
})();
