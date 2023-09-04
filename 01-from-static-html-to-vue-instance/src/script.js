Vue.createApp({
    data() {
      return {
        userName: "Berkant Cetin",
      };
    },
    directives: {
      highlight: { // custom directive
        mounted(el) {
          el.style.backgroundColor = "#6a1cc3";
          el.style.color = "white";
          el.style.borderRadius = ".625rem";
          el.style.padding = ".188rem";
        }
      }
    }
  }).mount("#app");