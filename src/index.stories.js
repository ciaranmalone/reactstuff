import React from 'react';
import App from "./App.js";
import AddTodo from "./components/AddTodo.js";
import TodoItem from "./components/TodoItem.js";
import Todos from "./components/Todos.js";
import { storiesOf } from '@storybook/react';
import About from './components/pages/About.js';

storiesOf("App",module).add("default", () => (
    <App/>
));

storiesOf("App",module).add("AddTodo", () => (
    <AddTodo/>
   
));

storiesOf("App",module).add("TodoItem", () => (
    <TodoItem/>
));

storiesOf("App",module).add("About", () => (
    <About/>
));
