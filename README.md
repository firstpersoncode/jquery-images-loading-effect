# jQuery Images Loading Effect 1.0
jQuery Plugin for loading effect when images still loading.

Nasser Maronie
* [Demo](http://codepen.io/nassermaronie/pen/RGVWYY)
* [github]()


  loadImages.js 1.0
  
  Invoke the plugin with settings
   ```javascript
     	//init plugin
     	$('img').loadImages({
     		template : "<div class='box loading'>"+
     		    		"</div>"//add your own loading template
     	});

       	$('#background > div').loadImages({
     		template : "<div class='box loading'>"+
     		    		"</div>"//add your own loading template
     	});
  ```

 Loading element will be append into image's container (its parent).

