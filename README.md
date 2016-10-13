# jQuery Images Loading Effect 1.1
jQuery Plugin for loading effect when images still loading.

Nasser Maronie
* [Demo](http://codepen.io/nassermaronie/pen/RGVWYY)
* [github](https://github.com/firstpersoncode/jquery-images-loading-effect)


  loadImages.js 1.1
  
  Invoke plugin

   ```javascript
     	//init plugin
     	$('img').loadingEffect(
          "<div class='loading'></div>", //loading template
          function(){
          
          //callback after img loaded..

      });
  ```

 Loading element will be append into image's container (its parent).
 work for ```<img src="some/image" /> & <div style="background: url(background/image);"></div>```

