
# Reflection.md

## a) Documentation

This project focused on state management in React using Zustand. I used Zustand to manage the todo list state globally and learned how its `create()` function works to define the state and the functions (actions) to manipulate that state.

Key concepts applied:
- Zustand store creation with `create()`
- Actions like `addTodo`, `toggleTodo`, `removeTodo`, and `clearCompleted`
- State access using selectors like `useTodoStore(state => state.todos)`
- Persistence using Zustand's `persist` middleware to store data in localStorage

## b) Reflection

### What I Learned

- Zustand is very easy to set up compared to Redux or Context API.
- I can manage complex state logic in one store file without needing boilerplate.
- I understood how state updates trigger re-renders only in the subscribed components, improving performance.
- Learned about `persist` middleware which made localStorage implementation simple.

### Challenges Faced

#### 1. Zustand Store Not Updating Properly
At first, I forgot to use the arrow function when subscribing to state, which made the store not behave as expected.

**Fix:** I updated the selector usage correctly:
```js
const todos = useTodoStore(state => state.todos);
```

#### 2. Component Not Re-rendering After State Change
This happened because I wasn’t accessing the right part of the state, so Zustand couldn’t detect what to re-render.

Fix: Made sure to access individual pieces of state instead of the whole store.

#### 3. Persistence Not Working
Initially, the todos disappeared on refresh.

Fix: I realized I had missed wrapping the store creation with persist:

```
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(persist(...));
````

Overall, Zustand made state management simple, and I appreciated how little boilerplate it required. This was my first experience using Zustand, and I plan to use it in future React projects where I need global state.