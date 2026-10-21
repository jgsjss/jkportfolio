// 위변조방지 용지 문양: 서로 교차하는 곡선 쌍(띠)과 제목 뒤 로제트를 SVG로 그려 시트 배경에 깐다
(function () {
    function url(svg) { return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")'; }

    // 띠: 위상이 반대인 곡선 두 개가 엇갈리며 렌즈 사슬을 만든다. 띠마다 위상을 조금씩 민다.
    var W = 240, H = 96, bands = 4, strands = 5, paths = [];
    for (var b = 0; b < bands; b++) {
        var y0 = (b + 0.5) * (H / bands);
        for (var s = 0; s < strands; s++) {
            var phase = (s / strands) * Math.PI;
            [1, -1].forEach(function (sign) {
                var d = '';
                for (var x = 0; x <= W; x += 3) {
                    var t = (x / W) * Math.PI * 4;
                    var y = y0 + sign * Math.sin(t + phase + b * 0.6) * 9;
                    d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(2);
                }
                paths.push('<path d="' + d + '"/>');
            });
        }
    }
    var tile = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '">' +
        '<g fill="none" stroke="rgb(38,104,84)" stroke-opacity=".09" stroke-width=".6">' + paths.join('') + '</g></svg>';

    // 로제트: 꽃잎 고리를 조금씩 돌려 겹친 가로로 긴 문양
    var RW = 640, RH = 240, cx = RW / 2, cy = RH / 2, rings = [];
    for (var j = 0; j < 16; j++) {
        var d = '', shift = (j / 16) * (Math.PI / 6);
        for (var i = 0; i <= 720; i++) {
            var th = (i / 720) * Math.PI * 2;
            var rad = 1 + 0.16 * Math.sin(12 * th + shift * 12) + 0.05 * Math.sin(36 * th - shift * 6);
            d += (i ? 'L' : 'M') + (cx + Math.cos(th) * rad * 270).toFixed(1) + ' ' + (cy + Math.sin(th) * rad * 92).toFixed(1);
        }
        rings.push('<path d="' + d + 'Z"/>');
    }
    var rosette = '<svg xmlns="http://www.w3.org/2000/svg" width="' + RW + '" height="' + RH + '">' +
        '<g fill="none" stroke="rgb(38,104,84)" stroke-opacity=".14" stroke-width=".6">' + rings.join('') + '</g></svg>';

    var root = document.documentElement.style;
    root.setProperty('--guilloche-bg', url(tile));
    var cert = document.querySelector('.cert');
    if (cert) cert.style.setProperty('--rosette-bg', url(rosette));
})();

// 목차: 현재 보고 있는 별지 표시
(function () {
    if (!('IntersectionObserver' in window)) return;
    var links = document.querySelectorAll('.index a');
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            links.forEach(function (a) { a.removeAttribute('aria-current'); });
            var a = byId[e.target.id];
            if (a) {
                a.setAttribute('aria-current', 'true');
                var ol = a.closest('ol');
                ol.scrollLeft = a.offsetLeft - (ol.clientWidth - a.offsetWidth) / 2;
            }
        });
    }, {rootMargin: '-45% 0px -50% 0px'});
    document.querySelectorAll('.sheet[id]').forEach(function (s) { io.observe(s); });
})();
