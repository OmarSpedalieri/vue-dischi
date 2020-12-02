//
// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
const collection = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue({

  el: "#discografia",
  data:{
    albums:[] // array vuoto che riempio interrogando l api con axios
  },
  mounted:function () {// mounted perchè viene generato all'inizio

    axios.get(collection).then(disc => {
     this.albums = disc.data.response;
     // console.log(disc);

   })
  }




});
