/* =========================================================================

Nasser Maronie
https://codepen.io/nassermaronie/
https://github.com/firstpersoncode


  loadImages.js

  jQuery Plugin for loading effect when images still loading

  How to use

  Invoke plugin

  $('img').loadingEffect(
    "<div class='loading'></div>", //loading template
    function(){
    
    //callback after img loaded..

  });

    Loading element will be append into image's container (its parent).
  
========================================================================= */
(function($) {//loading effect
    $.fn.loadingEffect = function(template, callback) {
        return this.each( function() {
            if(typeof template == "undefined"){
                template = "<div class='loading'></div>"
            }
            $(this)
                .parent()//loading element will be inside selector's container
                .addClass("ss-loading")
                .append("<div class='loading-img'>"+template+"</div>");                      
            //loading handler
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

                    if ( typeof callback != "undefined" && $.isFunction( callback ) ) {//callback when the element is loaded
                        callback.call(this);
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