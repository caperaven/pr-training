# HTML & CSS Fundamentals study guide

Included within this document is a list of fundamental concepts regarding two of the web's core building blocks - HTML and CSS.
Links to further materials and resources are provided within each subsection.
Once you have worked your way through this document, it is expected that you will have a grasp on the core concepts of HTML and CSS.

## HTML

HTML (HyperText Markup Language) defines the structure and content of a web page. Ultimately, it consists of a series of elements
which you use to wrap different parts of a web page's content to make it appear or behave in a certain way.
Within this section is a brief breakdown of the core HTML fundamentals.

A good place to start learning about HTML is MDN's [HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#so_what_is_html),
which outlines the basic building blocks of HTML. You can read up until the Images section to get a good idea of how to define
an HTML element, nesting elements inside one another, what empty elements are, as well as the basic anatomy of an HTML document.

### HTML Elements

#### Defining HTML Elements

Looking through the HTML Basics article above, you would have seen that a typical HTML element is defined using tags,
and that there are two types of HTML elements: open and closed elements.

Example of a paragraph element, defined by it's open &lt;p> tag, the text content in the middle of the two tags, and the 
closing &lt;p\>:
```html
  <p>This is an example of an open paragraph element</p>
```

Example of a closed input element, defined only by its &lt;input> tag:
```html
  <input>
```

Another great resource to work through is CodeAcademy's [Elements and Structure course](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements). 
CodeAcademy offers a free platform to learn the basics of HTML, CSS & JavaScript and offer short courses that will teach you theory and reinforce concepts with
short practical based questions. The Elements and Structure course is a good place to get a deeper look at concepts touched on in the MDN article above.

#### Element Types

There are an incredible amount of elements, each with their own rules and purposes. Below are some of the more common HTML elements which are useful to know:

- [body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body): Represents the content of an HTML document. There can only ever be one body element in a document.
- [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main): Used to represent the dominant content of the [&lt;body>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body) of a document.
- [div](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div): Arguably the web's most used and generic element. The div does not inherently represent anything, but is used as a container to group and divide content. It is important to note the div element is only used when there are no other [semantic HTML elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html) that will represent the content being surrounded in a more appropriate manner.
- [span](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span): Another one of the web's most used generic element. Like the div, the span is also a generic container, however they differ in how they affect the HTML content they surround. Div elements are inherently [block-level](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) whereas spans are referred to as being [inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements). This will be discussed further in the CSS section to come, but it is an important distinction to make. Like Divs, spans should be used only when no other semantic element is appropriate
- [p](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p): Represents a paragraph element. Usually represented as blocks of text.
- [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul): Represents an unordered list of items, typically rendered as a bulleted list.
- [ol](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol): The ordered list represents a list of ordered items, typically rendered as a numbered list.
- [li](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li): The list item element is used to represent an item in a list. They are typically placed within the &lt;ul> and &lt;ol> elements.
- [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input): Used to create an interactive control for the web. There are different types of input elements which can be specified using their type attribute. More on this when we talk about attributes.
- [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select): Also an interactive element that provides a menu of options
- [option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option): Used to define an item contained in &lt;select>, [&lt;optgroup>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup), and [&lt;datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) elements
- [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) An interactive element that can be activated by the user and performs a programmable action.
- [a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a): Know as an anchor element and used to create a hyperlink that can link to anything a URL can address (i.e. web pages, email addresses, locations on the same web page etc.)
- [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav): The navigation section element is used to represent a section of the page used to provide navigational links either within the current document, or to other documents.
- [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header): Represents introductory content, usually a group of introductory navigational aids. 
- [h1-h6](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements): The &lt;h1> to &lt;h6> elements represent the various levels of section headings, &lt;h1> being the highest, and &lt;h6> being the lowest.
- [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer): Contains information about the author of the section, copyright data or links to related documents.
- [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section): Represents a generic standalone section of a document that doesn;t have a more specific element to represent it. They should usually have an associated heading.
- [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article): Represents a self-contained item of content in a document, page, application or site, which is intended to be independently distributable or reusable.
- [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside): A portion of a document whose content is only indirectly related to the document's main content.
- [svg](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg): A powerful element that ultimately allows you to define SVG documents, or to embed an SVG fragment inside an SVG or HTML document.
- [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template): Provides a mechanism for holding HTML that is not rendered when the page is initially loaded, but can be created at runtime using Javascript.

For a breakdown on all the HTML elements available, you can refer to MDN's [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).
This is a great resource to bookmark as it provides each HTML tag, a link to the documentation of that element, and a short description of what that element represents.

#### Element Attributes

In looking through the above elements, you must have come across attributes. Attributes define additional characteristics
or properties of the element, for example, the **type** of input you would want to interact with, or the **width** and **height** of 
an element. 

