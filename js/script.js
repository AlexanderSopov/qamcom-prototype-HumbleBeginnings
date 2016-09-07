$(document).ready(() => {
	$(".container > *").each((i, el)=>{
		module.fadeIn($(el));
	});
});

var module = (function(){
	var animationTime = 400;
	function fadeIn(el){
		el.fadeIn(animationTime);
		el.animate({
			left:"0px",
		}, {
			duration: animationTime,
			queue: false
		});
	}
	return {fadeIn:fadeIn};
})();