/**
 * Created by Administrator on 2016/11/14.
 */
//导航栏显示隐藏
var official = document.getElementById("official");
var nav = document.getElementById("nav");
var firstbox = document.getElementById("firstbox");
var firstboxUl = document.getElementById("firstboxUl");
var firstboxLis = document.getElementsByTagName("li");
var firstboxAs = firstboxUl.getElementsByTagName("a");
//firstbox.onmouseover = function () {
//    firstbox.className = "firstbox block";
//}
for (var i = 0; i < firstboxAs.length; i++) {
    firstboxAs[i].onmouseover = function () {
        for (var i = 0; i < firstboxAs.length; i++) {
            firstboxAs[i].style.backgroundColor = "";
        }
        this.style.backgroundColor = "#c25521";
        this.style.color = "#fff";
    }
    firstboxAs[i].onmouseout = function () {
        for (var i = 0; i < firstboxAs.length; i++) {
            this.style.color = "#2f2f30";
            this.style.backgroundColor = "rgba(0,0,0,0)";
        }
    }
}
nav.onmouseover = function () {
    animate(firstbox, {"height": 160});
    firstbox.style.backgroundColor = "rgba(255,255,255,0.3)";
}
nav.onmouseout = function () {
    animate(firstbox, {"height": 0});
}
//out 的问题  会出差
firstbox.onmouseover = function () {
    animate(firstbox, {"height": 160});
}
firstbox.onmouseleave = function () {
    animate(firstbox, {"height": 0});
}
//nav.onmouseleave = function () {
//    animate(firstbox, {"height": 0});
//}

