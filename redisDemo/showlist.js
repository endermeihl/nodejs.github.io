/**
 * Created by ender on 2017/3/8.
 */
var tryfirst = {
    var firstTryHtml = "";
"typesecond"
:
[{
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
    "typefirst"
:
[
    "内容1",
    "内容2",
    "内容3"
]
}

var tfirst = tryfirst.typefirst;
var tsecond = tryfirst.typesecond;

var ja = function shoulist() {
    firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + i + '\')" onmouseout="tryOnMouseout(\'dl' + i + '\')" class="category-list first">';
    for (var f in tfirst) {
        firstTryHtml += '<dl class="fath"><dt><a>' + tfirst[f] + '</a></dt>';
        console.log(tfirst[f]);
        for (var s in tsecond) {
            if (tsecond[s].typefirst == tfirst[f] && tsecond[s].isautoshow == true) {
                firstTryHtml += '<dd><a href="' + tsecond[s].url + '" target="_blank">' + tsecond[s].name + '</a></dd>';
                console.log("这个是部分的+++++name:" + tsecond[s].name + "url:" + tsecond[s].url);
            }
        }
        firstTryHtml += '</dl><div id="dl' +  + '" class="main-category" >';
        for (var s in tsecond) {
            if (tsecond[s].typefirst == tfirst[f]) {
                firstTryHtml += '<dd><a href="' + tsecond[s].url + '" target="_blank">' + tsecond[s].name + '</a></dd>';
            }
        }
    }
}

show = ja()