Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleWheel(event) {
      if (event.deltaY < 0) {
        this.count++; // Nach oben scrollen
      } else if (event.deltaY > 0 && this.count > 0) {
        this.count--; // nur wenn count größer als 0 ist
      }
    }       
  }
}).mount("#app");
