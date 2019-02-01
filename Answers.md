1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, reduce, and filter all create new arrays from a passed-in array, so no side effects. Object.assign is the method that will create a new object and extend properties of another. 
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are plain objects with a key value pair that tells a reducer what event occurred. A reducer has logic that will be performed when a case matching a specific action is triggered. A store holds state and it can be accessed from anywhere in a Redux project, unlike a React-only project that needs to have props passed. 
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state would be the redux store state. Component state is a state held only by one component, like a state object in a class component. If the state needs to be accessed elsewhere then application state would be preferable. If the state is specific to the component, then it can be left in the component. 
1.  What is middleware?
Middleware in an application will intercept a process, perform some kind of action on it, and then let the process resume where it was going. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk lets a developer create actions from action-creators that are not plain objects but can be functions, so that they will interact with Redux's dispatch and the developer can write asynchronous code easily. Redux-thunk will catch actions that are functions and invoke them while passing in the dispatch function then take what was returned (a plain object) and forward that on in the usual flow to the reducer. 
1.  Which `react-redux` method links up our `components` with our `redux store`?
Connect is the method that links the components to the redux store. 