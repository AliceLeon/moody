// 自己写的一个会随着你的鼠标动的环形
// 因为数据可视化的老师觉得这属于无意义的数据需要弱化所以做的很浅，几乎看不清

function Linecircle(inr,outr) {
    this.innerR = inr;
    this.outR = outr;
    this.an = 0;
    this.fill_col = random(0,100) //255
    this.temp_dis = 0
    this.moverange = 400

    this.display = function () {
        stroke(75, 93, 120, this.fill_col)
        line(this.innerR * sin(this.an), this.innerR * (-cos(this.an)), this.outR * sin(this.an), this.outR * (-cos(this.an)))
    }
    this.hover_big = function () {
        var temp_dis = dist(mouseX, mouseY, width / 2 + this.outR * sin(this.an), height / 2 + this.outR * (-cos(this.an)))
        if (temp_dis < this.moverange) {
            line(this.innerR * sin(this.an), this.innerR * (-cos(this.an)), (this.outR + 2000 / temp_dis) * sin(this.an), (this.outR + 2000 / temp_dis) * (-cos(this.an)))
        } else {
            line(this.innerR * sin(this.an), this.innerR * (-cos(this.an)), this.outR * sin(this.an), this.outR * (-cos(this.an)))
        }
    }
}



/* 背景小星星
 * 来自 Daniel Shiffman
 * http://codingtra.in
 * http://patreon.com/codingtrain
 * Code for: https://youtu.be/17WoOqgXsRM
 */


function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(255,random(0,50));
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 10, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);

  }
}

