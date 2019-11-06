import React from 'react';
import App from "./App.js";
import AddItem from "./components/AddItem";
import ConsItem from "./components/ConsItem.js";
import Items from "./components/Items.js";
import { storiesOf } from '@storybook/react';
import About from './components/pages/About.js';

storiesOf("App",module).add("default", () => (
    <App/>
));

storiesOf("App",module).add("AddItem", () => (
    <AddItem/>
   
));

storiesOf("App",module).add("Items", () => (
        <Items items={this.state.items} 
              markComplete={this.markComplete} 
              delItem ={this.delItem} />));

storiesOf("App",module).add("About", () => (
    <About/>
));