//阻止冒泡
official.onmouseover = function () {
    //firstbox.style.visibility = "hidden";
    stopPropagation(event);
}
//左边C3特效开始
// 获取焦点左边下载图切换
var download = document.getElementById("download");
var download_2 = document.getElementById("download_2");
var download_3 = document.getElementById("download_3");
download_2.onmouseover = function () {
    download_3.style.opacity = "1";
    download_3.style.top = "50px";
    download.style.background = "#f2782f";
}
download_2.onmouseout = function () {
    download_3.style.opacity = "0";
    download_3.style.top = "90px";
    download.style.background = "#d25d1e";
}
//新人礼包
var freegift = document.getElementById("freegift");
var freegiftI = freegift.children[0];
var freegiftSpan = freegift.children[1];
freegift.onmousemove = function () {
    freegiftSpan.style.fontWeight = "900";
    freegiftSpan.style.fontSize = "19px";
    freegiftSpan.style.top = "-24px";
    freegiftI.style.opacity = "0";
    freegiftI.style.top = "-5px";
    freegift.style.background = "#f2782f"
}
freegift.onmouseout = function () {
    freegiftSpan.style.fontWeight = "500";
    freegiftSpan.style.fontSize = "16px";
    freegiftSpan.style.top = 0;
    freegiftI.style.opacity = "1";
    freegiftI.style.top = 0;
    freegift.style.background = "#c25521";
}
//点劵充值
var bub = document.getElementById("bub")
var bubI = bub.children[0];
var bubSpan = bub.children[1];
bub.onmousemove = function () {
    bubI.style.opacity = "0";
    bubI.style.left = "-5px";
    bubSpan.style.fontWeight = "900";
    bubSpan.style.left = "-20px";
    bub.style.background = "#2e7b8d";
    bubSpan.style.color = "#a5f8ff";
}
bub.onmouseout = function () {
    bubI.style.opacity = "0.5";
    bubI.style.left = 0;
    bubSpan.style.fontWeight = "500";
    bubSpan.style.left = 0;
    bub.style.background = "rgba(0,0,0,0)";
    bubSpan.style.color = "#899dcd";
}
var bub1 = document.getElementById("bub1")
var bubI1 = bub1.children[0];
var bubSpan1 = bub1.children[1];
bub1.onmousemove = function () {
    bubI1.style.opacity = "0";
    bubI1.style.left = "-5px";
    bubSpan1.style.fontWeight = "900";
    bubSpan1.style.left = "-20px";
    bub1.style.background = "#2e7b8d";
    bubSpan1.style.color = "#a5f8ff";
}
bub1.onmouseout = function () {
    bubI1.style.opacity = "0.5";
    bubI1.style.left = 0;
    bubSpan1.style.fontWeight = "500";
    bubSpan1.style.left = 0;
    bub1.style.background = "rgba(0,0,0,0)";
    bubSpan1.style.color = "#899dcd";
}
var bub2 = document.getElementById("bub2")
var bubI2 = bub2.children[0];
var bubSpan2 = bub2.children[1];
bub2.onmousemove = function () {
    bubI2.style.opacity = "0";
    bubI2.style.left = "-5px";
    bubSpan2.style.fontWeight = "900";
    bubSpan2.style.left = "-20px";
    bub2.style.background = "#2e7b8d";
    bubSpan2.style.color = "#a5f8ff";
}
bub2.onmouseout = function () {
    bubI2.style.opacity = "0.5";
    bubI2.style.left = 0;
    bubSpan2.style.fontWeight = "500";
    bubSpan2.style.left = 0;
    bub2.style.background = "rgba(0,0,0,0)";
    bubSpan2.style.color = "#899dcd";
}
//第一个ul
var tool_1 = document.getElementById("tool_1");
var tool_1I = tool_1.children[0];
var tool_1Span = tool_1.children[1];
tool_1.onmouseover = function () {
    tool_1.style.background = "#2e7b8d";
    tool_1I.style.opacity = "0";
    tool_1I.style.top = "-5px";
    tool_1Span.style.color = "#a5f8ff";
    tool_1Span.style.fontWeight = "900";
    tool_1Span.style.top = "-25px";
}
tool_1.onmouseout = function () {
    tool_1.style.background = "rgba(0,0,0,0)";
    tool_1I.style.opacity = "0.5";
    tool_1I.style.top = 0;
    tool_1Span.style.color = "#899dcd";
    tool_1Span.style.fontWeight = "500";
    tool_1Span.style.top = 0;
}
var tool_2 = document.getElementById("tool_2");
var tool_2I = tool_2.children[0];
var tool_2Span = tool_2.children[1];
tool_2.onmouseover = function () {
    tool_2.style.background = "#2e7b8d";
    tool_2I.style.opacity = "0";
    tool_2I.style.top = "-5px";
    tool_2Span.style.color = "#a5f8ff";
    tool_2Span.style.fontWeight = "900";
    tool_2Span.style.top = "-25px";
}
tool_2.onmouseout = function () {
    tool_2.style.background = "rgba(0,0,0,0)";
    tool_2I.style.opacity = "0.5";
    tool_2I.style.top = 0;
    tool_2Span.style.color = "#899dcd";
    tool_2Span.style.fontWeight = "500";
    tool_2Span.style.top = 0;
}
var tool_3 = document.getElementById("tool_3");
var tool_3I = tool_3.children[0];
var tool_3Span = tool_3.children[1];
tool_3.onmouseover = function () {
    tool_3.style.background = "#2e7b8d";
    tool_3I.style.opacity = "0";
    tool_3I.style.top = "-5px";
    tool_3Span.style.color = "#a5f8ff";
    tool_3Span.style.fontWeight = "900";
    tool_3Span.style.top = "-25px";
}
tool_3.onmouseout = function () {
    tool_3.style.background = "rgba(0,0,0,0)";
    tool_3I.style.opacity = "0.5";
    tool_3I.style.top = 0;
    tool_3Span.style.color = "#899dcd";
    tool_3Span.style.fontWeight = "500";
    tool_3Span.style.top = 0;
}
var tool_4 = document.getElementById("tool_4");
var tool_4I = tool_4.children[0];
var tool_4Span = tool_4.children[1];
tool_4.onmouseover = function () {
    tool_4.style.background = "#2e7b8d";
    tool_4I.style.opacity = "0";
    tool_4I.style.top = "-5px";
    tool_4Span.style.color = "#a5f8ff";
    tool_4Span.style.fontWeight = "900";
    tool_4Span.style.top = "-25px";
}
tool_4.onmouseout = function () {
    tool_4.style.background = "rgba(0,0,0,0)";
    tool_4I.style.opacity = "0.5";
    tool_4I.style.top = 0;
    tool_4Span.style.color = "#899dcd";
    tool_4Span.style.fontWeight = "500";
    tool_4Span.style.top = 0;
}
var tool_5 = document.getElementById("tool_5");
var tool_5I = tool_5.children[0];
var tool_5Span = tool_5.children[1];
tool_5.onmouseover = function () {
    tool_5.style.background = "#2e7b8d";
    tool_5I.style.opacity = "0";
    tool_5I.style.top = "-5px";
    tool_5Span.style.color = "#a5f8ff";
    tool_5Span.style.fontWeight = "900";
    tool_5Span.style.top = "-25px";
}
tool_5.onmouseout = function () {
    tool_5.style.background = "rgba(0,0,0,0)";
    tool_5I.style.opacity = "0.5";
    tool_5I.style.top = 0;
    tool_5Span.style.color = "#899dcd";
    tool_5Span.style.fontWeight = "500";
    tool_5Span.style.top = 0;
}
var tool_6 = document.getElementById("tool_6");
var tool_6I = tool_6.children[0];
var tool_6Span = tool_6.children[1];
tool_6.onmouseover = function () {
    tool_6.style.background = "#2e7b8d";
    tool_6I.style.opacity = "0";
    tool_6I.style.top = "-5px";
    tool_6Span.style.color = "#a5f8ff";
    tool_6Span.style.fontWeight = "900";
    tool_6Span.style.top = "-25px";
}
tool_6.onmouseout = function () {
    tool_6.style.background = "rgba(0,0,0,0)";
    tool_6I.style.opacity = "0.5";
    tool_6I.style.top = 0;
    tool_6Span.style.color = "#899dcd";
    tool_6Span.style.fontWeight = "500";
    tool_6Span.style.top = 0;
}
//第二个ul
var vip1 = document.getElementById("vip1")
vip1.onmouseover = function () {
    vip1.style.background = "#2e7b8d";
}
//合作媒体
$(function () {
    $("#friendship").mouseenter(function () {
        $("#friendshipUl").show();
    })
    $("#friendship").mouseleave(function () {
        $("#friendshipUl").hide();
    })
    $("#friendshipUl li").on("mouseenter", function () {
        var index = $(this).index();
        $("#friendshipUl li a").eq(index).css("color", "#fff");
        $("#friendshipUl li").eq(index).css("background", "#3891a6");
    })
    $("#friendshipUl li").on("mouseleave", function () {
        var index = $(this).index();
        $("#friendshipUl li a").eq(index).css("color", "#49bbd6");
        $("#friendshipUl li").eq(index).css("background", "#2e7b8d");
    })
})
//左边C3特效结束

