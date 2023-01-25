
# JS Coding Standard

## General

1. Using consistent indentation and spacing - tab indentation (4 spaces) is the default
1. Using camelCase for variable and function names
1. Using double quotes for strings
1. Declaring variables with let or const instead of var
1. Use const by default and only make it a let if it needs to change
1. Using semicolons to end statements
1. Grouping similar code together
1. Commenting code to explain its purpose and how it works. That includes functions, classes and their members.
1. Using a linter like ESLint to enforce coding conventions
1. Names of variables, classes, class members and functions should clearly describe its function

## Functions

1. Functions are self contained and does not access anything ourside of the function.
1. Everything the function needs must be passed in as a parameter
1. The function can return a result
1. A function should not have more than 5 parameters use a single literal parameter if required. This must be called "args"

**Object literal as parameter example**
```js
    function doSomething(args) {
        if (args.isActive || false) {
            // ... so something
        }
    }
```

## Classes

Classes should be used when you need to maintain state or manage resources instanciated during a managed life cycle.

1. use the "class" keyword for constructing classes
2. class names are PascalCase
3. life cycle members to include are: "constructor" and "dispose"
4. private members should use the "#" prefix for example #firstName
5. only add getters and setters when you want to give public access to private member
6. methods should be private by default unless they are ment to be accessed from outside of the class
7. event handlers are async by default
8. parameter for setter is "newValue"

The order of class memebers should be as following

1. private fields
1. properties
1. lifecycle events starting with construction and then destruction
1. private methods
1. public methods

## Heavy processing

All actions that introduce heavy processing should be done on a web worker.
1. This includes trips to the server
1. Accessing indexdb
1. Performing long running web assembly actions

## for loops

Never use the for-in loop.

```js
for (let property in myObject) ...
```

It is by far the slowest loop in javascript.  
Rather use the standard for loop or the for-of loop.

**standard**
```js
for (let i = 0; i < collection.length; i++) ...
```

**for-of**
```js
for (const obj of collection) ...
```

## Enums

Enums are basically a set of named constants.  
The properties / names in the enum are UPPERCASE where the value can be as you need.

```js
const myEnum = Object.freeze({
    NAME: "value"
})
```

Enums should be used when ever you have consistent types.  
For example  
I am writing a card game and I want to define the suite of the card.

```js
const suite = Object.freeze({
    DIAMONDS: 0,
    SPADES: 1,
    HEARTS: 2,
    CLUGS: 3
})

class Card {
    #suite;

    get suite() {
        return this.#suite;
    }

    constructor(suite) {
        this.#suite = suite;
    }
}

const card = new Card(suite.HEARTS);
console.log(card.suite);
```

As you can see above, using enums will improve the readability of your code while reducing the risk of spelling mistakes. What you choose as the value in your enum will differ depending on your requirements.

## Preventing null

There are a number of ways to prevent null errors.

**ensure a object exists**

```js
// assign a variable to a empty object if it does not already exist
myObj ||= {}
```

**calling a function if it exists**
```js
// note the ?. before the round brackets. this also works for object checks
myObj.fetch?.()
```

**checking paths that might not be complete**
```js
if (obj1?.obj2?.property == "test") ...
```

**NOTE**
You should not add "?." as a way to prevent null paths.
First take the time to understand if having null objects on that path is a legitimate case.
Only use "?." in scenarios where a path may not be fully defined.
User descrision is a must.

**providing a default value if a object is null**
```js
const x = undefined;
const y = x ?? "undefined"; // use x if x is not null else use "undefined"
const z = x || "undefined"; // return the first truty value be it x or "undefined"
```

For standard null checking, "??" is prefered but there are scenarios where || makes more sense. Discression is advised.

## Components

1. js and html should be in seperate files
1. html should contain the css for that component
1. use css variables for all modification points
1. js file name and html file name should be the same and in a folder with the same name.
1. connected callback and disconnected callback are async
1. use shadow dom by default unless it prevents the capability of the component
1. follow the same rules as classes

## Convention over code

A much as possible use convention over code pattern.  
For example, instead of registering a lot of click events on a component, instead register a single click event. Mark the button with a data-action attribute that defines the action to execute. It could look like this.

```html
<div role="toolbar">
    <button id="btnSave" data-action="save">Save</button>
    <button id="btnLoad" data-action="load">Load</button>
</div>
```

```js
class MyComponent extends HTMLElement {
    #actions = {
        "save": this.#save.bind(this),
        "load": this.#load.bind(this)
    }

    #clickHandler = this.#click.bind(this);

    async connectedCallback() {
        // .. load the component html ...

        this.addEventListener("click", this.#clickHandler);
    }

    async disconnectedCallback() {
        this.removeEventListener("click", this.#clickHandler);
        this.#clickHandler = null;

        for (const key of Object.keys(this.#actions)) {
            this.#actions[key] = null;
        }
    }

    async #click(event) {
        await this.#actions[event.target.dataset.action]?.(event);
    }

    async #save(event) {
        // ... do save stuff
    }

    async #load(event) {
        // ... do load stuff
    }
}
```

## Working with arrays

You need to use the splice function to add items at a specific location in the array. 
Instead of calling splice multiple times in a for loop rather use the spread operator (...) to add items.
Doing the splice inside a loop has very large performance issues.
```javascript
const index = 2;
const newArray = [4,5,6];
const existingArray = [1,2,3];

// DO NOT DO
for(let i = 0;i < newArray.length;i ++) {
    existingArray.splice(index +i +1, 0, item);
}

// RATHER USE SPREAD OPERATOR
existingArray.splice(index+1, ...newArray);
```

## Conditions

When working with conditions like if else checking each statement must have a open and close bracket.

For example:

```js
if (condition === true) {
  ...
}
else {
  ...
}
```

1. The open bracket is on the same line as the condition.
1. Alsways use === unless you do a null check then use ==

There are minor exceptions to the rule.
One such case is if you want to check an attribute value and see if it is equal to a number value.
Attributes are always string but ("2" == 2) is a valid use case scenario also.
Descression advised.

## Processing class properties

There are often cases where you want to process a class, get the properties and access the relevant values.
To do this use object entries.

```js
for (let [key, value] of Object.entries(content)) {
    ...
}
```

You can also use "Object.keys()" if the scenario calls for it.

## String concatenation

Never use "+" for string concatenation.
There are two ways you can do this.

1. Using a string template
1. Using an array of strings that you join

```js
// string template
const result = `${firstName} ${lastName}`;

// using an array
const result = [firstName, lastName].join(" ");
```

For larger concatination use the array approch.

## Testing
All code must have deno unit tests.  

For the most part you should write the test first and use code piolet to create the body from that test.

All UI interaction must have a selenium test.
