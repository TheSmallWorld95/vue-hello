// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
var app = new Vue(
  {
    el: '#root',
    data: {
      message: "Hello World",
      how: "How are you?",
      red: "red",
      blue: "blue",
      colorChange: "purple"
    },
    methods: {
      changeColor: function () {
        if (this.colorChange == "purple") {
          this.colorChange = "orange"
        } else {
          this.colorChange = "purple"
        }
      }
    }
  }
);
