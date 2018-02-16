// JavaScript Document
$(document).ready(function () {
	"use strict";
	
var array_quotes = new Array();

	$.get('quotes.txt', function (data) {
		array_quotes = data.split(/\n/g);
		var i = 0;
		

		
		$('#buttonn').click(function () {
			var rand = array_quotes[Math.floor(Math.random() * array_quotes.length)];
		
		$('#quotes_space').text(rand);

	});
	

	});
	

	

});
