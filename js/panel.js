jQuery(document).ready(function($){
	$(".flip").toggle(function(){
	$(".panel").fadeIn(500);
	},function(){
	$(".panel").toggle()
	});
});