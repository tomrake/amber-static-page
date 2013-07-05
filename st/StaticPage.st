Smalltalk current createPackage: 'StaticPage'!
Widget subclass: #StaticPage
	instanceVariableNames: ''
	package: 'StaticPage'!

!StaticPage methodsFor: 'as yet unclassified'!

begin
	self appendToJQuery: 'body' asJQuery
!

renderOn: html
	html h2: 'Hello World!!'
! !

