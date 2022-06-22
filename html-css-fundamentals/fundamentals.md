# HTML & CSS Fundamentals Practical

The aim of this document is to test your understanding of the core fundamentals around HTML and CSS.

## Answering Questions

Included within the answers directory are HTML files you can use when answering the questions listed below. Each file corresponds
with a subsection below. When you're ready, you will submit these files for review.

## HTML

### Introduction

HyperText Markup Language (HTML) is the most basic building block of the internet. It defined the structure of a web page
while other technologies assist to define the appearance (CSS) and behaviour (JavaScript). This section will test your
knowledge of the fundamentals around HTML.


### Anatomy of an HTML element

Every HTML element has tags representing what kind of HTML element it is and how it behaves.

Using HTML, define an example of

- a div element
- a paragraph element with some text inside it
- a span element, also with text inside it
- a button element with "Click Me" displayed on it

### Attributes

Attributes can be added to HTML elements which define additional characteristics about the element as well as alter the look and behaviour.

Using HTML, Set attribute(s)...

- with name class and a value "my-paragraph" on a paragraph element
- with name id and a value of "p1" on the same paragraph element
- on a paragraph element with content inside which hides the paragraph element
- on an image element that will display the following [image](https://pbs.twimg.com/media/DFsxjk5XUAEP30U.jpg). URL for reference:https://pbs.twimg.com/media/DFsxjk5XUAEP30U.jpg
- on a link that will navigate to Google's home page but open in a new tab

### Nesting Elements

Elements can be nested inside other elements. It is important to make sure your elements are properly nested i.e. when to open and close nested elements

Using HTML, define the following

- a span, inside a paragraph, inside a div
- a select element with a choice of 5 different soft-drinks
- an unordered shopping list
- an ordered list of cooking instructions
- an ordered list with a sub-list of items like in this [example](https://res.cloudinary.com/practicaldev/image/fetch/s--GDSzEv4i--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcfdsa2hijpzpai2g335.PNG)
- a list of links to various sites of your choosing

### Empty Elements

Elements that do not have a closing tag are referred to as empty elements.

Defined the following:

- An image element
- An input element of type text
- An input element of type button
- An input element of type range, with a minimum value of 5 and a maximum value of 10

### Accessibility

Accessibility is an essential part of ensuring a web page and its features are accessible to anyone, regardless their ability to use the web.

Question 1:

Instead of defining the following:
```html
<div role="checkbox" aria-checked="false" tabindex="0"></div>
```
please define what is considered best practice.

Question 2:

Given three spans as defined below:
```html
<span id="span1">Interactive Item 1</span><span id="span2">Interactive Item 2</span><span id="span3">Interactive Item 3</span>
```
please update the spans such that they could be reached using the keyboard

Question 3:

Please update the following input such that when it is focused, a screen reader will read out "First Name"
```html
<input type="text">
```

Question 4:

Given the following:
```html
<div id="alert-dialog">
    <h1 id="alert-heading">Error!</h1>
    <p id="alert-message">You have not yet saved your work, would you like to continue?</p>
    <button>No</button><button>Yes</button>
</div>
```
If it were acting as an alert dialog which is intended to communicate an important message and acquire a response from the user,
please update the example to ensure the correct pattern's roles and attributes are applied    

# CSS  
## Selectors
CSS selector allow you to retrieve elements from a webpage, there are a few different ways to select elements.

Query for the div element using each one of the below.
 - \#
 - .
 - my-element
 - [name=value] 

HTML markup
```html
<body>
    <div id="my-id" class="my-class" data-id="123"></div>
</body>
```

Please add the selectors to the style element below
```html
<style>
    your selectors here...
</style>
```

## Border, Margin, Padding, Font Style
Please provide the CSS to create this  
![Example 1](/html-css-fundamentals/img/e1.PNG)  


Using the following HTML 
```html
<div id="my-box">
    <span id="my-span1">Hello</span>
    <span id="my-span2">World</span>
</div>
```

## Position
Please recreate the following example  
![Example 2](/html-css-fundamentals/img/e2.PNG)  

Using this HTML
```html
<body>
    <div id="div1">Box 1</div>
    <div id="div2">Box 2</div>
    <div id="div3">Box 3</div>
    <div id="div4">Box 4</div>
</body>
```

## Transition and pseudo classes
Please recreate the following  
![Example 4](/html-css-fundamentals/img/e6.gif)  
Using this HTML
```html
<body>
    <div id="target1"></div>
    <div id="target2"></div>
    <div id="target3"></div>
</body>
```

## Flexbox
Set up an HTML example with CSS where changing one CSS property will change the flexbox layout from this. Please provide html and CSS used to set this up.  
![Example 3](/html-css-fundamentals/img/e3.PNG)  
to this  
![Example 4](/html-css-fundamentals/img/e4.PNG)  

## Grid

Using this HTML please recreate the following example using CSS

```html
<body>
    <div id="grid">
        <div id="div1"><span>Item 1</span></div>
        <div id="div2"><span>Item 2</span></div>
        <div id="div3"><span>Item 3</span></div>
        <div id="div4"><span>Item 4</span></div>
    </div>
</body>
```
Example  
![Example 5](/html-css-fundamentals/img/e5.PNG)




