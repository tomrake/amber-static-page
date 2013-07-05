smalltalk.addPackage('StaticPage');
smalltalk.addClass('StaticPage', smalltalk.Widget, [], 'StaticPage');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.StaticPage)})},
messageSends: ["appendToJQuery:", "asJQuery"]}),
smalltalk.StaticPage);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h2_("Hello World!");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.StaticPage)})},
messageSends: ["h2:"]}),
smalltalk.StaticPage);