//第一个盒子 左边轮播
var al = document.getElementById("al");
var ar = document.getElementById("ar");
var leftBox = document.getElementById("leftBox");
var ul = leftBox.children[0];
var ulLis = ul.children;
var ol = leftBox.children[1];
var imgWight = leftBox.offsetWidth;
var timer = null;
al.onmouseover = function () {
    al.style.color = "#ffbb85";
    al.style.backgroundColor = "#c35522";
    ar.style.color = "#7b7b7b";
    ar.style.backgroundColor = "#2a2a2a";
}
ar.onmouseover = function () {
    ar.style.color = "#ffbb85";
    ar.style.backgroundColor = "#c35522";
    al.style.color = "#7b7b7b";
    al.style.backgroundColor = "#2a2a2a";
}
//ol 里自适应生成li
for (var i = 0; i < ulLis.length; i++) {
    var li = document.createElement("li");
    ol.appendChild(li);
    var olLis = ol.children;
    olLis[0].className = "ww";
    //olLis[i].innerHTML = i + 1;
}
//克隆 第一张 保证无缝滚动
var firstImg = ulLis[0].cloneNode(true);
ul.appendChild(firstImg);
//排他
for (var j = 0; j < olLis.length; j++) {
    olLis[j].index = j;
    olLis[j].onmouseover = function () {
        for (var j = 0; j < olLis.length; j++) {
            olLis[j].className = "";
        }
        this.className = "ww";
        //按钮同步切图
        var target = -this.index * imgWight;
        gif(ul, target);
        lol = mdzz = this.index;
    }
}
var lol = 0;
var mdzz = 0;
timer = setInterval(duu, 2500);
leftBox.onmouseover = function () {
    clearInterval(timer);
}
leftBox.onmouseout = function () {
    timer = setInterval(duu, 2500)
}
$(function () {
    $("#al").mouseenter(function () {
        $(".boxLi1").find("a").html("<img src='images/01.jpg'/>")
        $(".boxLi2").find("a").html("<img src='images/02.jpg'/>")
        $(".boxLi3").find("a").html("<img src='images/03.jpg'/>")
        $(".boxLi4").find("a").html("<img src='images/04.jpg'/>")
        $(".boxLi5").find("a").html("<img src='images/05.jpg'/>")
        $(".boxLi6").find("a").html("<img src='images/06.jpg'/>")
    })
    $("#ar").mouseenter(function () {
        $(".boxLi1").find("a").html("<img src='images/07.jpg'/>")
        $(".boxLi2").find("a").html("<img src='images/08.jpg'/>")
        $(".boxLi3").find("a").html("<img src='images/09.jpg'/>")
        $(".boxLi4").find("a").html("<img src='images/10.jpg'/>")
        $(".boxLi5").find("a").html("<img src='images/11.jpg'/>")
        $(".boxLi6").find("a").html("<img src='images/12.jpg'/>")
    })
})

