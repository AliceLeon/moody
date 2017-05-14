/**
 * Created by Alice on 2017/5/14.
 */
var alice = "04-14 19:13"

// 时间格式转化
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

//

//获得情绪值
var emotionurl = "https://api.prprpr.me/emotion/wenzhi?password=DIYgod&text={一句话}"
var datatest = "小拳拳捶你胸口"


var get_radius = function(year,month,date){

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
    console.log("total: "+ total)
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
        console.log("直到第"+j+"月有"+ monthdays+"天")
    }
    console.log(monthdays)
    console.log(date)
    var month_day = parseInt(monthdays) + parseInt(date) //类型转换 哭哭
    console.log("天数："+month_day)
    console.log()
    return (month_day/total)
}

var get_angle = function(anhour,anminute){
    return (anhour-1)/24+ parseInt(anminute)/60
}
console.log("qqqq"+get_angle(1,2))
// console.log("angle: "+ get_angle(time_date(alice).thour,time_date(alice).tminute))
console.log(get_radius(time_date(alice).tyear,time_date(alice).tmonth,time_date(alice).tday))
