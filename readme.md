1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
* getElementById("id")
    - Selects one element by its unique id attribute.
    - Returns a single Element object or null if not found.
    - Fastest among them because id is unique.

* getElementsByClassName("className")
    - Selects all elements with the given class name.
    - Returns a live HTMLCollection (updates automatically if DOM changes).
    - Must be looped to work with multiple elements.

* querySelector("selector")
    - Selects the first element that matches a CSS selector.
    - Returns a single Element object or null.

* querySelectorAll("selector")
    - Selects all elements that match a CSS selector.
    - Returns a static NodeList (does not update if DOM changes).

2. How do you create and insert a new element into the DOM?
Ans:
* Create the element
    - const newDiv = document.createElement("div")
* add content or attribute
    - newDiv.textContent = "Hello, world!"
    - newDiv.className = "my-class"
* choose where to insert it
    - const parent = document.getElementById("container")
    - parent.appendChild(newDiv)

3. What is Event Bubbling and how does it work?
Ans:
Event Bubbling is a mechanism in the DOM where an event starts from the target element and then propagates upward through its parent elements until it reaches the document.
    - Suppose you click on a <button> inside a <div>.
    - The event is first handled on the button (the target).
    - Then it “bubbles up” to the div, then to the body, then to the document, and so on.


