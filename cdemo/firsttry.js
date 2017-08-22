/**
 * Created by ender on 2017/3/8.
 */
var f = function initFirstTryInfo() {
    var firstTryHtml = "";
    var firstTryList = {
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
    for (var num1 = 0; num1 < firstTryList.length; num1++) {
        var fItem = firstTryList[num1];
        if (fItem.fname != oldfItemName) {
            oldfItemName = fItem.fname;
            if (i == 0) {
                firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + i + '\')" onmouseout="tryOnMouseout(\'dl' + i + '\')" class="category-list first">';
            } else {
                firstTryHtml += '<div onmouseover="tryOnMouseover(\'dl' + i + '\')" onmouseout="tryOnMouseout(\'dl' + i + '\')" class="category-list">';
            }
            firstTryHtml += '<dl class="fath"><dt><a>' + fItem.fname + '</a></dt>';
            var l = 0;
            for (var num2 = 0; num2 < firstTryList.length; num2++) {
                var tryItem = firstTryList[num2];
                if (tryItem.fname == fItem.fname && l < maxSize && tryItem.isdisplay == '1') {
                    firstTryHtml += '<dd><a href="' + tryItem.url + '" target="_blank">' + tryItem.sname + '</a></dd>';
                    l = l + 1;
                }
            }
            firstTryHtml += '</dl><div id="dl' + i + '" class="main-category" >';
            for (var num3 = 0; num3 < firstTryList.length; num3++) {
                var mItem = firstTryList[num3];
                if (mItem.fname == fItem.fname && mItem.mname != oldmItemName) {
                    oldmItemName = mItem.mname;
                    firstTryHtml += '<dl><dt>' + mItem.mname + '</dt><dd>';
                    for (var num4 = 0; num4 < firstTryList.length; num4++) {
                        var tryItem = firstTryList[num4];
                        if (tryItem.fname == mItem.fname && tryItem.mname == mItem.mname) {
                            firstTryHtml += '<a href="' + tryItem.url + '" target="_blank">' + tryItem.sname + '</a>';
                        }
                    }
                    firstTryHtml += '</dd></dl>';
                }
            }
            firstTryHtml += '</div></div>';
            i = i + 1;
        }
    }
}