/* =========================================================================

Nasser Maronie
https://codepen.io/nassermaronie/
https://github.com/firstpersoncode


  loadImages.js
  9/26/2016
  jQuery Plugin for loading effect when images still loading

  Invoke plugin
  $('#background > div').loadImages({
  		template : "<div class='box loading'>"+
  		    		"</div>",	//add your own loading element's template
  		callback : function(){
			console.log("some image loaded !") //callback when some image loaded
  		}
  });

  Loading element will be append into image's container (its parent).
  
========================================================================= */
(function($) {
    $.fn.loadImages = function(loadset) {

    	//default settings   
        var settings = $.extend({
            template: "<div class='loading'>"+//loading element
	    					"</div>",
	    	callback: null//callback
        }, loadset);

        return this.each( function() {

        	$(this)
        		.parent()//loading element will be inside selector's container
        		.addClass("ss-loading")
        		.append("<div class='loading-img'>"+settings.template+"</div>");
        	

        	$(this).each(function(){

        		var containerImgs = $(this).parent();//selector's container
        		containerImgs.css({//prevent the loading element from overflowing
        			position: 'relative',
        			overflow: 'hidden'
        		});

        		if(containerImgs.is('a')){//if the container is anchor link
        			containerImgs.css({	    				
        				display: 'inline-block'
        			});
        		}	

        		$(this).on('load', function(){//remove loading element
        			$(this)
        				.parent()
        				.find(".loading-img")
        				.fadeOut(function(){
        					// $(this).remove();  //we need to remove it in real life !
        				});

        			if ( $.isFunction( settings.callback ) ) {//callback when the element is loaded
        				settings.callback.call( this );
        			}
        		});
        	});

        	$(window).on('load', function(){//force remove loading element when document finish loading
        		$(".loading-img")
        			.fadeOut(function(){
        				// $(this).remove();  //we need to remove it in real life !
        			});
        	});
        });
    }
}(jQuery));//end plugin