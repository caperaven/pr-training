# Binding Expressions
1. Explain the difference between once, one-way and two-way binding?
1. What is the difference between .bind and .two-way?
1. How do you make sure .once will be parsed with your value and displayed?
1. What does the ref keyword do e.g ```<input ref="myInput"/>```
1. How do I add a conditional binding to hide the following element ```<input id="myInput"/>```
1. How do I use conditional binding to set a value for example ```<input data-id="?">``` where the question mark is 1 or 2 depending on a boolean value "condition"
1. How do I bind to an event click for example, whats the syntax?
1. How would you bind against an attribute on the element? 
1. When binding against an attribute on an element, if the value on the model updates, will the attribute binding update as well?
1. Will the attribute being bound against in the following example be visible or hidden when condition = true? ```<div data-set.if="condition == false">``` 
1. Will the attribute being bound against in the following example be visible or hidden when condition = true? ```<div data-set.if="condition == false ? 'Yes'">``` 
1. Will the attribute being bound against in the following example be visible or hidden when condition = true? ```<div data-set.if="condition == false ? 'Yes' : 'No'">```
1. How would you define more complex conditional binding, say for instance you had multiple conditions you needed to check, and you wanted to set a default value?

//emit
1. What would the args object look like when the following emit is fired:
```<button click.emit="customEvent(message='A message', $context, items=${items})">Custom Event</button>```


//post message
1. If you have an eventEmitter.on("some-key") which event aggregation binding would you use to bind against?
1. If you had a onMessage function within your component, which binding expression can you use to target that component directly?
1. In the following example
   ```<button click.post="got-contacts['input-contacts', 'input-form'](title='hello world', $event, contacts=${contacts})">Post Message</button>```
    Which elements are being targeted?

//set value
1. Explain what is happening in the following binding expresion example:
   ```<button click.setValue="$globals.isActive = !$globals.isActive">MyButton</button>```

