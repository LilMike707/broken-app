### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Callbacks, Promises, Async and Await
- What is a Promise?
  Its the result of an async function
- What are the differences between an async function and a regular function?
  Async returns a promise, and Synch returns the value
- What is the difference between Node.js and Express.js?
  Node.js lets you run JS outside of the browser. Express.js is a web framework where you write routes
- What is the error-first callback pattern?
  Its the way Node.js handles ansync errors
- What is middleware?
  You put it at the top and every route and they will interact with it in some way.
- What does the `next` function do?
  this makes it go to the next middleware
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  We can use Promise.all to do all 3 requests at once.

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```
