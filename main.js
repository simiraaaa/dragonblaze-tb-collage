
phina.globalize();
phina.define('FixedShuu', {
  superClass: 'PlainElement',
  init: function(o) {
    this.superInit({}.$extend(FixedShuu.defaults, o || {}));
  },
  renderShuu: function(o) {
    var { startColor, endColor, minWidth, maxWidth, centerPosition, startDegree } = (o || {});
    var { width, height } = this;
    var cx = centerPosition.x;
    var cy = centerPosition.y;
    var length = Math.sqrt(width * width + height * height);
    var c = this.canvas.context;
    var startRad = startDegree.toRadian();
    var addRad = (360 / 16).toRadian();
    var grad = c.createRadialGradient(cx, cy, width / 100, cx, cy, width);
    grad.addColorStop(0.1, startColor);
    grad.addColorStop(0.5, endColor);
    c.fillStyle = grad;
    for (var i = 0; i < 16; ++i) {
      c.beginPath();
      var rad = i * addRad + startRad;
      var strokeWidth = Math.randfloat(minWidth, maxWidth);
      var padRad = Math.atan2(strokeWidth / 2, length);
      var sin1 = Math.sin(rad + padRad);
      var sin2 = Math.sin(rad - padRad);
      var cos1 = Math.cos(rad + padRad);
      var cos2 = Math.cos(rad - padRad);
      c.moveTo(cx, cy);
      c.lineTo(cx + (cos1 * length), cy + (sin1 * length));
      c.lineTo(cx + (cos2 * length), cy + (sin2 * length));
      c.closePath();
      c.fill();
    }
  },
  _static: {
    defaults: {

    }
  }
});

phina.define('MoveShuu', {
  superClass: 'PlainElement',
  init: function(o) {
    this.superInit({}.$extend(MoveShuu.defaults, o || {}));
  },
  renderShuu: function(o) {
    var { startColor, endColor, minWidth, maxWidth, centerPosition, startDegree } = (o || {});
    var { width, height } = this;
    var cx = centerPosition.x;
    var cy = centerPosition.y;
    var length = Math.sqrt(width * width + height * height);
    var c = this.canvas.context;
    var startRad = startDegree.toRadian();
    var addRad = (360 / 6).toRadian();
    var grad = c.createRadialGradient(cx, cy, width / 10, cx, cy, height / 2);
    grad.addColorStop(0.5, startColor);
    grad.addColorStop(0.8, endColor);
    c.fillStyle = grad;
    for (var i = 0; i < 6; ++i) {
      c.beginPath();
      var rad = i * addRad + startRad;
      var strokeWidth = Math.randfloat(minWidth, maxWidth);
      var padRad = Math.atan2(strokeWidth / 2, length);
      var sin1 = Math.sin(rad + padRad);
      var sin2 = Math.sin(rad - padRad);
      var cos1 = Math.cos(rad + padRad);
      var cos2 = Math.cos(rad - padRad);
      c.moveTo(cx, cy);
      c.lineTo(cx + (cos1 * length), cy + (sin1 * length));
      c.lineTo(cx + (cos2 * length), cy + (sin2 * length));
      c.closePath();
      c.fill();
    }
  },
  _static: {
    defaults: {

    }
  }
});