# Usage of the v-on Inline Handlers

The `v-on` directive helps to add event listeners directly on the html element. Like any other directive, everything between the double quotes gets executed as an JavaScript expression. This means it can handle a data property instantly inline. This is also called "inline handlers".

## Example

Given: To increase a data property `count`.

```html
<div id="app">
  <p>Count is {{ count }}</p>
  <button v-on:click="count++">Increase</button>
</div>
```

```js
Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
}).mount("#app");
```

## Anatomie

There is no need to use something like `document.querySelector('button').addEventListener('click', () => {})`. The `v-on` will do this much faster.

Vue supports any native javascript event. E. g. `v-on:change`, `v-on:input`, `v-on:mousemove` etc.

