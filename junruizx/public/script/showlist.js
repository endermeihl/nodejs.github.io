/**
 * Created by ender on 2017/3/8.
 */

document.onclick = mclose;

var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;

function tryOnMouseover(id) {
    var oDiv = document.getElementById(id);
    oDiv.style.display = "block";
}
//全部课程（试用）栏鼠标移开事件
function tryOnMouseout(id) {
    var oDiv = document.getElementById(id);
    oDiv.style.display = "none";
};

// open hidden layer
function mopen(id) {
    // cancel close timer
    mcancelclosetime();

    // close old layer
    if (ddmenuitem) ddmenuitem.style.display = 'none';
    // get new layer and show it
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.display = 'block';
}
// close showed layer
function mclose() {
    if (ddmenuitem) ddmenuitem.style.display = 'none';
}

// go close timer
function mclosetime() {
    closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime() {
    if (closetimer) {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}


var ja = function shoulist() {
    var tryfirst = {
        "typesecond": [{
            "zeroname": "内容1",
            "name": "子内容1",
            "who": [{"name": "课件110", "url": "110.html"}, {"name": "课件111", "url": "111.html"}, {
                "name": "课件112",
                "url": "112.html"
            }]
        }, {
            "zeroname": "内容1",
            "name": "子内容2",
            "who": [{"name": "课件210", "url": "210.html"}, {"name": "课件211", "url": "211.html"}, {
                "name": "课件212",
                "url": "212.html"
            }]
        }, {
            "zeroname": "内容2",
            "name": "子内容1",
            "who": [{"name": "课件210", "url": "210.html"}, {"name": "课件211", "url": "211.html"}, {
                "name": "课件212",
                "url": "212.html"
            }]
        }, {
            "zeroname": "内容3",
            "name": "子内容4",
            "who": [{"name": "课件310", "url": "310.html"}, {"name": "课件311", "url": "311.html"}, {
                "name": "课件312",
                "url": "312.html"
            }]
        }],
        "typefirst": [{
            "zeroname": "内容1",
            "showtype": [{"name": "课件110", "url": "110.html"}, {"name": "课件111", "url": "111.html"}, {
                "name": "课件112",
                "url": "112.html"
            }]
        }, {
            "zeroname": "内容2",
            "showtype": [{"name": "课件210", "url": "210.html"}, {"name": "课件211", "url": "211.html"}, {
                "name": "课件212",
                "url": "212.html"
            }]
        }, {
            "zeroname": "内容3",
            "showtype": [{"name": "课件310", "url": "310.html"}, {"name": "课件311", "url": "311.html"}, {
                "name": "课件312",
                "url": "312.html"
            }]
        }
        ]
    }

    var tfirst = tryfirst.typefirst;
    var tsecond = tryfirst.typesecond;

    var firstTryHtml = "";
    var level = 1
    if (level != "1" && level != "") {
        firstTryHtml += '<h3 class="row" onmouseover="mopen(\'m0\')" onmouseout="mclosetime()"><a href="">全部课程</a></h3>';
        firstTryHtml += '<div class="left_nav" style="display:none;" id="m0" onmouseover="mcancelclosetime()" onmouseout="mclosetime()">';
    } else {
        firstTryHtml += '<h3><a href="">全部课程</a></h3>';
        firstTryHtml += '<div id="left_nav_id" class="left_nav">';
    }
    for (var f in tfirst) {
        if (f == 0) {
            firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + f + '\')" onmouseout="tryOnMouseout(\'dl' + f + '\')" class="category-list first">';
        } else {
            firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + f + '\')" onmouseout="tryOnMouseout(\'dl' + f + '\')" class="category-list">';
        }
        firstTryHtml += '<dl class="fath"><dt><a>' + tfirst[f].zeroname + '</a></dt>';
        console.log(tfirst[f].zeroname);
        for (var s in tfirst[f].showtype) {
            console.log("这个是部分的+++++name:" + tfirst[f].showtype[s].name + "url:" + tfirst[f].showtype[s].url);
            firstTryHtml += '<dd><a href="' + tfirst[f].showtype[s].url + '" target="_blank">' + tfirst[f].showtype[s].name + '</a></dd>';
        }
        firstTryHtml += '</dl><div id="dl' + f + '" class="main-category" >';
        for (var s in tsecond) {
            if (tsecond[s].zeroname == tfirst[f].zeroname) {
                firstTryHtml += '<dl><dt>' + tsecond[s].name + '</dt><dd>';
                console.log("这个是部分的+++++name:" + tsecond[s].name + "url:" + tsecond[s].who);
                for (var k in tsecond[s].who) {
                    firstTryHtml += '<a href="' + tsecond[s].who[k].url + '" target="_blank">' + tsecond[s].who[k].name + '</a>';
                    console.log("这个是部分的+++++name:" + tsecond[s].who[k].name + "url:" + tsecond[s].who[k].url);
                }
                firstTryHtml += '</dd></dl>';
            }
        }
        firstTryHtml += '</div></div>';
    }
    console.log(firstTryHtml);
    firstTryHtml += '</div>';
    $('#firstTry_div').html(firstTryHtml);
}

show = ja()