Each element has its own set of standard attributes. It's not important to know each and every attribute for every element, 
but it is important to know what attributes are, and where you could go to find out what attributes can be set on which elements and the effect of doing so.  
There is a list of [Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
that consists of attributes shared by all HTML elements, however some global attributes will not have an effect on some elements.

Attributes are always defined on the start tag of an element. Take a look at the input elements with attributes defined below:

```html
<input type="text">
```
Above is an input element with the type attribute set. In this case we are specifying the type of the input needs to be text and is rendered as:

<input type="text">

```html
<input type="number">
```
Here we're also using an input element, however in this case we're setting the type to be number, and will only accept 
numbers as inputs. If you try and type letters into the input, it will not respond, it will only respond when numbers are inputted:

<input type="number">

You will also notice, although it looks very similar to the text input in the previous example, it is has a different response when you
hover your mouse over it, displaying two controls you can interact with to cycle the number in the input up or down.

```html
<input type="color">
```
<input type="color">

In this final input example, we are setting the type to "color" which in-turn creates a colour picker tool which is significantly
different to the number and text inputs previously mentioned.

As shown in the example above, attributes can affect both the look and behaviour of an element. [MDN](https://developer.mozilla.org/en-US/) is the go-to resource when looking at a new element you haven't
used before, as there is usually an Attributes section detailing the standard attributes that can be set on the element, as well as their affect. Take
a look at the [Attributes section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes) for the input element as an example.

#### HTML document structure

Every HTML document follows a similar sort of pattern which is outlined in the following resource: [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#anatomy_of_an_html_document).

There are two important elements that help bring in the functionality of the other core technologies of the web, being CSS and JavaScript, and they are the 
[style](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style), and [script](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) elements.
Now at this point, your knowledge on CSS and JavaScript might be minimal-to-none, and that's fine. It's just important to know
these two elements exist and that they assist in bringing in CSS and JavaScript into a document. They are however not the only ways
of achieving this. But you will learn more on incorporating CSS and JavaScript into your web pages in time.

#### HTML Debugging

It is important to have an idea of how to debug HTML issues when they arrive. MDN provide an active learning article
that deals with HTML debugging. Please work through the [Active learning: Studying permissive code](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML#active_learning_studying_permissive_code)
example which will walk you through a typical debugging scenario and the tools you can use to find and fix the issues.

#### Accessibility

Accessibility is a broad subject, however it is essential to keep accessibility in mind when designing and developing features
as it enables people, whatever their hardware, software, language, location, or ability to use the Web. Take a look at the [W3C's arguments for accessibility](https://www.w3.org/standards/webdesign/accessibility).
for an overview as to why accessibility plays a crucial role in making the web accessible to all. [MDN's article on accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility) 
also provide a great breakdown of what accessibility deals with and its importance.

You should now have a pretty good idea as to what accessibility is. Please read just the [introduction](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML), [HTML and accessibility section](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#html_and_accessibility),
as well as the [Good Semantics section](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#good_semantics) 
of MDN's HTML: A good basis for accessibility article, as these sections describe key concepts to be aware of.

Before jumping into accessibility patterns and principles, please read this article on the [core principles](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/) 
that you must keep in mind when implementing accessibility on your features.

When ever you're developing a new piece of functionality, a good resource to check is the [ARIA Authoring Practices Guide Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)
which provides common feature use cases but from an accessibility perspective. Take a look at the [Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) as an example, 
it provides a brief as to what a button is, the keyboard interaction expected when something is acting as a button, 
as well as the aria roles, states and properties (usually controlled through an element's attributes) associated with the button pattern.

A good resource to bookmark and consult when dealing with accessibility is the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/) 
which provides further links to useful resources and the implementation of accessibility concepts.

It is also important to be able to test accessibility on the pages and features you author. Please read W3C's [Evaluating Web Accessibility Overview](https://www.w3.org/WAI/test-evaluate/)
for an overview of the processes involved in testing for accessibility. It would also be a good idea to download and get to grips with the [NVDA screen reader](https://www.nvaccess.org/download/),
an assistive technology predominantly used by people with visual impairments/disabilities.


## CSS
CSS is used to style elements on your webpage using style rules matching elements with selectors.  

Read what CSS is below.  
[MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

Read the introductory content on CSS on MDN  
[CSS Intro](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

Go through the topics on the CSS first steps MDN page  
[First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

Understand how the CSS display property affects the elements box model.  
[Display Property](https://css-tricks.com/almanac/properties/d/display/)

- CSS display property e.g display block
- Margin and padding properties
- Colors background etc
- Sizing elements
- Border property
- Pseudo class e.g :hover, :focus
- Media rules / queries
- CSS position e.g static, relative etc
- CSS overflow
- CSS transitions
- CSS animations
- CSS flexbox
- CSS grid
