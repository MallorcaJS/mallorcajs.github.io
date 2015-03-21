/*!jQuery ToDos*/
/**
 * To Do List on template
 *
 * Version: 0.1
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2015 Diego Carrasco - @dcarrask
 *
 */

jQuery.toDos = function(requirements){    
	$initReq = '<button id="showReq">Show To Do List</button><div id="req"><div class="pluginWarning">jquery-to-dos.js :: WARNING :: Inlcude "to-dos.css" for STYLES</div></div>';
	$("body").append($initReq);

	$.each( requirements, function( key, value ) {
		$("#req").append('<div class="' + value + '">' + key + '</div>');
	});

	$("#showReq").click(function(){
		$("#req").toggle();
		if ($("#req").is(":visible")){
			$(this).html("Hide To Do List")
		} else {
			$(this).html("Show To Do List")
		}
	});
}