/*
//筛选原创微博并将它们显示在div里

var lengtha
var data = []
var whatever

function preload() {
  data = loadJSON('test1.json')
  console.log("the length: " + typeof(data.length))
  console.log("length: " + data.length)
}

function setup() {
  noLoop();
  // createCanvas(1000,1000)
  console.log("the length: " + typeof(data.length))
  console.log("length: " + data.length)
    // noCanvas()
}

function draw() {
  console.log("the length: " + typeof(data.length))
  background(51)
  var j = 1;
  for (var i = 0; i < 236; i++) {
    console.log(data[0].maintext)
    console.log(data[i].maintext)
    var re = data[i].retweet_from
    var notonlyshare = true
    if (data[i].maintext === "分享图片" || data[i].maintext === "分享视频") {
      notonlyshare = false
    }

    if (re === "" && notonlyshare) { //过滤非原创，并没有成功过滤分享视频和分享图片

      fill(220)
      textSize(10)
      whatever = try_ajax(data[i].maintext)
      console.log("whatever+ "+whatever)
      createDiv("主要内容: " + data[i].maintext, 10, 20 * j + 20)
      j++
    }
  }
  lengtha = data.length;
  var typea = typeof(data);
  // console.log(typea);
  // text(lengtha,10,10)
  rect(10, 10, 10, 10)

  // // var maintext = data[0].user_name

  // // text( maintext,20,30)
}

function try_ajax(e) {
  $.ajax({
    url: "https://api.prprpr.me/emotion/wenzhi",
    data: {
      password: "DIYgod",
      text: e
    },
    type: 'get',
    success: function(res) {
      //                        console.log(res);
      var jsonres = JSON.parse(res)
      var resnum = jsonres["positive"]
      console.log(resnum)
      var mycolor = getcolor(resnum)
      // $(".main")
      //   .append("<div class='mode' style='background-color:" + mycolor + "'></div>")
      //   .append("<div style='display:inline-block' class = 'mainText' >" + atext + resnum + "</div><br>")
      //   .append("<div>" + resnum + "</div>")
      //   .append("<div style='background-color:" + mycolor + "'>" + "</div>")
      //   .append("<div>" + resnum + "</div>")
      // $(".main").append(div)
      // $(".mode").removeClass("mode").addClass("showMode")
        //                   $(".mainText").addClass("hidden")
    }
  });
}
    */