//第三个盒子—点击切换图片
$(function () {
    var main_box2 = document.getElementById("main_box2");
    var box2Ul = main_box2.children[0];
    var box2Lis = box2Ul.getElementsByTagName("li");
    var box2As = box2Ul.getElementsByTagName("a");
    for (var i = 0; i < box2Lis.length; i++) {
        box2Lis[i].index = i;
        box2Lis[i].onmouseover = function () {
            main_box2.className = "main_box2 fl li" + this.index + "";
            //box2As.style.color = "yellow";
            for (var j = 0; j < box2Lis.length; j++) {
                box2Lis[j].children[0].style.color = "#31333f";
            }
            this.children[0].style.color = "#c25521";
        }
    }
})
//用JQ实现七彩高亮
$(function () {
    $(".main_box1_body_r img").mouseenter(function () {
        $(this).css("backgroundColor", "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ",0.8)")
    })
    $(".main_box1_body_r img").mouseleave(function () {
        $(this).css("backgroundColor", "#fff");
    })
    $(".ul_3 li").mouseenter(function () {
        $(this).css("backgroundColor", "rgba(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ",0.8)")
    })
    $(".ul_3 li").mouseleave(function () {
        $(this).css("backgroundColor", "#fff");

    })
})

//底部图轮播
$(function () {
    var main_box3 = document.getElementById("main_box3")
    var main_box3_body = document.getElementById("main_box3_body")
    var box3Ul = main_box3_body.children[0];
    var Is = main_box3_body.getElementsByTagName("i")
    box3Ul.onmousemove = function (event) {
        var event = event || window.event;
        //获取鼠标在页面上的位置
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        //盒子在页面上的位置
        //box.offsetLeft
        //计算 鼠标 在盒子中的位置
        var boxX = pageX - main_box3_body.offsetLeft - 385;
        //console.log(boxX);
        console.log(main_box3_body.offsetLeft);
        var target = -(4675 * boxX) / 1446;
        box3Ul.style.left = target + "px";
    }
})

