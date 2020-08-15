// JavaScript Document
$(document).ready(function(){
	$("button").click(function() {
		
		$("button").removeClass("current");
		$(this).addClass("current");
		
		$("div").removeClass("current");
		
		var tabId = $(this).attr("data-tab");
		
		$("#" + tabId).removeClass("current");
		$("#" + tabId).addClass("current");
	});
});

function chocolate() {
	var $servings1 = Math.round(Number($("#quantity").val()));
	if (isNaN($servings1)) {
		$('#test').text('Please enter a valid number');
	}
	else {
		$('#test').text('');
		$('#i1').text(($servings1 / 12).toFixed(2) + ' cups all-purpose flour');
		$('#i2').text(($servings1 / 12).toFixed(2) + ' cups sugar');
		$('#i3').text(($servings1 / 32).toFixed(2) + ' cups unsweetened cocoa powder');
		$('#i4').text(($servings1 / 12).toFixed(2) + ' tsp baking powder');
		$('#i5').text(($servings1 / 16).toFixed(2) + ' tsp baking soda');
		$('#i6').text(($servings1 / 24).toFixed(2) + ' tsp salt');
		$('#i7').text(($servings1 / 24).toFixed(2) + ' tsp espresso powder');
		$('#i8').text(($servings1 / 24).toFixed(2) + ' cup milk');
		$('#i9').text(($servings1 / 48).toFixed(2) + ' cup vegetable oil');
		$('#i10').text(($servings1 / 12).toFixed(2) + ' large eggs');
		$('#i11').text(($servings1 / 12).toFixed(2) + ' tsp vanilla extract');
	}
}

function cheesecake() {
	var $servings1 = Math.round(Number($("#quantity2").val()));
	if (isNaN($servings1)) {
		$('#test2').text('Please enter a valid number');
	}
	else {
		$('#test2').text('');
		$('#c1').text(($servings1 / 8).toFixed(2) + ' cups graham cracker crumbs');
		$('#c2').text(($servings1 / 2.4).toFixed(2) + ' tbsp unsalted butter');
		$('#c3').text(($servings1 / 8).toFixed(2) + ' cups granulated sugar');
		$('#c4').text(($servings1 / 2.5).toFixed(2) + ' 8-oz blocks of full-fat cream cheese');
		$('#c5').text(($servings1 / 10).toFixed(2) + ' cups sour cream');
		$('#c6').text(($servings1 / 10).toFixed(2) + ' tsp pure vanilla extract');
		$('#c7').text(($servings1 / 5).toFixed(2) + ' tsp fresh lemon juice');
		$('#c8').text(($servings1 / (10/3)).toFixed(2) + ' large eggs');
	}
}

function carrotcake() {
	var $servings1 = Math.round(Number($("#quantity3").val()));
	if (isNaN($servings1)) {
		$('#test3').text('Please enter a valid number');
	}
	else {
		$('#test3').text('');
		$('#ca1').text(($servings1 / 8).toFixed(2) + ' cups all-prupose flour');
		$('#ca2').text(($servings1 / 8).toFixed(2) + ' tsp baking soda');
		$('#ca3').text(($servings1 / 32).toFixed(2) + ' tsp fine sea salt');
		$('#ca4').text(($servings1 / (16/1.25)).toFixed(2) + ' tsp ground cinammon');
		$('#ca5').text(($servings1 / 12.8).toFixed(2) + ' cup vegetable oil');
		$('#ca6').text(($servings1 / 16).toFixed(2) + ' cup granulated sugar');
		$('#ca7').text(($servings1 / 16).toFixed(2) + ' cup brown sugar');
		$('#ca8').text(($servings1 / 16).toFixed(2) + ' tsp vanilla extract');
		$('#ca9').text(($servings1 / 4).toFixed(2) + ' large eggs');
		$('#ca10').text(($servings1 / (16/3)).toFixed(2) + ' cups grated, peeled carrots');
		$('#ca11').text(($servings1 / 16).toFixed(2) + ' coarsely chopped pecans');
	}
}