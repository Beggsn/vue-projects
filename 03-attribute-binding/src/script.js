Vue.createApp({
    data() {
      return {
        headline: "Attribute Binding is awesome",
        imageAttrs: {
          src: "https://picsum.photos/200/300",
          alt: "A cute dog"
        }
      };
    }
  }).mount("#app");
  