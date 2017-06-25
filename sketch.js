// 绘画心情点的函数
//
// function real_draw(real_r,an,r_fill,small_r,a_text){  // 半径，与x轴偏离角度
//     var an = TWO_PI*an
//     // var a = width/2 + sin(an)* real_r //半径可变成呼吸灯
//     // var b = height/2 - cos(an)* real_r
//     var a = width/2+sin(an)* real_r //半径可变成呼吸灯
//     var b = height/2+-cos(an)* real_r
//     var c = small_r*10
//     noStroke()
//     fill(255,Math.floor(r_fill*255)); // 此处可变
//     ellipse(a,b,c,c);
//
// }

var data = []
var data_spot = []
var stars = []
var a_circle = []
var speed


function preload() {
    data = loadJSON('user1.json')
    myFont = loadFont('FZQKBYSJW.TTF');
    clockFont = loadFont('Oswald-Medium.ttf');
}

function setup() {
    var size_num = 1
    var mainCanvas = createCanvas(windowWidth,1000)
    mainCanvas.parent('#a_canvas')
    //          background('#00193B')
    //          noLoop();
    //          frameRate(1000)

    // 选择要加载的数据，此处没办法读取数据条数
    //          data = loadJSON('user2.json')

    for (var i = 0; i < 1351; i++) {
        // 数据表头、初始年份、结束年份、半径范围
        var angletemp = radius_angle(data[i].created_at, 2011, 2017, 0, 500);

        data_spot.push(new Moody());
        data_spot[i].an = angletemp.return_angle;
        data_spot[i].real_r = angletemp.return_radius;


//        console.log('an' + data_spot[i].an)
        data_spot[i].moody_thing = data[i].emotion_num;
        data_spot[i].a_text = data[i].text;
        data_spot[i].b_text = data[i].created_at;
        data_spot[i].c_text = data[i].emotion_num;
    }
    for (var i = 0; i < 150; i++) {
        a_circle.push(new Linecircle())
    }
    for (var i = 0; i < 2000; i++) {
        stars[i] = new Star();
    }

}

function draw() {
    background('#00193B')
    translate(width / 2, height / 2)
    textSize(100)
    //组件
//        strokeWeight(3)
//        stroke(255,10)
//        line(0,0,width/4,-height/4)
//        noStroke()
//        textFont(clockFont)
//        fill(255,10)
//        line(0,0,width/2,0)
//          text("12:00",width/4,50);


    for (var i = 0; i < a_circle.length; i++) {
        a_circle[i].an = (TWO_PI * i / a_circle.length)
        a_circle[i].display();
        a_circle[i].hover_big();
    }

    //stars
    speed = map(mouseY, 0, height, 3, 1);
//       background(0,30);
    // translate(width / 2, height / 2);
    for (var k = 0; k < stars.length; k++) {
//          console.log("star works")
        stars[k].update();
        stars[k].show();
    }

    // 一段文字

    noStroke()
    fill(255, 20)
    textSize(50)
    textFont(myFont)
    text("\"青青况_", 0, 25)

    for (var i = 0; i < data_spot.length; i++) {
        //            data_spot[i].movea();
        data_spot[i].count_pos();
        data_spot[i].display();
        data_spot[i].hover_big();
        // console.log('data_spot[i].a_text' + data_spot[i].a_text)


        //            console.log('an'+data_spot[i].temp_an)
        data_spot[i].showtext();
    }


}


function Moody() {
    this.an = 0;
    this.real_r = 0;
    this.moody_thing = 0;
    this.temp_x = 0.0;
    this.temp_y = 0.0;
    this.ugly_r = sin(frameCount) + random(-4, 3)

    this.speed = 1;
    this.a_text = "original value"
    this.b_text = "time value"
    this.c_text = "mood value"
    //          this.temp_an = 2* Math.PI * this.an

//      this.an+=PI
    this.count_pos = function () {
        this.temp_x = parseFloat(sin(this.an) * this.real_r);
        this.temp_y = -parseFloat(cos(this.an) * this.real_r);
    }

    this.movea = function () {
        console.log("QAQ")
        this.temp_x += random(-this.speed, this.speed);
        this.temp_y += random(-this.speed, this.speed);
    };

    this.display = function () {
        noStroke()
        //              fill(255,Math.floor(this.moody_thing*255));
        var random_start = random(-1, 1)
        if (this.moody_thing > 0.5) {
            fill(255, 254, 184, this.moody_thing * 255)
            ellipse(this.temp_x, this.temp_y, this.moody_thing * 8 + sin(frameCount * 100 + random_start) / 2, this.moody_thing * 8 + sin(frameCount * 100 + random_start) / 2);
//
        } else if (this.moody_thing < 0.5) {
            fill(58, 170, 255, (1 - this.moody_thing) * 255)
            ellipse(this.temp_x, this.temp_y, (1 - this.moody_thing) * 8 + sin(frameCount * 100 + random_start) / 2, (1 - this.moody_thing) * 8 + sin(frameCount * 100 + random_start) / 2);
//
        } else {
            fill(100, 100)
            ellipse(this.temp_x, this.temp_y, 5, 5);
        }
//        fill(Math.floor(this.moody_thing * 255));
//        ellipse(this.temp_x, this.temp_y, this.moody_thing * 10 + sin(frameCount * 100 + random_start) / 2), this.moody_thing * 10 + sin(frameCount * 100 + random_start) / 2;
//        ellipse(this.temp_x, this.temp_y, 3+ this.moody_thing * 3 + sin(frameCount * 100 + random_start) / 2), 7+this.moody_thing * 10 + sin(frameCount * 100 + random_start) / 2;
//        ellipse(this.temp_x, this.temp_y, 5,5);
    };
    this.showtext = function () {
        textSize(20);
        fill(255);
        if (this.moody_thing > 0.5) {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < this.moody_thing * 10) {
                text("\" " + this.a_text, 0, 0)
                text(this.b_text, 0, 23)
            }
        } else if (this.moody_thing < 0.5) {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < (1 - this.moody_thing) * 10) {
                text("\" " + this.a_text, 0, 0)
                text(this.b_text, 0, 23)
            }
        } else {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < this.moody_thing * 10) {
                text("\" " + this.a_text, 0, 0)
                text(this.b_text, 0, 23)
            }
        }
    }
    this.hover_big = function () {
        if (this.moody_thing > 0.5) {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < this.moody_thing * 10) {
                // textSize()
                ellipse(this.temp_x, this.temp_y, this.moody_thing * 11, this.moody_thing * 11);
            }
        } else if (this.moody_thing < 0.5) {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < (1 - this.moody_thing) * 10) {
                ellipse(this.temp_x, this.temp_y, (1 - this.moody_thing) * 11, (1 - this.moody_thing) * 11);
            }
        } else {
            if (dist(mouseX, mouseY, this.temp_x + width / 2, this.temp_y + height / 2) < this.moody_thing * 10) {
                // textSize()
                ellipse(this.temp_x, this.temp_y, this.moody_thing * 11, this.moody_thing * 11);
            }
        }
    }
}

function Linecircle() {
    this.innerR = 400;
    this.outR = 420;
    this.an = 0;
    this.fill_col = random(0, 100)
    this.temp_dis = 0
    this.moverange = 500

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
