//-----------------------
//PC
//-----------------------
$(function () {
	$(".menu-toggle").click(function () {
		$(this).next("div").slideToggle(200);
		$(this).parent("li").toggleClass("menu-toggle-open");
	});
});


//-----------------------
//menu
//-----------------------
$(function () {
	$(window).on('load resize', function () {
		$("#openNav").css("height", window.innerHeight);
	});

	var state = false;
	var scrollpos;
	//SP menu
	$(".navBtn").click(function () {
		$(".navBtn,#openNav,body").toggleClass("open");
		if (state == false) {
			scrollpos = $(window).scrollTop();

			setTimeout(function () {
				var wH = $(window).height();
				$('body').css({ 'height': wH });
			}, 500);
			state = true;
		} else {
			$('body').css({ 'height': 'auto' });
			window.scrollTo(0, scrollpos);
			state = false;
		}
	});

	$("#openNav .closeBtn").click(function () {
		$('body').css({ 'height': 'auto' });

		$(".navBtn,#openNav,body").removeClass("open");
		window.scrollTo(0, scrollpos);
		state = false;
	});

	$('#gNav li').on({
		'mouseenter': function () {
			setMenu = $(this).attr("id");
			var t = setTimeout(function () {
				//		console.log('107LINE');
				$("#" + setMenu + '> .gnavSubMenu').fadeIn(200);
			}, 300);
			$(this).data('timeout', t);
		},
		'mouseleave': function () {
			clearTimeout($(this).data('timeout'));
		}
	});
	var timerId, timerId2, timerId3, timerId4;
	$("#navMenu01").on("mouseleave", function () {
		timerId = setTimeout(function () {
			$("#navMenu01 > .gnavSubMenu").fadeOut();
		}, 200);
	}).mouseover(function () {
		clearTimeout(timerId);
	});

	$("#navMenu02").on("mouseleave", function () {
		timerId2 = setTimeout(function () {
			$("#navMenu02 > .gnavSubMenu").fadeOut();
		}, 200);
	}).mouseover(function () {
		clearTimeout(timerId2);
	});

	$("#navMenu03").on("mouseleave", function () {
		timerId3 = setTimeout(function () {
			$("#navMenu03 > .gnavSubMenu").fadeOut();
		}, 200);
	}).mouseover(function () {
		clearTimeout(timerId3);
	});

	$(".subMenu2").hover(function () {
		$(".subList2").fadeIn();
	});
	$(".subMenu2").on("mouseleave", function () {
		timerId4 = setTimeout(function () {
			$(".subList2").fadeOut();
		}, 200);
	}).mouseover(function () {
		clearTimeout(timerId4);
	});
});


function fadeAnime() {
	$('.fadeUpTrigger').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');
		} else {
			$(this).removeClass('fadeUp');
		}
	});
}

$(window).scroll(function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
});
