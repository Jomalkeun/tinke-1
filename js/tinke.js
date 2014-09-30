var Tinke = function() {

    var win, doc;
    var sectionLength = [], sectionIndex = [];

    var tinke;

	this.taehoon = function () {
		//도큐먼트, 윈도우 객체 캐싱
		doc = $(document);
		win = $(window);

		//윈도우객체 이벤트 바인딩
		win.bind('scroll', this.onWindowScroll);
//		win.resize(this.onWindowResize);

        tinke = $('#tinke');

        $('[data-section]').each(function() {
            sectionIndex.push(
                parseFloat((($(this).offset().top - (win.height()/2))/1000 ).toFixed(1))
            );
        });

        console.log(sectionIndex)
        this.onWindowScroll();
	};

    this.onWindowScroll = function() {
        var st = (win.scrollTop()/1000).toFixed(1);

        if (0 <= sectionIndex[1]) { youngin(st); }

        if (sectionIndex[1] < st && st < sectionIndex[2]) {
            console.log('case_1')
        } else if (sectionIndex[2] < st && st < sectionIndex[3]) {
            taehoon2()
            console.log('case_2')
//        } else if (sectionIndex[2] < st && st < sectionIndex[3]) {
//            console.log('case_4')
//        } else if (sectionIndex[3] < st && st < sectionIndex[4]) {
//            console.log('case_5')
//        } else if (sectionIndex[4] < st && st < sectionIndex[5]) {
//            console.log('case_6')
//        } else if (sectionIndex[5] < st && st < sectionIndex[6]) {
//            console.log('case_7')
//        } else if (sectionIndex[6] < st && st < sectionIndex[7]) {
//            console.log('case_8')
        }
    };

    function youngin(top) {
        if (top = 0)
            tinke.css({ position: 'absoulte' });
        else
            tinke.css({ position: 'fixed' });
    };

    function taehoon2(top) {
        var ml = parseInt(tinke.css('margin-left').replace('px', ''));

        mytween = new TimelineMax({ pause: true, repeat: -1 });
        mytween.insert(TweenMax.to(tinke, 0, { css: {marginLeft: -330} }),2);
        mytween.insert(TweenMax.to(tinke, 1, { css: {marginLeft: -30} }), 0);



    };
};