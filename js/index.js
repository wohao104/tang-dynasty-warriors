$(function () {
	$('#sideLeft').animate({'left':'8px'},500);
	$('#sideRight').animate({'right':'1px'},500);
	var slideLeft;
	var timeId;
	var slideIndex = 0;
	var scroTop = 0;
	var flag = false;
	$('.rightbar .code-tab > a').mouseenter(function(){
		var index = $(this).index();
		$(this).css({'backgroundColor':'white','color':'#24c797'}).siblings().css({'backgroundColor':'#a1b5c9','color':'white'})
		$('.rightbar .code > img').eq(index).show().siblings('img').hide();
	})
	$('.rightbar .close').click(function(){
		if(flag){
			$('.rightbar').animate({'right':'-200px'},500);
		}else{
			$('.rightbar').animate({'right':'0'},500);
		}
		flag = !flag;
	})
	$('.top-column > img').mouseenter(function(){
		$(this).css('opacity',0);
		$('.banner > .big-img').show();
	})
	$('.banner .big-img').mouseleave(function(){
		$('.top-column > img').css('opacity',1);
		$(this).hide();
	})
	$('.slideDot > a').click(function(){
		slideIndex = $(this).index();
		slideLeft = -slideIndex*600 + 'px';
		$(this).css('backgroundColor','#d4bc61').siblings().css('backgroundColor','#848484');
		$('.slideShow > ul').animate({'left':slideLeft});
	})
	$('.slideShow').mouseenter(function(){
		clearInterval(timeName);
	}).mouseleave(function(){
		timeName = setInterval(showBanner,3000)
	})
	function showBanner(){
		slideIndex++;
		if (slideIndex === 5) {
			slideIndex = 0;
		}
		$('.slideDot > a').eq(slideIndex).click()
	}
	var timeName = setInterval(showBanner,3000);
	setInterval(function(){
		clearInterval(timeId);
		timeId = setInterval(aware, 17);
	},2500);
	function aware() {
		scroTop = scroTop - 2;
		if (scroTop <= -150) {
			scroTop = 0;
		}
		var topye = scroTop + 'px';
		$('.slide-mesg > ul').css('top',topye);
		if (scroTop === -30 || scroTop === -60 || scroTop === -90 || scroTop === -120 || scroTop === 0) {
			clearInterval(timeId);
		}
	}
	$('.slide-hd > ul > li').mouseenter(function(){
		var index = $(this).index()
		$(this).children('a').css({
			'color':'#d4bc61',
			'borderBottom':'2px solid #d4bc61',
		}).parent().siblings().children('a').css({
			'color':'#666',
			'borderBottom':'',
		});
		$('.slide-bd > ul').eq(index).stop().css('display','block').animate({'opacity':'1'}).siblings().css({'opacity':'0','display':'none'});
	});
	$('.role-name > a').click(function () {
		$(this).addClass('bgc').siblings('a').removeClass('bgc');
		clearInterval(timeBubble);
		dots = [];
		ctx.clearRect(0, 0, bubble.width, bubble.height);
		var index = $(this).index() / 2;
		index = Math.floor(index);
		arrIndex = index;
		$('.role-bg > ul > li').eq(index).show().siblings().hide();
		$('.role-bg .person-sex').css({'top':'420px','opacity':'0'});
		$('.role-bg .person').eq(index).animate({'right':0},450,function(){
			$('.role-bg .role-logo').eq(index).animate({'left':'140px','opacity':'1'},80,function(){
				$('.role-bg .role-logo').eq(index).animate({'left':'90px','opacity':'1'},30,function(){
					$('.role-bg .role-logo').eq(index).animate({'left':'100px','opacity':'1'},8)
				})
				$('.role-bg .role-spe').eq(index).animate({'top':'318px','opacity':'1'},300).parent().siblings().children('.role-spe').css({'top':'380px','opacity':'0'});
				$('.role-bg .person-sex').animate({'top':'390px','opacity':'1'},300);
				$('.role-bg .more').eq(index).animate({'top':'430px','opacity':'1'},300).parent().siblings().children('.more').css({'top':'450px','opacity':'0'});
				clearInterval(timeBubble);
				timeBubble = setInterval(draw,1000/60);
			}).parent().siblings().children('.role-logo').css({'left':'0','opacity':'0'});
			$('.role-bg .role-poem').eq(index).animate({'left':'165px','opacity':'1'},80,function(){
				$('.role-bg .role-poem').eq(index).animate({'left':'115px','opacity':'1'},30,function(){
					$('.role-bg .role-poem').eq(index).animate({'left':'125px','opacity':'1'},8)
				})
			}).parent().siblings().children('.role-poem').css({'left':0,'opacity':0});
		}).parent().siblings().children('.person').css('right','-560px');
	});
	$('.person-man').click(function () {
		$(this).css('background','url(images/rolo_11_46b9ae3.png) no-repeat center');
		$('.person-wuman').css('background','url(images/rolo_00_ac779a8.png) no-repeat center');
		$(this).parent().parent().children('.person').children().eq(0).animate({'opacity':'1'}).siblings().css('opacity',0);
		arrIndex = 4;
	})
	$('.person-wuman').click(function () {
		$(this).css('background','url(images/rolo_01_040b4d9.png) no-repeat center');
		$('.person-man').css('background','url(images/rolo_10_237b7a2.png) no-repeat center');
		$(this).parent().parent().children('.person').children().eq(1).animate({'opacity':'1'}).siblings().css('opacity',0);
		arrIndex = 9;
	})
	$('.more').mouseenter(function(){
		$(this).css('background','url(images/more2_b45b6a2.png) 0 0 no-repeat');
	}).mouseleave(function(){
		$(this).css('background','url(images/more1_90fc313.png) 0 0 no-repeat');
	})
	$('.video-title > ul > li').mouseenter(function(){
		var index = $(this).index();
		$(this).css({'backgroundColor':'#d4bc61','color':'white'}).siblings().css({'backgroundColor':'white','color':'#d4bc61'});
		$('.video-conter > ul').eq(index).css('display','block').stop().animate({'opacity':'1'}).siblings().animate({'opacity':0}).css('display','none');
	})

	$('.video-conter ul li').mouseenter(function(){
		$(this).find('span').stop().animate({'opacity':'1'},300);
	}).mouseleave(function(){
		$(this).find('span').stop().css({'opacity':'0'});
	})

	$('.rightbar .code-tab > a').eq(0).mouseenter();
	$('.person-man').click();
	$('.role-name > a').eq(0).click();
	$('.slide-hd > ul > li').eq(0).mouseenter();
	$('.video-title > ul > li').eq(0).mouseenter();
	$('.slideDot > a').eq(0).click();
})
