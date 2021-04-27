setTimeout(function() {
	$("html, body").animate({ scrollTop: 0 });
}, 500);

$('.menu-toggle').click(function(){
     $('.menu-widget').toggleClass('menu-closed menu-opened');
});


$('.menu-drop-link').on("mouseover", function () {
     $(this).next().toggleClass('menu-drop menu-drop-open');
});

$(".menu-drop-wrapper").mouseleave(function(){
	$(this).removeClass('menu-drop-open').addClass('menu-drop');
});