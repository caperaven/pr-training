/*
    There are a number of scenarios when you want to get an element.
    For example:
    Adding or removing events suck as click actions
    Changing attributes on the element
    Updating style properties.

    The first step to all of this is to get the element.

    Single Element
    --------------
    When working with single elements it is considered best practice to have an id attribute on any element you want to fetch.
    This is however not always possible.
    There are a number of calls you can use to get a single element.

    1. document.getElementById("elementIdValue")
    2. document.querySelector("query")

    Multiple Elements
    1. document.querySelectorAll("query")

    For the most part, if you use querySelector and querySelectorAll you are 90% of the time fine.
    The difference between the two is that querySelector will always only return the first element that matches the query.
    document.querySelectorAll will always return all matching elements.

    Let us say I have a dom with 5 div elements in it.
    document.querySelector("div") will only return the first div.
    document.querySelectorAll("div") will return all 5

    The query is defined using css selectors
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

    There are a number of selectors a beginner should know.

    1. get element based on tag name - document.querySelector("div") // get div element
    2. get element based on element's id - document.querySelector("#idvalue") // where id value is the id attribute on the element
    3. get element based on css class - document.querySelector(".classvalue") // where classvalue is the class on the element
    4. get element based on attribute value - document.querySelector('[data-value="value"]') // note the square brackets

    These are the same css selectors you would use for style purposes so if you know you css selectors for styling you can use it here.
 */

function getButtonElement() {
    // simple query examples
    const b1 = document.querySelector("button");    // by tag name
    const b2 = document.querySelector("#mybutton"); // by id
    const b3 = document.getElementById("mybutton"); // by id
    const b4 = document.querySelector(".action-button") // by css class
    const b5 = document.querySelector("[data-value='value']") // by attribute

    // more complex example
    // on the div element that has a role attribute with the value "toolbar" is a button with the class "icon"
    const button = document.querySelector('div[role="toolbar"] > button.icon')
}