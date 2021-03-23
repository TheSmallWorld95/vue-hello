// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
var app = new Vue(
  {
    el: '#root',
    data: {
      message: "Hello World",
      how: "How are you?",
      img: "https://picsum.photos/200/300",
      getImage: "",
      red: "red",
      blue: "blue",
      colorChange: "purple",
      name: "",
      surname: "",
    },
    methods: {
      changeColor: function () {
        if (this.colorChange == "purple") {
          this.colorChange = "orange"
        } else {
          this.colorChange = "purple"
        }
      },
      image: function () {
        if (this.getImage == "") {
          this.getImage = "https://picsum.photos/200/300"
        } else {
          this.getImage = ""
        }
      },
      transfer: function () {
        this.name = document.querySelector("input[name=name]").value
        this.surname = document.querySelector("input[name=surname]").value
      }
    }
  }
);
