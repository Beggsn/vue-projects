# Task: Class Binding

The goal is to highlight the current clicked button and his associated letter block by using the `class binding`.

![Example](https://github.com/coding-bootcamps-eu/web-apps-with-vuejs/blob/main/part-1-vue-basics/tasks/04-class-bindings/example.gif)

## Fulfill the following tasks:

- [ ] Implement the following logic with the use of `class binding` and the `v-on directive`.
  - [ ] When any button was clicked, add css classes to the button and the associated letter block below to set them as active.
  - Example: Click on button B
    - button B add css class `btn-active`
    - block B add css class `letter-active`
  - [ ] Use the data property `activeLetter` to store the current letter
    - A was clicked -> activeLetter: "A"
    - C was clicked -> activeLetter: "C"