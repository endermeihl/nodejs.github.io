/**
 * Created by ender on 2017/3/8.
 */


var ja = function shoulist() {
    var tryfirst = {
        "typesecond": [{
            "typefirst": "内容1",
            "name": "子内容1",
            "url": "1.html",
            "isautoshow": true
        }, {
            "typefirst": "内容2",
            "name": "子内容1",
            "url": "1.html",
            "isautoshow": true
        }, {
            "typefirst": "内容2",
            "name": "子内容2",
            "url": "2.html",
            "isautoshow": false
        }, {
            "typefirst": "内容2",
            "name": "子内容3",
            "url": "3.html",
            "isautoshow": true
        }, {
            "typefirst": "内容2",
            "name": "子内容4",
            "url": "4.html",
            "isautoshow": false
        }],
        "typefirst": [
            "内容1",
            "内容2",
            "内容3"
        ]
    }

    var tfirst = tryfirst.typefirst;
    var tsecond = tryfirst.typesecond;
    var firstTryHtml = "";
    firstTryHtml += '<h3 class="row" onmouseover="mopen(\'m0\')" onmouseout="mclosetime()"><a href="">全部课程</a></h3>';
    firstTryHtml += '<div class="left_nav" style="display:none;" id="m0" onmouseover="mcancelclosetime()" onmouseout="mclosetime()">';
    firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + 0 + '\')" onmouseout="tryOnMouseout(\'dl' + 0 + '\')" class="category-list first">';
    for (var f in tfirst) {
        i = f + 1;
        firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + i + '\')" onmouseout="tryOnMouseout(\'dl' + i + '\')" class="category-list">';
        firstTryHtml += '<dl class="fath"><dt><a>' + tfirst[f] + '</a></dt>';
        console.log(tfirst[f]);
        for (var s in tsecond) {
            if (tsecond[s].typefirst == tfirst[f] && tsecond[s].isautoshow == true) {
                firstTryHtml += '<dd><a href="' + tsecond[s].url + '" target="_blank">' + tsecond[s].name + '</a></dd>';
                console.log("这个是部分的+++++name:" + tsecond[s].name + "url:" + tsecond[s].url);
            }
            if (s == tsecond.size - 1) {
                firstTryHtml += '</dl><div id="dl' + s + '" class="main-category">';
            }
        }
        firstTryHtml += '</dl><div id="dl' + i + '" class="main-category">';
        for (var s in tsecond) {
            firstTryHtml += '<dl><dt>' + tfirst[f] + '</dt><dd>';
            if (tsecond[s].typefirst == tfirst[f]) {

                firstTryHtml += '<dd><a href="' + tsecond[s].url + '" target="_blank">' + tsecond[s].name + '</a></dd>';

            }
            firstTryHtml += '</dd></dl>';
        }
        firstTryHtml += '</div></div>';
    }

    console.log(firstTryHtml)
    $('#firstTry_div').html(firstTryHtml);
}

show = ja()