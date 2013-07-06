Smalltalk current createPackage: 'StaticPage'!
Widget subclass: #StaticPage
	instanceVariableNames: ''
	package: 'StaticPage'!

!StaticPage methodsFor: 'execution'!

begin
	self appendToJQuery: 'body' asJQuery
! !

!StaticPage methodsFor: 'rendering'!

renderOn: html
	html h2: 'Hello World!!'
! !

