// sean fun

function l(o){ console.log(o)
}

var home = {
	container : $('.home'),
	headerHeight : $('header').height(),
	navHeight : $('nav').outerHeight(),
	wH : $(window).height(),

	remainingHeight : function(){
		return	Math.round(this.wH - (this.headerHeight + this.navHeight))

	},
	scaleHome : function(){
		this.container.css({
		 'height' : this.remainingHeight()
		});
	}
}

var nav = {
	isClosed : true,
	studioPos : $('#studio').offset().left
}	

$(function(){
	//home.scaleHome();	
	console.log('HONK');

	$('#first, #second, #third, #fourth, #fifth').thumbnailScroller({ 
		scrollerType:"hoverAccelerate", 
		scrollerOrientation:"horizontal", 
		scrollEasing:"easeOutCirc", 
		scrollEasingAmount:800, 
		acceleration:4, 
		scrollSpeed:800, 
		noScrollCenterSpace:10, 
		autoScrolling:0, 
		autoScrollingSpeed:2000, 
		autoScrollingEasing:"easeInOutQuad", 
		autoScrollingDelay:500  
	});

});


$(window).on('resize', function(){
	home.wH = $(window).height();
	//home.scaleHome();	
	console.log('resized');

	nav.studioPos = $('#studio').offset().left;
	$('ul.studio').css({
		'left' : nav.studioPos
	});
});

$('#studio').on('click', function(event){
	event.preventDefault();
	$('ul.studio').css({
		'left' : nav.studioPos
	});
	l('clicked ' + nav.isClosed);
	if(nav.isClosed) {
		$('ul.studio').addClass('open');
		nav.isClosed = false;
	} else {
		$('ul.studio').removeClass('open');
		nav.isClosed = true;
	}
});