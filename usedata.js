/**
 * Created by Alice on 2017/5/14.
 */
var alice = "04-14 2:59"
var nono = "2016-7-26 00:55"

// 时间格式转化
var real_radius = 0
function radius_angle(data,start_year,end_year,start_r,end_r){
    var r_range = end_r - start_r
    // console.log("r_range"+r_range)
    var year_range = end_year-start_year+1
    // console.log("year_range"+year_range)
    var temp_data = time_date(data);
    // console.log("temp_data"+temp_data)
    var now_year = temp_data.tyear
    // console.log("now_year"+now_year)
    var day_in_year = get_radius(temp_data.tyear, temp_data.tmonth, temp_data.tday)
    // console.log("day_in_year"+day_in_year)
    var real_radius = ((parseFloat(now_year)+parseFloat(day_in_year)-parseFloat(start_year))/parseFloat(year_range))*parseFloat(r_range)+parseFloat(start_r)
    // console.log("real_radius"+real_radius)

    return {
        "return_radius" : real_radius,
        "return_angle" : get_angle(temp_data.thour, temp_data.tminute)
    }
}
radius_angle(nono,2015,2017,100,200)

function time_date (data){
    var date = data.split(" ")[0].split("-")
    var time = data.split(" ")[1].split(":")
    return {
        "tday" : date[date.length-1],
        "tmonth" : date[date.length-2],
        "tyear" : date[0]>2000?date[0]:2017,
        "thour" : time[0],
        "tminute":  time[1]
    }
}


function get_radius(year,month,date){

    var monthdays = 0
    var is366 = 0

    var total

    switch (parseInt(year)) {   //一定要类型转换
        case 2008:
        case 2012:
        case 2016:
            total = 366
            is366 = 1
            break;
        default:
            total = 365
    }
    // console.log("total: "+ total)
    //关于月份的处理
    function add_month(a_month) {
        switch (parseInt(a_month)) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30
                break;
            case 2:
                if(is366 === 1){
                    return 29
                }else {
                    return 28
                }
                break;
            default:
        }
    }

    for(var j = 1;j< month ;j++){
        monthdays += add_month(j)
        // console.log("直到第"+j+"月有"+ monthdays+"天")
    }
    // console.log(monthdays)
    // console.log(date)
    var month_day = parseInt(monthdays) + parseInt(date) //类型转换 哭哭
    // console.log("天数："+month_day)
    // console.log()
    return (month_day/total)
}

function get_angle(a,b){
    a = a-1
    // console.log('a'+a)
    a = a/24
    // console.log('A'+a)
    b = b/60/24
    // console.log('b'+b)
    2*Math.PI*(a+b)

    // return 2*Math.PI*(a+b)<0?0:2*Math.PI*(a+b);
    return 2*Math.PI*(a+b);
}

// 测试部分
console.log("time_date(alice).thour "+time_date(alice).thour)
console.log("time_date(alice).tminute "+time_date(alice).tminute)
console.log("qqqq: "+get_angle(time_date(alice).thour,time_date(alice).tminute))
console.log("qqqq: "+get_angle(1,2))
console.log("qqqq: "+get_angle(19,17))
console.log("qqqq: "+get_angle(23,59))
console.log("qqqq: "+get_angle(13,00))
// console.log("angle: "+ get_angle(time_date(alice).thour,time_date(alice).tminute))
console.log(get_radius(time_date(alice).tyear,time_date(alice).tmonth,time_date(alice).tday))
var testtemp = radius_angle(alice)
console.log(testtemp.return_angle)
console.log(testtemp.return_radius)

// 获得情绪值
function try_ajax(e) {
    //line added for the var that will have the result
    var result = false;
    $.ajax({
        url: "https://api.prprpr.me/emotion/wenzhi",
        data: {
            password: "DIYgod",
            text: e
        },
        type: 'get',
        //line added to get ajax response in sync
        async: false,
        success: function(res) {
//                  console.log(res);
            var jsonres = JSON.parse(res)
            var resnum = jsonres["positive"]
            //line added to save ajax response in var result
            result =  resnum
        }

    });
    //line added to return ajax response
    return result;
}