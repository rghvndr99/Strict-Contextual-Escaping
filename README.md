
# Strict-Contextual-Escaping

***

## Objective
  Understanding Trusted/non-trusted html(sce) in angular. 

## Strict-Contextual-Escaping
 Strict Contextual Escaping (SCE) is a mode in which AngularJS constrains bindings to only render trusted values.
 By default,Angular treats every element as un-trusted and renders it as it is.
 For example,
  We have a comment area where user can type any comment and this needs to show in 'all comments' section.Now if user needs a heading with bold text, then probably he will write like 
![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/comment.PNG)

 But output will be different(Actually it will be rendered in row format, headingTag tag will not work).  
![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/outComment.PNG)

## code Explanation

  In this app,I have tree sections.  
 1. Rendering of Element
 2. Droppable Area(where trusted html is rendered) 
 3. Droppable Area(where non-trusted html is rendered)

  ![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/full%20view.png?raw=true)

### App Initialisation  

Including $sce as dependency.  

![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/main.PNG)  

### Controller  

   In contoller, there are 4 elements in json format, that are getting rendered on UI.
   ![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/Ctrl.PNG)

### droppable directive (for Trusted Html)  

     Once an element is dropped,First I find the dropped element(text) and then using $sce service  and     getTrustedHtml(),marked it as safe html.This html is assigned to 'ng-bind-html' which renderes the actual html (with formating).  

code  

![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/trustCode.PNG?raw=true) 
 
output  

![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/trusted.png) 

### droppable directive (for Non-trusted Html)  

    This directive is same as the previous one.Here I am not converting dropped element(text) as safe html and that's why it is rendered in row format(without any formatting).  

code
![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/NonTructDir.PNG)  

output  

![](https://github.com/rghvndr99/Strict-Contextual-Escaping/blob/master/images/nontrusted.png?raw=true)

***

# Key points  

### $sce    
  angular provides a $sce service.This service come with no of methods,getTrustedHtml()is one of them.Using this method,we tell angular that the given html is trusted.Hence render it is in safe(formatted) mode.

### ng-bind-html
  The 'ng-bind-html' directive calls $sce.parseAsHtml() behind the scenes and binds the value to the DOM element.

## Resorces
  You can check this link for more details.  

[$sce](https://docs.angularjs.org/api/ng/service/$sce).  

[Security](https://www.ng-book.com/p/Security/)
