TweenLite.set("#center", {
  xPercent: 200,
  yPercent: 200,
});

TweenMax.to("#mercury", 1, {
  bezier: getBezier(200, 200, 100, 100, true),
  repeat: -1,
  ease: Linear.easeNone,
});

TweenMax.to("#venus", 2, {
  bezier: getBezier(200, 200, 150, 150, true),
  repeat: -1,
  ease: Linear.easeNone,
});

TweenMax.to("#earth", 3, {
  bezier: getBezier(200, 200, 200, 200, true),
  repeat: -1,
  ease: Linear.easeNone,
});

TweenMax.to("#jupiter", 5, {
  bezier: getBezier(200, 200, 350, 350, true),
  repeat: -1,
  ease: Linear.easeNone,
});


TweenMax.to("#mars", 4, {
  bezier: getBezier(200, 200, 250, 250, true),
  repeat: -1,
  ease: Linear.easeNone,
});


TweenMax.to("#saturn", 7, {
  bezier: getBezier(200, 200, 450, 450, true),
  repeat: -1,
  ease: Linear.easeNone,
});

TweenMax.to("#uranus", 8, {
  bezier: getBezier(200, 200, 550, 550, true),
  repeat: -1,
  ease: Linear.easeNone,
});

TweenMax.to("#neptune", 9, {
  bezier: getBezier(200, 200, 650, 650, true),
  repeat: -1,
  ease: Linear.easeNone,
});

function getBezier(cx, cy, rx, ry, autoRotate) {
  ry = ry || rx;

  var k = 0.551915024494;
  var x = k * rx;
  var y = k * ry;

  const values = [
    { x: cx + rx, y: cy },
    { x: cx + rx, y: cy + y },
    { x: cx + x, y: cy + ry },
    { x: cx, y: cy + ry },
    { x: cx - x, y: cy + ry },
    { x: cx - rx, y: cy + y },
    { x: cx - rx, y: cy },
    { x: cx - rx, y: cy - y },
    { x: cx - x, y: cy - ry },
    { x: cx, y: cy - ry },
    { x: cx + x, y: cy - ry },
    { x: cx + rx, y: cy - y },
    { x: cx + rx, y: cy },
  ];
  return {
    autoRotate: autoRotate || false,
    type: "cubic",
    values: values,
  };
}
