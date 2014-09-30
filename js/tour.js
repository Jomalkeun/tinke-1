/**
 * ...
 * @author Dominique Wong
 */

function ZensoriumTour() {

    // def
    var win, doc;

    var sectionLength = [];
    var sectionIndex = [
        0 //home
        , .5 //color
        , 1.5 //feature
        , 2.7 //cardio
        , 3.5 //index
        , 4.5 //less is more
        , 7.5 //share
        , 8.5 //mobile
        , 10 //mobility
    ];

    // vars
    var that = this,
        contentHeight,
        contentWidth,
        currentIndex = 0,
        currentScroll,
        currentScrollPercent;

    var DEVICE_IOS = "ios",
        DEVICE_ANDROID = "android";

    var deviceMode = DEVICE_IOS;

    var tinkeColorIndex = 3,
        paraContentIndex = -1,
        cardioContentIndex = -1;

    var productTween,
        productAndroidTween,
        runningTween,
        runningHeartTween,
        runningCircleTween;

    var paraTweens = [],
        cardioTweens = [];

    var index_arc;

    var logoOver = false,
        navTopShown = true,
        navBtmShown = true;

    var indexVitaShown = false,
        indexZenShown = false;

    var numBadges;

    var runningMan,
        isRunningMan = true;

    // divs

    // tinke ios
    var div_ios;
    var div_product;

    var div_tinke_light;
    var div_tinke_whole;
    var div_tinke_outline;

    var div_tinke_parts;
    var div_tinke_parts_cap_top;
    var div_tinke_parts_cap_btm;
    var div_tinke_parts_body;

    var div_hand;
    var div_colorselector;
    var div_featurehand;
    var div_featurehandthumb;
    var div_iphoneholder;
    var div_iphonescreens;

    // tinke android
    var div_android;
    var div_android_product;

    var div_android_tinke_light;
    var div_android_tinke_whole;
    var div_android_tinke_outline;

    var div_android_hand;
    var div_android_colorselector;
    var div_android_featurehand;
    var div_android_featurehandthumb;
    var div_androidholder;
    var div_androidscreens;

    var div_android_connect;

    // nav
    var div_btm_nav;
    var div_logo;
    var div_top_nav;
    var nextBtns;

    // content
    var div_para;
    var div_para_navs;
    var div_para_content;
    var div_para_wrapper;
    var div_para_scrollwrapper;
    var div_para_arrow_next;
    var div_para_arrow_prev;
    var div_para_close;

    var div_cardio;
    var div_cardio_navs;
    var div_cardio_content;
    var div_cardio_wrapper;
    var div_cardio_scrollwrapper;
    var div_cardio_arrow_next;
    var div_cardio_arrow_prev;
    var div_cardio_close;

    var div_share_badges;
    var div_share_nodes;

    var div_running_brain;
    var div_running_heart;

    var div_side_nav;
    var div_side_nav_btn;

    var div_deviceToggle;

    var div_index_vita;
    var div_index_vita_btn;
    var div_index_vita_btn_text;

    var div_index_zenIndex;
    var div_index_zenIndex_btn;
    var div_index_zenIndex_btn_text;

    // functions
    var resetCSS;
    var resetAndroidCSS;
    var resetTween;
    var resetAndroidTween;
    var getTweenPercent;
    var setTinkeColor;
    var setAndroidTinkeColor;
    var toggleDevice;
    var toggleIOS;
    var toggleAndroid;

    var openPara;
    var nextPara;
    var prevPara;
    var scrollParaTo;
    var checkParaArrow;
    var closePara;
    var closeParaComplete;

    var openCardio;
    var nextCardio;
    var prevCardio;
    var scrollCardioTo;
    var checkCardioArrow;
    var closeCardio;
    var closeCardioComplete;

    var initParaTween;
    var startParaTween;
    var stopParaTween;

    var initCardioTween;
    var startCardioTween;
    var stopCardioTween;


    var updateDialValue;

    var showTopNav;
    var hideTopNav;
    var showBtmNav;
    var hideBtmNav;

    var initIndex;
    var initBadges;
    var initLess;

    var updateSideNav;
    var resetSideNav;

    var getSectionScroll;

    var toggleIndexVita;

    var showRunningMan;
    var hideRunningMan;
    var runningGraphTweenComplete;


    var infoTitle = ["heart rate", "blood oxygen level", "respiratory rate", "heart rate variability"];


    this.taehoon = function () {
        //console.log('init');

        doc = $(document);

        win = $(window);
        win.bind('scroll', this.onWindowScroll);
        win.resize(this.onWindowResize);


        // social

        $('.btn_share.fb').click(function () {
            shareFacebook('http://www.zensorium.com/tinke/');
            return false;
        });
        $('.btn_share.tw').click(function () {
            shareTwitter('Tinké - The quick, revolutionary way to check your fitness and wellness is now at your fingertip', 'http://www.zensorium.com/tinke/');
            return false;
        });
        $('.btn_share.pin').click(function () {
            sharePinterest('pinterest/tour.html');
            return false;
        });

        shareEmail($('.btn_share.mail'), 'Check out this site: Tinké by Zensorium', 'Tinké is the quick, revolutionary way to check your fitness and wellness is now at your fingertip. Its breakthrough technology reveals how fit you are at any given time and over a time span.', 'http://www.zensorium.com/tinke/');

        // tinke ios
        div_ios = $('#toplayer');
        div_product = $('#toplayer #product');

        div_tinke_light = $('#toplayer #tinke_light');
        div_tinke_whole = $('#toplayer #tinke_whole');
        div_tinke_outline = $('#toplayer #tinke_outline');
        div_tinke_parts = $('#toplayer #tinke_parts');

        div_tinke_parts_cap_top = $('#toplayer #tinke_cap_top');
        div_tinke_parts_cap_btm = $('#toplayer #tinke_cap_btm');
        div_tinke_parts_body = $('#toplayer #tinke_body');

        div_hand = $('#splash .hand_1_img');
        div_colorselector = $('#toplayer #colorselector');
        div_featurehand = $('#toplayer #featurehand');
        div_featurehandthumb = $('#toplayer #featurehandthumb');
        div_iphoneholder = $('#toplayer #iphone_wrapper');
        div_iphonescreens = $('#toplayer #iphone .screen img');


        // tinke android
        div_android = $('#android_toplayer');

        div_android_product = $('#android_toplayer #android_product');

        div_android_tinke_light = $('#android_toplayer #android_tinke_light');
        div_android_tinke_whole = $('#android_toplayer #android_tinke_whole');
        div_android_tinke_outline = $('#android_toplayer #android_tinke_outline');

        div_android_hand = $('#splash .hand_1b_img');
        div_android_colorselector = $('#android_toplayer #android_colorselector');
        div_android_featurehand = $('#android_toplayer #android_featurehand');
        div_android_featurehandthumb = $('#android_toplayer #android_featurehandthumb');
        div_androidholder = $('#android_toplayer #phone_wrapper');
        div_androidscreens = $('#android_toplayer #phone .screen img');

        div_android_connect = $('#android_toplayer #android_connect');


        // nav
        div_logo = $('#logowrapper');
        div_btm_nav = $('#bottomnavwrapper');
        div_top_nav = $('#topnav');

        nextBtns = $("a.btn_next_section");
        nextBtns.click(nextSection);
        nextBtns.css({cursor: "pointer"});

        // content
        div_para = $('#para');
        div_para_navs = $('#para a.btn_more');
        div_para_content = $('#para_content');
        div_para_wrapper = $('#para_content #wrapper');
        div_para_scrollwrapper = $('#para_content .scroll_wrapper');
        div_para_arrow_next = $('#para_content #arrow_next');
        div_para_arrow_prev = $('#para_content #arrow_prev');
        div_para_close = $('#para_content .btn_close');

        div_cardio = $('#cardio_stress');
        div_cardio_navs = $('#cardio_stress a.btn_more');
        div_cardio_content = $('#cardiostress_content');
        div_cardio_wrapper = $('#cardiostress_content #wrapper');
        div_cardio_scrollwrapper = $('#cardiostress_content .scroll_wrapper');
        div_cardio_arrow_next = $('#cardiostress_content #arrow_next');
        div_cardio_arrow_prev = $('#cardiostress_content #arrow_prev');
        div_cardio_close = $('#cardiostress_content .btn_close');

        div_share_badges = $('#share .badges');
        div_share_nodes = $('#share .nodes');

        div_running_brain = $('#cardio_stress .graphic .top ul#brain');
        div_running_heart = $('#cardio_stress .mid .heart');
        div_running_circle = $('#cardio_stress .mid .circle');

        div_side_nav = $('#sidenav');
        div_side_nav_btn = $('#sidenav .indicator');

        div_deviceToggle = $('#toggle');

        div_index_vita = $('#indexes #vita_content');
        div_index_vita_btn = $('#indexes #vita a.btn_more');
        div_index_vita_btn_text = $('#indexes #vita a.btn_more span');
        div_index_vita_btn_icon = $('#indexes #vita a.btn_more .icon');

        div_index_zenIndex = $('#indexes #zen_content');
        div_index_zenIndex_btn = $('#indexes #zen a.btn_more');
        div_index_zenIndex_btn_text = $('#indexes #zen a.btn_more span');
        div_index_zenIndex_btn_icon = $('#indexes #zen a.btn_more .icon');

        div_index_vita_btn.css('cursor', 'pointer');
        div_index_vita_btn.click(function () {
            toggleIndexVita();
        });
        div_index_zenIndex_btn.css('cursor', 'pointer');
        div_index_zenIndex_btn.click(function () {
            toggleIndexZen();
        });


        //nav functions
        div_top_nav.click(function () {
            logoOver = true;
            showTopNav();
        });
        div_top_nav.mouseover(function () {
            logoOver = true;
            showTopNav();
        });
        div_top_nav.mouseout(function () {
            logoOver = false;
            hideTopNav(.5);
        });
        div_logo.click(function () {
            logoOver = true;
            showTopNav();
        });
        div_logo.mouseover(function () {
            logoOver = true;
            showTopNav();
        });
        div_logo.mouseout(function () {
            logoOver = false;
            hideTopNav(.5);
        });

        $('#toggleIOSBt').click(function () {
            toggleDevice();
            return false;
        });
        $('#toggleAndroidBt').click(function () {
            toggleDevice();
            return false;
        });

        $('.selection .ios').click(function () {
            toggleIOS();
            return false;
        });
        $('.selection .android').click(function () {
            toggleAndroid();
            return false;
        });

        $('#splash .btn_down').css('cursor', 'pointer');
        $('#splash .btn_down').click(function () {
            that.scrollToSection(1);
            return false;
        });

        $('.wrapper_sidenav').each(
            function (index, item) {
                var jItem = $(item);
                var btn = jItem.find('.indicator');
                var text = jItem.find('.text');

                text.css('opacity', 0);
                text.css('visibility', 'hidden');
                text.css('display', 'none');
                btn.css('cursor', 'pointer');
                btn.click(function () {
                    that.scrollToSection(index);
                    return false;
                });
                btn.mouseover(function () {
                    text.css('display', 'block');
                    TweenMax.to(text, .5, { css: {autoAlpha: .8}, ease: Cubic.easeInOut });
                });
                btn.mouseout(function () {
                    text.css('display', 'none');
                    TweenMax.to(text, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut });
                });

            }
        );

        // android connect
        androidConnect = {};
        androidConnect.myFrame = 0;
        androidConnect.setFrame = function (val) {
            androidConnect.myFrame = val;
            div_android_connect.css('background-position', -Math.floor(val) * 124 + 'px 0px');
        }
        androidConnect.getFrame = function () {
            return androidConnect.myFrame;
        }

        var androidTween = TweenMax.to(androidConnect, 1, { setFrame: 4, ease: Linear.easeNone, repeat: -1, useFrame: true });

        // para
        initParaTween();

        // cardio
        initCardioTween();

        // indexes
        initIndex();

        // less is more
        initLess();

        // color selector
        div_colorselector.children().each(
            function (index, item) {
                var jItem = $(item);
                //console.log(jItem);
                jItem.click(function () {
                    setTinkeColor(index);
                    return false;
                });
            }
        );

        div_android_colorselector.children().each(
            function (index, item) {
                var jItem = $(item);
                //console.log(jItem);
                jItem.click(function () {
                    setAndroidTinkeColor(index);
                    return false;
                });
            }
        );


        //para
        div_para_close.click(
            function () {
                closePara();
                return false;
            }
        );
        div_para_navs.each(
            function (index, item) {
                var jItem = $(item);
                //console.log(jItem);
                jItem.click(function () {
                    openPara(index);

                    return false;
                });
            }
        );
        div_para_arrow_next.click(
            function () {
                nextPara();
                return false;
            }
        );
        div_para_arrow_prev.click(
            function () {
                prevPara();
                return false;
            }
        );

        //cardio
        div_cardio_close.click(
            function () {
                closeCardio();
                return false;
            }
        );
        div_cardio_navs.each(
            function (index, item) {
                var jItem = $(item);
                //console.log(jItem);
                jItem.click(function () {
                    openCardio(index);
                    return false;
                });
            }
        );
        div_cardio_arrow_next.click(
            function () {
                nextCardio();
                return false;
            }
        );
        div_cardio_arrow_prev.click(
            function () {
                prevCardio();
                return false;
            }
        );


        // running man
        runningMan = {};
        runningMan.myFrame = 0;
        runningMan.setFrame = function (val) {
            runningMan.myFrame = val;
            div_running_brain.css('top', -Math.floor(val) * 40);
        }
        runningMan.getFrame = function () {
            return runningMan.myFrame;
        }

        runningTween = TweenMax.to(runningMan, 1, { setFrame: 13, ease: Linear.easeNone, repeat: -1, useFrame: true });
        runningHeartTween = TweenMax.to(div_running_heart, .2, { css: {scaleX: .8, scaleY: .8}, ease: Cubic.easeInOut, yoyo: true, repeat: -1 });
        runningCircleTween = TweenMax.to(div_running_circle, 3, { css: {rotation: 360}, ease: Linear.easeNone, repeat: -1 });
        hideRunningMan();

        // scroll interrupt
        $('body,html').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function (e) {
            if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel") {
                TweenMax.killTweensOf($('html,body'));
                $("html,body").stop();
            }
        })


        this.onWindowResize();

    }

    showRunningMan = function () {
        if (isRunningMan) {
            return;
        }
        isRunningMan = true;
        //console.log('showRunningMan');
        runningTween.play();
        runningHeartTween.play();
        runningCircleTween.play();


        $('#cardio_stress .bottom .graphs').children().each(
            function (index, item) {
                var jItem = $(item);
                runningGraphTweenComplete(jItem);
            }
        );

    }

    hideRunningMan = function () {
        if (!isRunningMan) {
            return;
        }
        isRunningMan = false;
        //console.log('hideRunningMan');
        runningTween.pause();
        runningHeartTween.pause();
        runningCircleTween.pause();


        $('#cardio_stress .bottom .graphs').children().each(
            function (index, item) {
                var jItem = $(item);
                TweenMax.killTweensOf(jItem);
            }
        );

    };

    runningGraphTweenComplete = function (item) {
        var tarHeight = Math.random() * 30;
        var duration = Math.abs(tarHeight - item.height()) / 50;
        TweenMax.to(item, duration, { css: {height: tarHeight}, ease: Cubic.easeInOut, onComplete: runningGraphTweenComplete, onCompleteParams: [item] });
    };

    this.onWindowScroll = function () {
        //console.log('onWindowScroll');

        currentScroll = win.scrollTop();

        currentScroll = currentScroll < 0 ? 0 : currentScroll;

        if (currentScroll != 0) {
            hideTopNav(0);
            //showBtnNav();
        } else {
            showTopNav();
            //hideBtnNav(0);
        }
        updateBottomNav();
        // maxscroll = contentHeight * number of 100% content + footerheight(220) + paraheight(1000) - screenHeight
        var maxScroll = contentHeight * 4 + 220 + 1000 - contentHeight;
        currentScrollPercent = currentScroll / maxScroll;
        //console.log(contentHeight + ' : ' + currentScroll + ' : ' + currentScroll/maxScroll);

        //productTween.seek(currentScrollPercent*6);
        var seek = getTweenPercent(currentScroll)
        /*
         console.log('seek ' + seek);
         console.log("currentScroll " + currentScroll);
         */
        productTween.seek(seek);
        productTween.pause();

        productAndroidTween.seek(seek);
        productAndroidTween.pause();


        updateSideNav(seek);

        if (currentIndex < 2 || currentIndex > 3) {
            hideRunningMan();
        } else {
            showRunningMan();
        }

        if (contentWidth < 960) {
            var setLeft = -(960 - contentWidth) * .5
            $('#toplayer').css('left', -$(window).scrollLeft());
        }


    }
    this.onWindowResize = function () {
        contentHeight = win.height();
        contentWidth = win.width();


        //console.log('width : ' + contentWidth + "    ::    height :" + contentHeight);
        initBadges();

        resetCSS();
        resetAndroidCSS();

        resetTween();
        resetAndroidTween();

        if (contentWidth < 960) {
            div_logo.css('left', 480);
        } else {
            div_logo.css('left', '50%');
            $('#toplayer').css('left', 0);
        }

        that.onWindowScroll();
    }


    updateSideNav = function (seek) {
        resetSideNav();
        var n = sectionIndex.length;
        for (var i = 0; i < n - 1; i++) {
            if (seek >= sectionIndex[i] && seek < sectionIndex[i + 1]) {
                $(div_side_nav_btn[i]).addClass('active');
                return;
            }
        }

        $(div_side_nav_btn[n - 1]).addClass('active');
    }
    resetSideNav = function () {
        div_side_nav_btn.each(
            function (index, item) {
                var jItem = $(item);
                jItem.removeClass('active');
            }
        );
    }
    initIndex = function () {
        var archtype = Raphael("polar", 222, 222);
        archtype.customAttributes.arc = function (xloc, yloc, value, total, R) {
            var alpha = 360 / total * value,
                a = (90 - alpha) * Math.PI / 180,
                x = xloc + R * Math.cos(a),
                y = yloc - R * Math.sin(a),
                path;
            if (total == value) {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
                ];
            } else {
                path = [
                    ["M", xloc, yloc - R],
                    ["A", R, R, 0, +(alpha > 180), 1, x, y]
                ];
            }
            return {
                path: path
            };
        };
        index_arc = archtype.path().attr({
            "stroke": "#00aad2",
            "stroke-width": 21,
            arc: [110, 110, 0, 100, 100]
        });


        $('#indexes h4').html('0');
        index_arc.setArc = function (val) {
            index_arc.myArc = val;
            index_arc.attr({arc: [110, 110, val, 100, 100]});
            $('#indexes h4').html(Math.round(val));
        }
        index_arc.getArc = function () {
            return index_arc.myArc;
        }
    }

    //share badges
    initBadges = function () {
        var divWidth = contentWidth < 960 ? 960 : contentWidth;
        numBadges = Math.floor(divWidth * .5 / 60);

        div_share_badges.html('');

        var curIconIndex = 0;

        for (var i = 0; i < numBadges; i++) {
            curIconIndex = i % 5;
            div_share_badges.append('<img src="img/tour/share/badge_' + curIconIndex + '.png">');
        }
    }


    //less is more
    initLess = function () {
        var rollover = $('#design .less_rollover');

        rollover.each(
            function (index, item) {
                var jItem = $(item);
                var text = jItem.find('.less_text');
                var btn = jItem.find('.btn_more');

                text.css('opacity', 0);
                text.css('visibility', 'hidden');
                jItem.css('cursor', 'pointer');

                jItem.mouseover(
                    function () {
                        TweenMax.to(text, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut });
                        TweenMax.to(btn, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut });
                    }
                );
                jItem.mouseout(
                    function () {
                        TweenMax.to(text, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut });
                        TweenMax.to(btn, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut });
                    }
                );
            }
        );
    }


    // nav
    function scrollToSection(index) {
        //console.log('scrollToSection ' + getSectionScroll(index));
        var duration = Math.abs(currentScroll - getSectionScroll(index)) / 300;
        duration = duration < 2 ? 2 : duration > 10 ? 10 : duration;
        TweenMax.to($('html,body'), duration, { scrollTop: getSectionScroll(index), ease: Cubic.easeOut, overwrite: 'all' });
    }

    this.scrollToSection = scrollToSection;

    this.scrollToPosition = function (ypox) {
        var duration = Math.abs(currentScroll - ypox) / 300;
        duration = duration < 2 ? 2 : duration > 10 ? 10 : duration;
        TweenMax.to($('html,body'), duration, { scrollTop: ypox, ease: Cubic.easeOut, overwrite: 'all' });
    }
    showTopNav = function () {
        if (navTopShown) {
            return;
        }
        navTopShown = true;
        //TweenMax.to(div_top_nav, .5, { css:{ top:0 }, ease:Cubic.easeInOut, overwrite:'all' } );
        TweenMax.to(div_top_nav, .5, { css: { height: 173 }, ease: Cubic.easeInOut, overwrite: 'all' });
    }

    hideTopNav = function (delay) {
        if (!navTopShown) {
            return;
        }
        if (logoOver) {
            return;
        }
        if (currentScroll == 0) {
            return;
        }
        navTopShown = false;

        //TweenMax.to(div_top_nav, .5, { css:{ top:-45 }, ease:Cubic.easeInOut, delay:delay } );
        TweenMax.to(div_top_nav, .5, { css: { height: .2 }, ease: Cubic.easeInOut, delay: delay });

    }
    showBtmNav = function () {
        if (navBtmShown) {
            return;
        }
        navBtmShown = true;
        TweenMax.to(div_btm_nav, .5, { css: { top: 0 }, ease: Cubic.easeInOut, overwrite: 'all' });
    }
    hideBtmNav = function (delay) {
        if (!navBtmShown) {
            return;
        }
        navBtmShown = false;
        TweenMax.to(div_btm_nav, .5, { css: { top: 45 }, ease: Cubic.easeInOut, delay: delay });
    }
    var updateBottomNav = function (tpos) {
        var tlimit = $("#footer").offset().top - $(window).height();
        if (currentScroll >= tlimit) {
            $("#bottomnav").css({bottom: currentScroll - tlimit - 1 });
            // $("#toplayer").css({top: -(currentScroll-tlimit-1) });
            $("#sidenav").css({top: -(currentScroll - tlimit - 1) + contentHeight * .5});
        } else {
            $("#bottomnav").css({bottom: 0 });
            //$("#toplayer").css({top: 0 });
            $("#sidenav").css({top: 0 + contentHeight * .5});
        }
    }


    // para content

    openPara = function (setIndex) {
        console.log("openPara", setIndex);
        paraContentIndex = setIndex;
        checkParaArrow();
        //console.log('openPara ' + setIndex );
        div_para.css('z-index', 100);
        div_para_content.css('z-index', 995);
        var tarLeft = -(setIndex) * contentWidth;

        div_para_scrollwrapper.css('left', tarLeft);
        paraTweens[setIndex].play();
        //div_para_scrollwrapper.click(function() { closePara() } );
        //TweenMax.to(div_para_scrollwrapper, 1, { css:{left:tarLeft}, ease:Cubic.easeInOut } )
        //var duration = contentWidth/1200;
        TweenMax.to(div_para_wrapper, 1, { css: {left: 0}, ease: Cubic.easeInOut })
        //infoTitle
        _gaq.push(["_trackEvent", "home", "view", infoTitle[setIndex], 1, true]);
    }
    closePara = function () {
        _gaq.push(["_trackEvent", "home", "close", infoTitle[paraContentIndex], 0, true]);
        paraTweens[paraContentIndex].pause();
        paraContentIndex = -1;
        //TweenMax.to(div_para_scrollwrapper, 1, { css:{left:contentWidth}, ease:Cubic.easeInOut, onComplete:closeParaComplete } )
        TweenMax.to(div_para_wrapper, 1, { css: {left: contentWidth}, ease: Cubic.easeInOut, onComplete: closeParaComplete })
    }
    nextPara = function () {
        if (paraContentIndex >= 3) {
            return;
        }
        paraTweens[paraContentIndex].pause();
        scrollParaTo(paraContentIndex + 1);
    }
    prevPara = function () {
        if (paraContentIndex <= 0) {
            closePara();
            return;
        }
        paraTweens[paraContentIndex].pause();
        scrollParaTo(paraContentIndex - 1);
    }
    checkParaArrow = function () {
        if (paraContentIndex >= 3) {
            div_para_arrow_next.css('visibility', 'hidden');
        } else {
            div_para_arrow_next.css('visibility', 'visible');
        }
    }
    scrollParaTo = function (setIndex) {
        paraContentIndex = setIndex;
        checkParaArrow();
        var tarLeft = -(setIndex) * contentWidth;
        paraTweens[setIndex].play();
        //var duration = Math.abs(div_para_scrollwrapper.position().left-tarLeft)/1200;
        TweenMax.to(div_para_scrollwrapper, 1, { css: {left: tarLeft}, ease: Cubic.easeInOut })
        _gaq.push(["_trackEvent", "home", "view", infoTitle[setIndex], 1, true]);
    }
    closeParaComplete = function () {


        div_para.css('z-index', 100);
        div_para_content.css('z-index', 50);
        div_para_wrapper.css('left', contentWidth);
        div_para_scrollwrapper.css('left', contentWidth);
    }


    initParaTween = function () {
        paraTweens = [];

        var item;
        var mytween;


        //heart rate
        mytween = new TimelineMax({ pause: true, repeat: -1 });
        item = $('#para_content .img_hr .line_wrapper');
        mytween.insert(TweenMax.to(item, 0, { css: {width: 0, left: 345} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 274} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 0, left: 345 + 274 } }), 2);

        item = $('#para_content .img_hr .line_wrapper2');
        mytween.insert(TweenMax.to(item, 0, { css: {left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {left: -274 } }), 2);

        item = $('#para_content .img_hr .heart');
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), .8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 1);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), 1.8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 2);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), 2.8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 0);

        mytween.pause();

        paraTweens.push(mytween);

        //blood oxygen level
        mytween = new TimelineMax({ pause: true, repeat: -1 });

        item = $('#para_content .img_oxy .pink');
        mytween.insert(TweenMax.to(item, 0, { css: {height: 50} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 30} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 40} }), 1);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 20} }), 2);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 50} }), 3);

        item = $('#para_content .img_oxy .blue');
        mytween.insert(TweenMax.to(item, 0, { css: {height: 35} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 55} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 25} }), 1);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 45} }), 2);
        mytween.insert(TweenMax.to(item, 1, { css: {height: 35} }), 3);

        mytween.pause();

        paraTweens.push(mytween);

        //respiratory rate
        mytween = new TimelineMax({ pause: true, repeat: -1 });

        item = $('#para_content .img_res .line_wrapper');
        mytween.insert(TweenMax.to(item, 0, { css: {width: 0, left: 332} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 274} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 0, left: 332 + 278 } }), 2);

        item = $('#para_content .img_res .line_wrapper2');
        mytween.insert(TweenMax.to(item, 0, { css: {left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {left: -278 } }), 2);

        item = $('#para_content .img_res .arrow_1');
        mytween.insert(TweenMax.to(item, 0, { css: {autoAlpha: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1.5, { css: {autoAlpha: 1} }), 0);
        mytween.insert(TweenMax.to(item, 1.5, { css: {autoAlpha: 0 } }), 1.5);
        item = $('#para_content .img_res .arrow_2');
        mytween.insert(TweenMax.to(item, 0, { css: {autoAlpha: 1} }), 0);
        mytween.insert(TweenMax.to(item, 1.5, { css: {autoAlpha: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1.5, { css: {autoAlpha: 1 } }), 1.5);

        mytween.pause();

        paraTweens.push(mytween);

        //heart rate variability
        mytween = new TimelineMax({ pause: true, repeat: -1 });

        item = $('#para_content .img_hrv .line_wrapper');
        mytween.insert(TweenMax.to(item, 0, { css: {width: 0, left: 332} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 274} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 0, left: 332 + 278 } }), 2);

        item = $('#para_content .img_hrv .line_wrapper2');
        mytween.insert(TweenMax.to(item, 0, { css: {left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {left: -278 } }), 2);

        mytween.pause();

        paraTweens.push(mytween);
    }


    startParaTween = function (index) {

    }
    stopParaTween = function (index) {

    }


    // cardio content

    openCardio = function (setIndex) {
        //console.log ("openCardio", setIndex);
        cardioContentIndex = setIndex;
        checkCardioArrow();
        //console.log('openPara ' + setIndex );
        div_cardio.css('z-index', 100);
        div_cardio_content.css('z-index', 995);
        var tarLeft = -(setIndex) * contentWidth;

        div_cardio_scrollwrapper.css('left', tarLeft);
        cardioTweens[setIndex].play();
        //div_para_scrollwrapper.click(function() { closePara() } );
        //TweenMax.to(div_para_scrollwrapper, 1, { css:{left:tarLeft}, ease:Cubic.easeInOut } )
        //var duration = contentWidth/1200;
        TweenMax.to(div_cardio_wrapper, 1, { css: {left: 0}, ease: Cubic.easeInOut })

    }
    var closeCardio = this.closeCardio = function () {
        cardioTweens[cardioContentIndex].pause();
        cardioContentIndex = -1;
        //TweenMax.to(div_para_scrollwrapper, 1, { css:{left:contentWidth}, ease:Cubic.easeInOut, onComplete:closeParaComplete } )
        TweenMax.to(div_cardio_wrapper, 1, { css: {left: contentWidth}, ease: Cubic.easeInOut, onComplete: closeCardioComplete })
    }
    nextCardio = function () {
        if (cardioContentIndex >= 1) {
            return;
        }
        cardioTweens[cardioContentIndex].pause();
        scrollCardioTo(cardioContentIndex + 1);
    }
    prevCardio = function () {
        if (cardioContentIndex <= 0) {
            closeCardio();
            return;
        }
        cardioTweens[cardioContentIndex].pause();
        scrollCardioTo(cardioContentIndex - 1);
    }
    checkCardioArrow = function () {
        if (cardioContentIndex >= 1) {
            div_cardio_arrow_next.css('visibility', 'hidden');
        } else {
            div_cardio_arrow_next.css('visibility', 'visible');
        }
    }
    scrollCardioTo = function (setIndex) {
        cardioContentIndex = setIndex;
        checkCardioArrow();
        var tarLeft = -(setIndex) * contentWidth;
        cardioTweens[setIndex].play();
        //var duration = Math.abs(div_para_scrollwrapper.position().left-tarLeft)/1200;
        TweenMax.to(div_cardio_scrollwrapper, 1, { css: {left: tarLeft}, ease: Cubic.easeInOut })
    }
    closeCardioComplete = function () {


        div_cardio.css('z-index', 100);
        div_cardio_content.css('z-index', 50);
        div_cardio_wrapper.css('left', contentWidth);
        div_cardio_scrollwrapper.css('left', contentWidth);
    }


    initCardioTween = function () {

        cardioTweens = [];

        var item;
        var mytween;
        // cardio
        mytween = new TimelineMax({ pause: true, repeat: -1 });
        item = $('#cardiostress_content #cardio .ppg');
        mytween.insert(TweenMax.to(item, 0, { css: {width: 0, left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 273} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 0, left: 0 + 273 } }), 2);

        item = $('#cardiostress_content #cardio .ppg_wrapper');
        mytween.insert(TweenMax.to(item, 0, { css: {left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {left: -273 } }), 2);

        mytween.pause();

        cardioTweens.push(mytween);

        // stress
        mytween = new TimelineMax({ pause: true, repeat: -1 });

        item = $('#cardiostress_content #stress .img_stress .line');
        mytween.insert(TweenMax.to(item, 0, { css: {width: 0, left: 330} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 304} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {width: 0, left: 330 + 304 } }), 2);

        item = $('#cardiostress_content #stress .img_stress .line_wrapper');
        mytween.insert(TweenMax.to(item, 0, { css: {left: 0} }), 0);
        mytween.insert(TweenMax.to(item, 1, { css: {left: -304 } }), 2);

        item = $('#cardiostress_content #stress .img_stress .heart > .heart');
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), .8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 1);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), 1.8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 2);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: 1, scaleY: 1} }), 2.8);
        mytween.insert(TweenMax.to(item, .2, { css: {scaleX: .8, scaleY: .8} }), 0);

        mytween.pause();

        cardioTweens.push(mytween);

    }


    startCardioTween = function (index) {

    }
    stopCardioTween = function (index) {

    }


    // tinke color

    setTinkeColor = function (setIndex) {
        //console.log('setTinkeColor ' + setIndex );

        div_tinke_whole.children().each(
            function (index, item) {
                var jItem = $(item);
                if (index > 3) {
                    jItem.css('z-index', 1);
                } else if (index == setIndex) {
                    jItem.css('z-index', 20);
                    TweenMax.to(jItem, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut })
                } else {
                    jItem.css('z-index', index + 10);
                    TweenMax.to(jItem, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut })
                }
            }
        );
        div_tinke_parts_cap_top.children().each(
            function (index, item) {
                var jItem = $(item);
                if (index > 3) {
                    jItem.css('z-index', 1);
                } else if (index == setIndex) {
                    jItem.css('z-index', 20);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 1}, ease: Cubic.easeInOut })
                } else {
                    jItem.css('z-index', index + 10);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 0}, ease: Cubic.easeInOut })
                }
            }
        );
        div_tinke_parts_cap_btm.children().each(
            function (index, item) {
                var jItem = $(item);
                if (index > 3) {
                    jItem.css('z-index', 1);
                } else if (index == setIndex) {
                    jItem.css('z-index', 20);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 1}, ease: Cubic.easeInOut })
                } else {
                    jItem.css('z-index', index + 10);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 0}, ease: Cubic.easeInOut })
                }
            }
        );
        div_tinke_parts_body.children().each(
            function (index, item) {
                var jItem = $(item);
                if (index > 3) {
                    jItem.css('z-index', 1);
                } else if (index == setIndex) {
                    jItem.css('z-index', 20);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 1}, ease: Cubic.easeInOut })
                } else {
                    jItem.css('z-index', index + 10);
                    TweenMax.to(jItem, 0, { css: {autoAlpha: 0}, ease: Cubic.easeInOut })
                }
            }
        );

    }


    setAndroidTinkeColor = function (setIndex) {
        //console.log('setTinkeColor ' + setIndex );

        div_android_tinke_whole.children().each(
            function (index, item) {
                var jItem = $(item);
                if (index > 3) {
                    jItem.css('z-index', 1);
                } else if (index == setIndex) {
                    jItem.css('z-index', 20);
                    TweenMax.to(jItem, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut })
                } else {
                    jItem.css('z-index', index + 10);
                    TweenMax.to(jItem, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut })
                }
            }
        );

    }


    // indexes
    toggleIndexVita = function () {
        if (indexVitaShown) {
            indexVitaShown = false;
            TweenMax.to(div_index_vita, 1, { css: {height: 40}, ease: Cubic.easeInOut });
            div_index_vita_btn_icon.css('background-image', 'url("img/common/btn_more_white.png")');
            div_index_vita_btn_text.text("READ MORE");
            _gaq.push(["_trackEvent", "home", "view", "vita index", 1, true ]);
            //console.log(div_index_vita_btn.offset().top);
        } else {
            indexVitaShown = true;
            TweenMax.to(div_index_vita, 1, { css: {height: 180}, ease: Cubic.easeInOut });
            div_index_vita_btn_icon.css('background-image', 'url("img/common/btn_less.png")');
            div_index_vita_btn_text.text("READ LESS");
            _gaq.push(["_trackEvent", "home", "close", "vita index", 0, true]);

            //console.log((div_index_vita_btn.offset().top + 115) - (currentScroll+contentHeight));
            var offset = (div_index_vita_btn.offset().top + 115 + 100) - (currentScroll + contentHeight)
            if (offset > 0) {
                that.scrollToPosition(currentScroll + offset);
            }
        }
    }

    toggleIndexZen = function () {
        if (indexZenShown) {
            indexZenShown = false;
            TweenMax.to(div_index_zenIndex, 1, { css: {height: 65}, ease: Cubic.easeInOut });
            div_index_zenIndex_btn_icon.css('background-image', 'url("img/common/btn_more_white.png")');
            div_index_zenIndex_btn_text.text("READ MORE");
            _gaq.push(["_trackEvent", "home", "view", "zen index", 1, true]);
            //console.log(div_index_vita_btn.offset().top);
        } else {
            indexZenShown = true;
            TweenMax.to(div_index_zenIndex, 1, { css: {height: 245}, ease: Cubic.easeInOut });
            div_index_zenIndex_btn_icon.css('background-image', 'url("img/common/btn_less.png")');
            div_index_zenIndex_btn_text.text("READ LESS");
            _gaq.push(["_trackEvent", "home", "close", "zen index", 0, true]);

            //console.log((div_index_vita_btn.offset().top + 115) - (currentScroll+contentHeight));
            var offset = (div_index_zenIndex_btn.offset().top + 115 + 100) - (currentScroll + contentHeight)
            if (offset > 0) {
                that.scrollToPosition(currentScroll + offset);
            }
        }
    }


    toggleIOS = function () {
        if (deviceMode == DEVICE_IOS) {
            return;
        }
        toggleDevice();
    }
    toggleAndroid = function () {
        if (deviceMode == DEVICE_ANDROID) {
            return;
        }
        toggleDevice();
    }

    toggleDevice = function () {
        if (deviceMode == DEVICE_IOS) {
            deviceMode = DEVICE_ANDROID;
            div_android.css('display', 'block');
            TweenMax.to(div_android, .5, { css: {autoAlpha: 1}, ease: Cubic.easeIn });
            TweenMax.to(div_ios, .5, { css: {autoAlpha: 0}, ease: Cubic.easeOut });
            TweenMax.to(div_android_hand, .5, { css: {autoAlpha: 1}, ease: Cubic.easeIn });
            TweenMax.to(div_hand, .5, { css: {autoAlpha: 0}, ease: Cubic.easeOut });

            $('#toggleIOSBt').addClass('inactive');
            $('#toggleAndroidBt').removeClass('inactive');

            $('.selection .ios').addClass('inactive');
            $('.selection .android').removeClass('inactive');

            $('#lessAndroid1').css('display', 'block');
            $('#lessIOS1').css('display', 'none');

            $('#lessAndroid3').css('display', 'block');
            $('#lessIOS3').css('display', 'none');

        } else {
            deviceMode = DEVICE_IOS;
            TweenMax.to(div_android, .5, { css: {autoAlpha: 0}, ease: Cubic.easeOut, onComplete: disableAndroidLayer });
            TweenMax.to(div_ios, .5, { css: {autoAlpha: 1}, ease: Cubic.easeIn });
            TweenMax.to(div_android_hand, .5, { css: {autoAlpha: 0}, ease: Cubic.easeOut });
            TweenMax.to(div_hand, .5, { css: {autoAlpha: 1}, ease: Cubic.easeIn });

            $('#toggleIOSBt').removeClass('inactive');
            $('#toggleAndroidBt').addClass('inactive');

            $('.selection .ios').removeClass('inactive');
            $('.selection .android').addClass('inactive');

            $('#lessAndroid1').css('display', 'none');
            $('#lessIOS1').css('display', 'block');

            $('#lessAndroid3').css('display', 'none');
            $('#lessIOS3').css('display', 'block');

        }
    }
    disableAndroidLayer = function () {
        div_android.css('display', 'none');
    }


    // tween

    resetCSS = function () {
        index_arc.setArc(0);

        div_featurehand.css('top', contentHeight + 50);
        div_featurehandthumb.css('top', contentHeight + 50);

        div_product.css('opacity', '1');
        div_product.css('visibility', 'visible');
        div_product.css('left', '128px');
        div_product.css('top', '245px');

        TweenMax.to(div_product, 0, { css: {scaleX: 1, scaleY: 1} });

        div_colorselector.css('opacity', 0);

        div_iphoneholder.css('top', '-610px');
        div_iphoneholder.css('left', '600px');

        div_tinke_outline.css('opacity', 0);
        div_tinke_outline.css('visibility', 'hidden');

        div_tinke_light.css('opacity', 0);
        div_tinke_light.css('visibility', 'hidden');

        div_tinke_whole.css('opacity', '1');
        div_tinke_whole.css('visibility', 'visible');


        div_tinke_parts.css('opacity', 0);
        div_tinke_parts.css('visibility', 'hidden');

        div_tinke_parts_body.css('opacity', '1');
        div_tinke_parts_body.css('visibility', 'visible');

        div_tinke_parts_cap_top.css('top', '10px');
        div_tinke_parts_cap_top.css('opacity', '1');
        div_tinke_parts_cap_top.css('visibility', 'visible');

        div_tinke_parts_cap_btm.css('top', '300px');
        div_tinke_parts_cap_btm.css('opacity', 0);
        div_tinke_parts_cap_btm.css('visibility', 'hidden');

        div_side_nav.css('opacity', 0);
        div_side_nav.css('visibility', 'hidden');

        div_deviceToggle.css('opacity', 0);
        div_deviceToggle.css('visibility', 'hidden');

        div_para_content.css('top', div_para.position().top);
        div_para_scrollwrapper.css('width', 4 * contentWidth);

        div_cardio_content.css('top', div_cardio.position().top);
        div_cardio_scrollwrapper.css('width', 2 * contentWidth);

        div_btm_nav.css('top', '45px');

        var tarLeft = -paraContentIndex * contentWidth;
        TweenMax.killTweensOf(div_para_scrollwrapper);
        if (paraContentIndex == -1) {
            closeParaComplete();
        }
        div_para_scrollwrapper.css('left', tarLeft);

        var tarLeft = -cardioContentIndex * contentWidth;
        TweenMax.killTweensOf(div_cardio_scrollwrapper);
        if (cardioContentIndex == -1) {
            closeCardioComplete();
        }
        div_cardio_scrollwrapper.css('left', tarLeft);


        div_share_nodes.css('opacity', 0);
        div_share_nodes.css('visibility', 'hidden');

        div_share_badges.children().each(
            function (index, item) {
                var jItem = $(item);
                jItem.css('visibility', 'hidden');
                jItem.css('opacity', 0);
                TweenMax.to(jItem, 0, { css: {rotation: 181}});
            }
        );

        div_iphonescreens.each(
            function (index, item) {
                var jItem = $(item);
                jItem.css('visibility', 'hidden');
                if (index == 0) {
                    jItem.css('opacity', '1');
                } else {
                    jItem.css('opacity', '0');
                }
            }
        );

    }


    resetTween = function () {


        productAndroidTween = new TimelineMax({ pause: true });
        // 0 home 
        productAndroidTween.insert('home', 0);
        productAndroidTween.insert('colorselectorshow', .5);
        // 1 color
        productAndroidTween.insert('color', 1);
        productAndroidTween.insert('colorselectorhide', 1.2);
        productAndroidTween.insert('featurehandshow', 1.5);
        productAndroidTween.insert('feature', 1.5);
        // 2 feature (fixed)
        productAndroidTween.insert('featurehandhide', 2);
        productAndroidTween.insert('showrunningman', 2);
        //productAndroidTween.insert('featurehandhide', 2.2);

        // 3 cardio
        // 4 index (fixed)

        var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight) * .5;

        productAndroidTween.insert('index', getTweenPercent(getSectionScroll(4)) - .4);
        productAndroidTween.insert('lesspreinit', 4.4);
        productAndroidTween.insert('lessinit', 4.5);
        productAndroidTween.insert('lessstart', 4.6);

        // 5 transition
        productAndroidTween.insert('hiderunningman', 5);
        productAndroidTween.insert('captopoff', 5);
        productAndroidTween.insert('captopfade', 5.3);
        productAndroidTween.insert('capbtmfade', 5.7);
        productAndroidTween.insert('capbtmon', 5.5);

        // 6 transition (fixed)
        productAndroidTween.insert('lessalign', 6);
        productAndroidTween.insert('lessconnect', 6.4);
        productAndroidTween.insert('lesslight', 6.8);
        productAndroidTween.insert('lessup', 6.93);

        // 7 less is more (fixed)
        productAndroidTween.insert('lessright', 7.4);
        productAndroidTween.insert('sharedown', 7.6);

        // 8 share
        productAndroidTween.insert('softwareright', 8.5);
        // 9 transition
        productAndroidTween.insert('softwaredown', 9);
        // 10 mobile
        productAndroidTween.insert('sofwareup', 10.6);
        // 11 transition
        productAndroidTween.insert('phoneout', 11);
        // 12 transition (fixed)
        productAndroidTween.insert('cap2btmoff', 12 - .5);
        productAndroidTween.insert('cap2btmfade', 12.3 - .5);
        productAndroidTween.insert('cap2topfade', 12.7 - .5);
        productAndroidTween.insert('cap2topon', 12.5 - .5);
        // 13 mobility
        productAndroidTween.insert('pocketdown', 12.8);

        var colorShowY = contentHeight * .5 - 117;
        var featureHandStart = contentHeight + 50;
        var featureHandEnd = -540 - 74// contentHeight+400;
        var shareEnd = contentHeight * .5 - 50;
        var softwareRight = 165;
        var softwareDown = 680; //contentHeight*.5 + 400;
        var softwareUp = 200; //contentHeight*.5 + 400;
        var pocketDown = 300; //contentHeight*.5 + 400;


        productAndroidTween.insert(TweenMax.to(div_btm_nav, .1, { css: {top: '0px'} }), 'home');
        productAndroidTween.insert(TweenMax.to(div_side_nav, .5, { css: {autoAlpha: 1} }), 'colorselectorshow');
        productAndroidTween.insert(TweenMax.to(div_deviceToggle, .5, { css: {autoAlpha: 1} }), 'colorselectorshow');

        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {left: '128px'} }), 'home');
        productAndroidTween.insert(TweenMax.to(div_product, 1, { css: {top: colorShowY}, ease: Cubic.easeInOut }), 'home');
        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {left: '128px'} }), 'color');
        //productAndroidTween.insert( TweenMax.to(div_product, .5, { css:{left:'415px'}, ease:Cubic.easeInOut } ), 'feature' );
        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {left: '402px', top: 384 - 74, scaleX: .8, scaleY: .8 }, ease: Cubic.easeInOut }), 'feature');
        productAndroidTween.insert(TweenMax.to(div_tinke_outline, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'feature');
        productAndroidTween.insert(TweenMax.to(div_tinke_whole, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'feature');
        productAndroidTween.insert(TweenMax.to(div_product, 1, { css: {left: '402px', top: featureHandEnd - 76}, ease: Linear.easeNone }), 'featurehandhide');

        productAndroidTween.insert(TweenMax.to(div_product, .1, { css: {left: '100px', autoAlpha: 0, scaleX: 1, scaleY: 1}, ease: Cubic.easeInOut }), 'lesspreinit');
        productAndroidTween.insert(TweenMax.to(div_product, .1, { css: {top: contentHeight}, ease: Cubic.easeInOut }), 'lessinit');
        productAndroidTween.insert(TweenMax.to(div_tinke_outline, .1, {css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'lessinit');
        productAndroidTween.insert(TweenMax.to(div_tinke_parts, .1, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessinit');
        //productAndroidTween.insert( TweenMax.to(div_product, .1, { css:{left:'100px'}, ease:Cubic.easeInOut } ), 'lessinit' );
        productAndroidTween.insert(TweenMax.to(div_product, .01, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessstart');
        productAndroidTween.insert(TweenMax.to(div_product, .4, { css: {top: '250px'}, ease: Cubic.easeInOut }), 'lessstart');
        productAndroidTween.insert(TweenMax.to(div_product, .4, { css: {left: '383px'}, ease: Cubic.easeInOut }), 'lessalign');
        productAndroidTween.insert(TweenMax.to(div_product, .4, { css: {top: '135px'}, ease: Cubic.easeInOut }), 'lessconnect');
        productAndroidTween.insert(TweenMax.to(div_tinke_light, .05, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lesslight');
        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {top: '-365px'}, ease: Linear.easeNone }), 'lessup');

        productAndroidTween.insert(TweenMax.to(div_product, .1, { css: {left: '583px'}, ease: Cubic.easeInOut }), 'lessright');
        productAndroidTween.insert(TweenMax.to(div_product, .4, { css: {top: shareEnd}, ease: Cubic.easeInOut }), 'sharedown');

        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {left: softwareRight}, ease: Cubic.easeInOut }), 'softwareright');
        productAndroidTween.insert(TweenMax.to(div_product, .5, { css: {top: softwareDown}, ease: Cubic.easeInOut }), 'softwaredown');

        productAndroidTween.insert(TweenMax.to(div_product, .4, { css: {top: softwareUp}, ease: Cubic.easeInOut }), 'sofwareup');
        productAndroidTween.insert(TweenMax.to(div_tinke_light, .05, { css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'phoneout');

        productAndroidTween.insert(TweenMax.to(div_product, .3, { css: {top: pocketDown}, ease: Cubic.easeInOut }), 'pocketdown');
        productAndroidTween.insert(TweenMax.to(div_product, 1, { css: {top: '-750px'}, ease: Linear.easeNone }), 13.2);


        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_top, .5, { css: { top: '-100px'}, ease: Cubic.easeIn }), 'captopoff');
        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_btm, .5, { css: { top: '207px'}, ease: Cubic.easeOut }), 'capbtmon');

        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_top, .2, { css: { autoAlpha: 0}, ease: Cubic.easeInOut }), 'captopfade');
        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_btm, .2, { css: { autoAlpha: 0}, ease: Cubic.easeInOut }), 'capbtmon');


        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_top, .8, { css: { top: '10px'}, ease: Cubic.easeIn }), 'cap2btmoff');
        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_btm, .5, { css: { top: '300px'}, ease: Cubic.easeOut }), 'cap2btmoff');

        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_top, .6, { css: { autoAlpha: 1}, ease: Cubic.easeInOut }), 'cap2btmfade');
        productAndroidTween.insert(TweenMax.to(div_tinke_parts_cap_btm, .2, { css: { autoAlpha: 0}, ease: Cubic.easeInOut }), 'cap2btmfade');


        productAndroidTween.insert(TweenMax.to(index_arc, .4, { setArc: 75, ease: Cubic.easeInOut }), 'index');


        productAndroidTween.insert(TweenMax.to(div_colorselector, .1, { css: {autoAlpha: 0} }), 'home');
        productAndroidTween.insert(TweenMax.to(div_colorselector, .1, { css: {autoAlpha: 1} }), 'colorselectorshow');
        productAndroidTween.insert(TweenMax.to(div_colorselector, .1, { css: {autoAlpha: 0} }), 'colorselectorhide');


        productAndroidTween.insert(TweenMax.to(div_featurehand, .5, { css: {top: featureHandStart} }), 'home');
        productAndroidTween.insert(TweenMax.to(div_featurehand, .5, { css: {top: featureHandStart}, ease: Cubic.easeInOut }), 'color');
        productAndroidTween.insert(TweenMax.to(div_featurehand, .5, { css: {top: 460 - 74}, ease: Cubic.easeInOut }), 'featurehandshow');
        productAndroidTween.insert(TweenMax.to(div_featurehand, 1, { css: {top: featureHandEnd}, ease: Linear.easeNone }), 'featurehandhide');

        productAndroidTween.insert(TweenMax.to(div_featurehandthumb, .5, { css: {top: featureHandStart} }), 'home');
        productAndroidTween.insert(TweenMax.to(div_featurehandthumb, .5, { css: {top: featureHandStart}, ease: Cubic.easeInOut }), 'color');
        productAndroidTween.insert(TweenMax.to(div_featurehandthumb, .5, { css: {top: 460 - 74}, ease: Cubic.easeInOut }), 'featurehandshow');
        productAndroidTween.insert(TweenMax.to(div_featurehandthumb, 1, { css: {top: featureHandEnd}, ease: Linear.easeNone }), 'featurehandhide');


        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .4, { css: {top: '-400px'}, ease: Cubic.easeInOut }), 'lessstart');
        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .4, { css: {left: '320px'}, ease: Cubic.easeInOut }), 'lessalign');
        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .5, { css: {top: '-900px'}, ease: Linear.easeNone }), 'lessup');

        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .1, { css: {left: '520px'}, ease: Cubic.easeInOut }), 'lessright');
        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .4, { css: {top: shareEnd - 535}, ease: Cubic.easeInOut }), 'sharedown');

        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .5, { css: {left: softwareRight - 63}, ease: Cubic.easeInOut }), 'softwareright');
        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .5, { css: {top: softwareDown - 535}, ease: Cubic.easeInOut }), 'softwaredown');

        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .4, { css: {top: softwareUp - 535}, ease: Cubic.easeInOut }), 'sofwareup');
        productAndroidTween.insert(TweenMax.to(div_iphoneholder, .5, { css: {top: -900}, ease: Cubic.easeInOut }), 'phoneout');

        //productAndroidTween.insert( TweenMax.to(div_iphonescreens[0], .5, { css:{autoAlpha:1}, ease:Cubic.easeInOut } ), 'download' );
        //productAndroidTween.insert( TweenMax.to(div_iphonescreens[1], .5, { css:{autoAlpha:1}, ease:Cubic.easeInOut } ), 0 );
        productAndroidTween.insert(TweenMax.to(div_iphonescreens[2], .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 0);
        //productAndroidTween.insert( TweenMax.to(div_iphonescreens[3], .1, { css:{autoAlpha:1}, ease:Cubic.easeInOut } ), 'lesslight' );
        productAndroidTween.insert(TweenMax.to(div_iphonescreens[4], .3, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessright');
        productAndroidTween.insert(TweenMax.to(div_iphonescreens[5], .3, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'softwaredown');


        productAndroidTween.insert(TweenMax.to(div_share_nodes, .3, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 7.8);
        div_share_badges.children().each(
            function (index, item) {
                var jItem = $(item);
                productAndroidTween.insert(TweenMax.to(jItem, .1, { css: {rotation: 0, autoAlpha: 1}, shortRotation: true, ease: Cubic.easeOut }), 7.9 - (numBadges - index) * .02);

            }
        );


    }

    resetAndroidCSS = function () {

        div_android_featurehand.css('top', contentHeight + 50);
        div_android_featurehandthumb.css('top', contentHeight + 50);

        div_android_product.css('opacity', '1');
        div_android_product.css('visibility', 'visible');
        div_android_product.css('left', '128px');
        div_android_product.css('top', '225px');

        TweenMax.to(div_android_product, 0, { css: {scaleX: 1, scaleY: 1} });

        div_android_colorselector.css('opacity', 0);

        div_androidholder.css('top', '-610px');
        div_androidholder.css('left', '580px');

        div_android_tinke_outline.css('opacity', 0);
        div_android_tinke_outline.css('visibility', 'hidden');

        div_android_tinke_light.css('opacity', 0);
        div_android_tinke_light.css('visibility', 'hidden');

        div_android_tinke_whole.css('opacity', '1');
        div_android_tinke_whole.css('visibility', 'visible');

        div_android_connect.css('opacity', 0);
        div_android_connect.css('visibility', 'hidden');
        div_android_connect.css('top', contentHeight * .5 - 60);


        div_androidscreens.each(
            function (index, item) {
                var jItem = $(item);
                jItem.css('visibility', 'hidden');
                if (index == 0) {
                    jItem.css('opacity', '1');
                } else {
                    jItem.css('opacity', '0');
                }
            }
        );

    }


    resetAndroidTween = function () {


        productTween = new TimelineMax({ pause: true });
        // 0 home 
        productTween.insert('home', 0);
        productTween.insert('colorselectorshow', .5);
        // 1 color
        productTween.insert('color', 1);
        productTween.insert('colorselectorhide', 1.2);
        productTween.insert('featurehandshow', 1.5);
        productTween.insert('feature', 1.5);
        // 2 feature (fixed)
        productTween.insert('featurehandhide', 2);
        productTween.insert('showrunningman', 2);
        //productTween.insert('featurehandhide', 2.2);

        // 3 cardio
        // 4 index (fixed)

        var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight) * .5;

        productTween.insert('index', getTweenPercent(getSectionScroll(4)) - .4);
        productTween.insert('lesspreinit', 4.4);
        productTween.insert('lessinit', 4.5);
        productTween.insert('lessstart', 4.6);

        // 5 transition
        productTween.insert('hiderunningman', 5);
        productTween.insert('captopoff', 5);
        productTween.insert('captopfade', 5.3);
        productTween.insert('capbtmfade', 5.7);
        productTween.insert('capbtmon', 5.5);

        // 6 transition (fixed)
        productTween.insert('lessalign', 5);
        productTween.insert('lessconnect', 5.4);
        productTween.insert('lesslight', 6);
        productTween.insert('lessup', 6.65);

        // 7 less is more (fixed)
        productTween.insert('lessright', 7.4);
        productTween.insert('sharedown', 7.6);

        // 8 share
        productTween.insert('softwareright', 8.5);
        // 9 transition
        productTween.insert('softwaredown', 9);
        // 10 mobile
        productTween.insert('sofwareup', 10.6);
        // 11 transition
        productTween.insert('phoneout', 11.2);
        productTween.insert('phonelightout', 11.8);
        // 12 transition (fixed)
        productTween.insert('cap2btmoff', 12 - .5);
        productTween.insert('cap2btmfade', 12.3 - .5);
        productTween.insert('cap2topfade', 12.7 - .5);
        productTween.insert('cap2topon', 12.5 - .5);
        // 13 mobility
        productTween.insert('pocketdown', 12.8);

        var colorShowY = contentHeight * .5 - 117;
        var featureHandStart = contentHeight + 50;
        var featureHandEnd = -540 - 74// contentHeight+400;
        var shareEnd = contentHeight * .5 - 120;
        var lessStart = contentHeight * .5 - 120;
        var softwareRight = 60;
        var softwareDown = contentHeight * .5 - 120;
        var softwareUp = 200; //contentHeight*.5 + 400;
        var pocketDown = 390; //contentHeight*.5 + 400;

        //productTween.insert( TweenMax.to(div_btm_nav, .1, { css:{top:'0px'} } ), 'home' );
        //productTween.insert( TweenMax.to(div_side_nav, .5, { css:{autoAlpha:1} } ), 'colorselectorshow' );

        //productTween.insert( TweenMax.to(div_hand, .5, { css:{left:'-800px', autoAlpha:0} } ), 'home' );
        productTween.insert(TweenMax.to(div_android_product, .5, { css: {left: '128px'} }), 'home');
        productTween.insert(TweenMax.to(div_android_product, 1, { css: {top: colorShowY}, ease: Cubic.easeInOut }), 'home');
        productTween.insert(TweenMax.to(div_android_product, .5, { css: {left: '128px'} }), 'color');
        //productTween.insert( TweenMax.to(div_product, .5, { css:{left:'415px'}, ease:Cubic.easeInOut } ), 'feature' );
        productTween.insert(TweenMax.to(div_android_product, .5, { css: {left: '396px', top: 384 - 44 + 20, scaleX: .8, scaleY: .8 }, ease: Cubic.easeInOut }), 'feature');
        productTween.insert(TweenMax.to(div_android_tinke_outline, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'feature');
        productTween.insert(TweenMax.to(div_android_tinke_whole, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'feature');
        productTween.insert(TweenMax.to(div_android_product, 1, { css: {left: '405px', top: featureHandEnd - 76 + 20}, ease: Linear.easeNone }), 'featurehandhide');

        productTween.insert(TweenMax.to(div_android_product, .1, { css: {left: '170px', autoAlpha: 0, scaleX: 1, scaleY: 1}, ease: Cubic.easeInOut }), 'lesspreinit');
        productTween.insert(TweenMax.to(div_android_product, .1, { css: {top: contentHeight}, ease: Cubic.easeInOut }), 'lessinit');
        productTween.insert(TweenMax.to(div_android_tinke_outline, .1, {css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'lessinit');
        productTween.insert(TweenMax.to(div_android_tinke_whole, .1, {css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessinit');
        //productTween.insert( TweenMax.to(div_tinke_parts, .1, { css:{autoAlpha:1}, ease:Cubic.easeInOut } ), 'lessinit' );
        //productTween.insert( TweenMax.to(div_product, .1, { css:{left:'100px'}, ease:Cubic.easeInOut } ), 'lessinit' );
        productTween.insert(TweenMax.to(div_android_product, .01, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessstart');
        productTween.insert(TweenMax.to(div_android_product, .4, { css: {top: lessStart}, ease: Cubic.easeInOut }), 'lessstart');
        //productTween.insert( TweenMax.to(div_android_product, .4, { css:{left:'383px'}, ease:Cubic.easeInOut } ), 'lessalign' );
        //productTween.insert( TweenMax.to(div_android_product, .4, { css:{top:'135px'}, ease:Cubic.easeInOut } ), 'lessconnect' );
        productTween.insert(TweenMax.to(div_android_tinke_light, .05, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lesslight');
        productTween.insert(TweenMax.to(div_android_connect, .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessconnect');
        productTween.insert(TweenMax.to(div_android_product, .5, { css: {top: '-340px'}, ease: Linear.easeNone }), 'lessup');
        productTween.insert(TweenMax.to(div_android_connect, .5, { css: {top: '-340px'}, ease: Linear.easeNone }), 'lessup');

        productTween.insert(TweenMax.to(div_android_product, .1, { css: {left: '700px'}, ease: Cubic.easeInOut }), 'lessright');
        productTween.insert(TweenMax.to(div_android_product, .4, { css: {top: shareEnd}, ease: Cubic.easeInOut }), 'sharedown');

        productTween.insert(TweenMax.to(div_android_product, .5, { css: {left: softwareRight}, ease: Cubic.easeInOut }), 'softwareright');
        productTween.insert(TweenMax.to(div_android_product, .5, { css: {top: softwareDown}, ease: Cubic.easeInOut }), 'softwaredown');

        //productTween.insert( TweenMax.to(div_android_product, .4, { css:{top:softwareUp}, ease:Cubic.easeInOut } ), 'sofwareup' );
        productTween.insert(TweenMax.to(div_android_product, .8, { css: {left: 165}, ease: Cubic.easeInOut }), 'phoneout');
        productTween.insert(TweenMax.to(div_android_tinke_light, .05, { css: {autoAlpha: 0}, ease: Cubic.easeInOut }), 'phonelightout');

        productTween.insert(TweenMax.to(div_android_product, .3, { css: {top: pocketDown}, ease: Cubic.easeInOut }), 'pocketdown');
        productTween.insert(TweenMax.to(div_android_product, 1, { css: {top: '-600px'}, ease: Linear.easeNone }), 13.2);


        productTween.insert(TweenMax.to(div_android_colorselector, .1, { css: {autoAlpha: 0} }), 'home');
        productTween.insert(TweenMax.to(div_android_colorselector, .1, { css: {autoAlpha: 1} }), 'colorselectorshow');
        productTween.insert(TweenMax.to(div_android_colorselector, .1, { css: {autoAlpha: 0} }), 'colorselectorhide');


        productTween.insert(TweenMax.to(div_android_featurehand, .5, { css: {top: featureHandStart} }), 'home');
        productTween.insert(TweenMax.to(div_android_featurehand, .5, { css: {top: featureHandStart}, ease: Cubic.easeInOut }), 'color');
        productTween.insert(TweenMax.to(div_android_featurehand, .5, { css: {top: 460 - 74}, ease: Cubic.easeInOut }), 'featurehandshow');
        productTween.insert(TweenMax.to(div_android_featurehand, 1, { css: {top: featureHandEnd}, ease: Linear.easeNone }), 'featurehandhide');

        productTween.insert(TweenMax.to(div_android_featurehandthumb, .5, { css: {top: featureHandStart} }), 'home');
        productTween.insert(TweenMax.to(div_android_featurehandthumb, .5, { css: {top: featureHandStart}, ease: Cubic.easeInOut }), 'color');
        productTween.insert(TweenMax.to(div_android_featurehandthumb, .5, { css: {top: 460 - 74}, ease: Cubic.easeInOut }), 'featurehandshow');
        productTween.insert(TweenMax.to(div_android_featurehandthumb, 1, { css: {top: featureHandEnd}, ease: Linear.easeNone }), 'featurehandhide');


        productTween.insert(TweenMax.to(div_androidholder, .4, { css: {top: lessStart - 200}, ease: Cubic.easeInOut }), 'lessalign');
        //productTween.insert( TweenMax.to(div_androidholder, .4, { css:{left:'320px'}, ease:Cubic.easeInOut } ), 'lessalign' );
        productTween.insert(TweenMax.to(div_androidholder, .6, { css: {top: lessStart - 1000}, ease: Linear.easeNone }), 'lessup');

        productTween.insert(TweenMax.to(div_androidholder, .1, { css: {left: '520px'}, ease: Cubic.easeInOut }), 'lessright');
        productTween.insert(TweenMax.to(div_androidholder, .4, { css: {top: shareEnd - 405}, ease: Cubic.easeInOut }), 'sharedown');

        productTween.insert(TweenMax.to(div_androidholder, .5, { css: {left: softwareRight + 70}, ease: Cubic.easeInOut }), 'softwareright');
        productTween.insert(TweenMax.to(div_androidholder, .5, { css: {top: softwareDown - 200}, ease: Cubic.easeInOut }), 'softwaredown');

        //productTween.insert( TweenMax.to(div_androidholder, .4, { css:{top:softwareUp-405}, ease:Cubic.easeInOut } ), 'sofwareup' );
        productTween.insert(TweenMax.to(div_androidholder, 1, { css: {top: -900}, ease: Cubic.easeInOut }), 'sofwareup');
        //productTween.insert( TweenMax.to(div_androidholder, .5, { css:{top:-900}, ease:Cubic.easeInOut } ), 'phoneout' );

        productTween.insert(TweenMax.to(div_androidscreens[2], .5, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 0);
        //productTween.insert( TweenMax.to(div_androidscreens[3], .1, { css:{autoAlpha:1}, ease:Cubic.easeInOut } ), 'lesslight' );
        productTween.insert(TweenMax.to(div_androidscreens[4], .3, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'lessright');
        productTween.insert(TweenMax.to(div_androidscreens[5], .3, { css: {autoAlpha: 1}, ease: Cubic.easeInOut }), 'softwaredown');


    }


    getSectionScroll = function (index) {
        switch (index) {
            case 0: //home
                return 0;
                break;
            case 1: // color selector
                return contentHeight;
                break;
            case 2: // feature (para)
                var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight) * .5;
                return contentHeight * 2 + offset;
                break;
            case 3: // cardio
                return contentHeight * 2 + 1000;
                break;
            case 4: // index
                var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight) * .5;
                //var offset = contentHeight*.5;
                return contentHeight * 2 + 2000 + offset;
                break;
            case 5: // less
                var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight) * .5;
                return contentHeight * 3 + 4000 + offset;
                break;
            case 6: // share
                return contentHeight * 3 + 5000// + contentHeight*.1 ;
                break;
            case 7: // mobile
                return contentHeight * 4 + 5000 + contentHeight * .6;
                break;
            case 8: // mobility
                var offset = contentHeight > 1000 ? 0 : (1000 - contentHeight);
                return contentHeight * 7 + 6000 + 200;
                break;
        }
        return 0;
    }

    getTweenPercent = function (currentScroll) {

        sectionLength = [
            contentHeight //home
            , contentHeight //color
            , 1000 //feature
            , 1000 //cardio
            , 1000 //index
            , contentHeight //transition
            , 1000 //transition fix
            , 1000 //less is more
            , contentHeight //share
            , contentHeight //transition
            , contentHeight //mobile
            , contentHeight //transition
            , 1000 //transitionfix
            , 1000 //mobility
        ];


        var curLength = 0;
        var curSpace = 0;
        var chkLimit = 0;

        var n = sectionLength.length;
        for (var i = 0; i < n; i++) {

            curLength = chkLimit;
            curSpace = sectionLength[i];
            chkLimit = curLength + curSpace;
            if (currentScroll < chkLimit) {
                currentIndex = i;
                return (currentScroll - curLength) / curSpace + i;
            }

        }

        return 0;

    }

    function nextSection(e) {
        e.preventDefault();
        var index = nextBtns.index(this);
        //console.log("next", this, index);
        scrollToSection(index + 2);
    }


}