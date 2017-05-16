// 绘画心情点的函数

function real_draw(real_r,an,r_fill,small_r,a_text){  // 半径，与x轴偏离角度
    var an = TWO_PI*an
    var a = width/2 + sin(an)* real_r //半径可变成呼吸灯
    var b = height/2 - cos(an)* real_r
    var c = small_r*10
    noStroke()
    fill(255,Math.floor(r_fill*255)); // 此处可变
    ellipse(a,b,c,c);

    if( abs(Math.sqrt((mouseX-a)*(mouseX-a)+(mouseY-b)*(mouseY-b))-c)<c){
        text(a_text,a,b)
        console.log("可以很强")
    }

}