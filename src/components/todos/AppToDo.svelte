<!-- App.svelte -->
<script>
  import Todos from './Todos.svelte'

  let todos = [
    { id: 1, name: 'Create a Svelte starter app', completed: true },
    { id: 2, name: 'Create your first component', completed: true },
    { id: 3, name: 'Complete the rest of the tutorial', completed: false }
  ]
</script>



<Todos {todos} />

<style>
/* RESETS */
:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}
:global(*:focus) {
  outline: 3px dashed #228bec;
  outline-offset: 0;
}
:global(html) {
  font: 62.5% / 1.15 sans-serif;
}
:global(h1),
:global(h2) {
  margin-bottom: 0;
}
:global(ul) {
  list-style: none;
  padding: 0;
}
:global(button) {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}
:global(button::-moz-focus-inner) {
  border: 0;
}
:global(button),
:global(input),
:global(optgroup),
:global(select),
:global(textarea) {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
:global(button),
:global(input) {
  overflow: visible;
}
:global(input[type="text"]) {
  border-radius: 0;
}
:global(body) {
  width: 100%;
  max-width: 68rem;
  margin: 0 auto;
  font: 1.6rem/1.25 Arial, sans-serif;
  background-color: #f5f5f5;
  color: #4d4d4d;
}
@media screen and (min-width: 620px) {
  :global(body) {
    font-size: 1.9rem;
    line-height: 1.31579;
  }
}
/*END RESETS*/

/* GLOBAL STYLES */
:global(.form-group > input[type="text"]) {
  display: inline-block;
  margin-top: 0.4rem;
}
:global(.btn) {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #4d4d4d;
  cursor: pointer;
  text-transform: capitalize;
}
:global(.btn.toggle-btn) {
  border-width: 1px;
  border-color: #d3d3d3;
}
:global(.btn.toggle-btn[aria-pressed="true"]) {
  text-decoration: underline;
  border-color: #4d4d4d;
}
:global(.btn__danger) {
  color: #fff;
  background-color: #ca3c3c;
  border-color: #bd2130;
}
:global(.btn__filter) {
  border-color: lightgrey;
}
:global(.btn__primary) {
  color: #fff;
  background-color: #000;
}
:global(.btn__primary:disabled) {
  color:darkgrey;
  background-color:#565656;
}
:global(.btn-group) {
  display: flex;
  justify-content: space-between;
}
:global(.btn-group > *) {
  flex: 1 1 49%;
}
:global(.btn-group > * + *) {
  margin-left: 0.8rem;
}
:global(.label-wrapper) {
  margin: 0;
  flex: 0 0 100%;
  text-align: center;
}
:global(.visually-hidden) {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
:global([class*="stack"] > *) {
  margin-top: 0;
  margin-bottom: 0;
}
:global(.stack-small > * + *) {
  margin-top: 1.25rem;
}
:global(.stack-large > * + *) {
  margin-top: 2.5rem;
}
@media screen and (min-width: 550px) {
  :global(.stack-small > * + *) {
    margin-top: 1.4rem;
  }
  :global(.stack-large > * + *) {
    margin-top: 2.8rem;
  }
}
:global(.stack-exception) {
  margin-top: 1.2rem;
}
/* END GLOBAL STYLES */

:global(.todoapp) {
  background: #fff;
  margin: 2rem 0 4rem 0;
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
}
@media screen and (min-width: 550px) {
  :global(.todoapp) {
    padding: 4rem;
  }
}
:global(.todoapp > *) {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
:global(.todoapp > form) {
  max-width: 100%;
}
:global(.todoapp > h1) {
  display: block;
  max-width: 100%;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
}
:global(.label__lg) {
  line-height: 1.01567;
  font-weight: 300;
  padding: 0.8rem;
  margin-bottom: 1rem;
  text-align: center;
}
:global(.input__lg) {
  padding: 2rem;
  border: 2px solid #000;
}
:global(.input__lg:focus) {
  border-color: #4d4d4d;
  box-shadow: inset 0 0 0 2px;
}
:global([class*="__lg"]) {
  display: inline-block;
  width: 100%;
  font-size: 1.9rem;
}
:global([class*="__lg"]:not(:last-child)) {
  margin-bottom: 1rem;
}
@media screen and (min-width: 620px) {
  :global([class*="__lg"]) {
    font-size: 2.4rem;
  }
}
:global(.filters) {
  width: 100%;
  margin: unset auto;
}
/* Todo item styles */
:global(.todo) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
:global(.todo > *) {
  flex: 0 0 100%;
}
:global(.todo-text) {
  width: 100%;
  min-height: 4.4rem;
  padding: 0.4rem 0.8rem;
  border: 2px solid #565656;
}
:global(.todo-text:focus) {
  box-shadow: inset 0 0 0 2px;
}
/* CHECKBOX STYLES */
:global(.c-cb) {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  display: block;
  position: relative;
  min-height: 44px;
  padding-left: 40px;
  clear: left;
}
:global(.c-cb > label::before),
:global(.c-cb > input[type="checkbox"]) {
  box-sizing: border-box;
  top: -2px;
  left: -2px;
  width: 44px;
  height: 44px;
}
:global(.c-cb > input[type="checkbox"]) {
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  margin: 0;
  opacity: 0;
}
:global(.c-cb > label) {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  display: inline-block;
  margin-bottom: 0;
  padding: 8px 15px 5px;
  cursor: pointer;
  touch-action: manipulation;
}
:global(.c-cb > label::before) {
  content: "";
  position: absolute;
  border: 2px solid currentColor;
  background: transparent;
}
:global(.c-cb > input[type="checkbox"]:focus + label::before) {
  border-width: 4px;
  outline: 3px dashed #228bec;
}
:global(.c-cb > label::after) {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 11px;
  left: 9px;
  width: 18px;
  height: 7px;
  transform: rotate(-45deg);
  border: solid;
  border-width: 0 0 5px 5px;
  border-top-color: transparent;
  opacity: 0;
  background: transparent;
}
:global(.c-cb > input[type="checkbox"]:checked + label::after) {
  opacity: 1;
}

	
</style>