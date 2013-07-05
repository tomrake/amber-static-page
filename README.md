amber-static-page
=================

A amber Hello World webapp.


The basic html file:


```html
<html>
  <head>
    <title>Amber Static App</title>
    <script src="./vendor/amber/js/amber.js" type="text/javascript"></script>
  <script type="text/javascript"> 
	console.log("loadAmber..");
	loadAmber({
		files: ['StaticPage'],
		packageHome: './',
		ready: function() {
			smalltalk.StaticPage._new()._begin(); 
		}}); 
	</script>
  </head>
  <body>
  </body>
</html>
````


```smalltalk
begin
	self appendToJQuery: 'body' asJQuery
````

```smalltalk
renderOn: html
	html h2: 'Hello World!!'
````
