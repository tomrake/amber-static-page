smalltalk.addPackage('StaticPage');
smalltalk.addClass('StaticPage', smalltalk.Widget, [], 'StaticPage');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'execution',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.StaticPage)})},
args: [],
source: "begin\x0a\x09self appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.StaticPage);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h2_("Hello World!");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.StaticPage)})},
args: ["html"],
source: "renderOn: html\x0a\x09html h2: 'Hello World!'",
messageSends: ["h2:"],
referencedClasses: []
}),
smalltalk.StaticPage);



