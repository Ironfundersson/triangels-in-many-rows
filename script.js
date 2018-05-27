var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var cw = can.width;
var ch = can.height;

function filledTriangel(x, y, a, color) { //A használt változók: "x" és "y" a háromszög legfelső csúcsának koordinátái, "a" az oldalhossz, "color" pedig a kitöltésre használt színárnyalatot határozza meg.
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + a/2, y + a*Math.sin(60*(Math.PI)/180));
  ctx.lineTo(x - a/2, y + a*Math.sin(60*(Math.PI)/180));
  ctx.lineTo(x, y);
  ctx.fillStyle = color;
  ctx.fill();
}

function composition(w, z, b, num) {//A használt változók: "w" és "z" az első háromszög legfelső csúcsának koordinátái, "b" az oldalhossz, "num" pedig a felrajzolandó sorok száma.
  for (var i = 0; i <= num - 1; i++) {
    if (i % 3 == 0) {
      var color = 'tomato';
    }
    else if (i % 3 == 1) {
      var color = 'chartreuse';
    }
    else if (i % 3 == 2) {
      var color = 'cornflowerblue';
    }
    for (var j = 0; j <= i; j++) {
      for (var k = -1; k < 2; k += 2) {
        if (i % 2 == 0 && j % 2 ==0) {
          filledTriangel(w + k*j*b/2, z + i*b*Math.sin(60*(Math.PI)/180), b, color);
        }
        else if (i % 2 != 0 && j % 2 != 0) {
          filledTriangel(w + k*j*b/2, z + i*b*Math.sin(60*(Math.PI)/180), b, color);
        }
      }
    }
  }
}

composition(300, 50, 50, 6);

function settings(triX, triY, triA, triRows) {
  ctx.clearRect(0, 0, cw, ch);
  triX = Number(document.getElementById('triX').value);
  triY = Number(document.getElementById('triY').value);
  triA = Number(document.getElementById('triA').value);
  triRows = Number(document.getElementById('triRows').value);
  if ((triRows * Math.sqrt(3) * triA / 2) + triY > ch || triX - triRows * triA / 2 < 0) {
    alert('To many or to big triangels! Do not fit on the canvas!');
  }
  else {
  composition(triX, triY, triA, triRows);
  }
}