//自我介绍
$(function () {
    $(".btn").click(function () {
        $(".personA").fadeIn(1500, function () {
            $(".personCtake").show()
            $(".personC").css("background", "url(images/lol6.jpg)");
            $(".Cp1").fadeIn(3000, function () {
                $(".Cp1").hide(1500, function () {
                    $(".personC").css("background", "url(images/lol13.jpg)");
                })
                $(".Cp2").fadeIn(4000, function () {
                    $(".Cp2").hide(1500, function () {
                        $(".personBtake").show();
                        $(".personB").css("background", "url(images/lol14.jpg)");
                        $(".Bp1").fadeIn(2500)
                    });
                    $(".Cp3").fadeIn(4000, function () {
                        $(".Cp3").fadeOut(500, function () {
                            $(".Bp1").hide(500, function () {
                                $(".Bp2").fadeIn(2500, function () {
                                    $(".personB").css("background", "url(images/lol21.jpg)");
                                    $(".Bp2").hide(500, function () {
                                        $(".Bp3").fadeIn(2500, function () {
                                            $(".personAtake").show();
                                            $(".personA").css("background", "url(images/lol28.jpg)");
                                            $(".Ap1").fadeIn(500, function () {
                                                $(".Bp3").hide();
                                                $(".personMe").fadeIn(2500, function () {
                                                    $(".Ap1").hide(500)
                                                    $(".personMetake").show(500, function () {
                                                        $(".Mp1").fadeIn(3000, function () {
                                                            $(".Mp1").hide(2000, function () {
                                                                $(".Mp2").fadeIn(2500, function () {
                                                                    $(".personMe").html("<img src='images/boy7.jpg'/>")
                                                                    $(".Mp2").hide(1000, function () {
                                                                        $(".Mp3").fadeIn(2500, function () {
                                                                            $(".Mp3").hide(1000, function () {
                                                                                $(".Mp4").fadeIn(2000, function () {
                                                                                    $(".Mp4").hide(1000, function () {
                                                                                        $(".Mp5").fadeIn(1500, function () {
                                                                                            $(".personMe").html("<img src='images/boy3.jpg'/>")
                                                                                            $(".Mp5").hide(500, function () {
                                                                                                $(".Mp6").fadeIn(2500, function () {
                                                                                                    $(".Mp6").hide(500)
                                                                                                    $(".personTeacher").fadeIn(1500, function () {
                                                                                                        $(".personTeachertake").show()
                                                                                                        $(".Tp1").fadeIn(2000)
                                                                                                        $(".Tp2").fadeIn(2500, function () {
                                                                                                            $(".Tp1").fadeOut(2000)
                                                                                                            $(".Tp2").fadeOut(2000, function () {
                                                                                                                $(".personA").css("background", "url(images/lol29.jpg)");
                                                                                                                $(".personB").css("background", "url(images/lol9.jpg)");
                                                                                                                $(".personC").css("background", "url(images/lol29.jpg)");
                                                                                                                $(".Mp7").fadeIn(1000)
                                                                                                                $(".Cp4").fadeIn(1000)
                                                                                                                $(".Bp4").fadeIn(1000)
                                                                                                                $(".Ap2").fadeIn(1000, function () {
                                                                                                                    $(".Tp3").fadeIn(2500, function () {
                                                                                                                        $(".Mp7").hide(2000, function () {
                                                                                                                            $(".Tp3").hide(2500, function () {
                                                                                                                                $(".Tp4").fadeIn(3500, function () {
                                                                                                                                    $(".Tp4").fadeOut(1500, function () {
                                                                                                                                        $(".personC").fadeOut(1000)
                                                                                                                                        $(".personB").fadeOut(1000)
                                                                                                                                        $(".personA").fadeOut(1000)
                                                                                                                                        $(".personMe").fadeOut(1000)
                                                                                                                                        $(".personTeacher").fadeOut(1000)
                                                                                                                                        $(".personTeachertake").hide(1000)
                                                                                                                                        $(".personMetake").hide(1000)
                                                                                                                                        $(".personCtake").hide(1000)
                                                                                                                                        $(".personBtake").hide(1000)
                                                                                                                                        $(".personAtake").hide(1000)
                                                                                                                                    })
                                                                                                                                })
                                                                                                                                $(".personA").css("background", "url(images/lol21.jpg)");
                                                                                                                                $(".personB").css("background", "url(images/lol21.jpg)");
                                                                                                                                $(".personC").css("background", "url(images/lol21.jpg)");
                                                                                                                                $(".personMe").html("<img src='images/lol21.jpg'/><img src='images/lol21.jpg'/><img src='images/lol21.jpg'/><br/><img src='images/lol21.jpg'/><img src='images/lol21.jpg'/><img src='images/lol21.jpg'/>")
                                                                                                                            })
                                                                                                                        })
                                                                                                                        $(".Cp4").hide(2000)
                                                                                                                        $(".Bp4").hide(2000)
                                                                                                                        $(".Ap2").hide(2000)
                                                                                                                    })
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })

                                                });
                                            });
                                        })

                                    })
                                })
                            })
                        })
                    })
                })
            })

        });
        $(".personB").fadeIn(1500);
        $(".personC").fadeIn(1500, function () {
            //$(".personC")[0].style.backgroundImage="url(images/lol6.jpg)"
        });
    })
})
//动画
$(function () {
    $(".mdzz").on("click", function () {
        $(this).fadeOut(1500, function () {
            $(document).on("keydown", function (e) {
                    var keycode = e.keyCode;
                    if (keycode === 73) {
                        $(".main_box1_2").fadeOut(1500, function () {
                            $(document).on("keydown", function (e) {
                                    $(".mdzz").fadeIn(500, function () {
                                        $(".mdzz").off("click");
                                    });
                                    var cc = e.keyCode;
                                    if (cc === 72) {
                                        $(".main_box1_1").css("opacity", 0.9)
                                    }
                                }
                            )
                        })
                    }
                }
            )
        })
    })
})

function duu() {
    if (lol === ulLis.length - 1) {
        lol = 0;
        ul.style.left = 0;
    }
    lol++;
    var target = -lol * imgWight;
    gif(ul, target);
    if (mdzz < olLis.length - 1) {
        mdzz++;
    } else {
        mdzz = 0;
    }
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].className = "";
    }
    olLis[mdzz].className = "ww";
}

//动画
function gif(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var cc = 30;
        //判断是前进还是后退
        cc = leader < target ? cc : -cc;
        //if判断物体位置距离目的地是不是还有一个以上的步子才能到达，是
        //是就可以再迈一步       Math.abs  取绝对值
        if (Math.abs(leader - target) >= Math.abs(cc)) {
            leader = leader + cc;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15)
}

//缓动动画
function animate(obj, json, fn) {  //json{attr:target} 属性名:属性值 k:json[k]
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cc = true;
        for (var k in json) {
            if (k === "opacity") { //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100; //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;//万一传入auto 最后左边会为NAN 此时传入0
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                cc = false;
            }
        }
        if (cc) {
            clearInterval(obj.timer);
            if (fn) {     //要是不判断，执行完了会再调用这个函数，要是没输入函数，就找不到，会报错
                fn();   //放在这里是要让上一个定时器内的执行完，先清理上次一的定时器，在执行
            }           //判断第一次代码执行完后，还有函数就执行，没有不会调用这个函数，F12不会报错
        }
    }, 15);
}

function getStyle(obj, attr) {
    if (window.getComputedStyle(obj)) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}