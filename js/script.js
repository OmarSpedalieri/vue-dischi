//
// Descrizione:
// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
//
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.

const collection = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue({

  el: "#discografia",
  data:{
    albums:[], // array vuoto che riempio interrogando l api con axios
    type:"all",
    albums_picked:[]
  },
  mounted:function () {// mounted perchè viene generato all'inizio

    axios.get(collection).then(disc => {
      //popolo il mio array album con le response di
      // ogni elemento disc che mi manda axios
     this.albums = disc.data.response;
     // console.log(disc);

   })
  },
  methods:{
    genrePicker(){
      if (this.type === "all") {
        this.albums_picked = this.albums;
      }else{
        this.albums_picked = this.albums.filter(item => item.genre === this.type);
      }
    }
  },
  computed:{
    genreFilter : function(){
      return this.albums.filter((album) => {

       if (this.type === "all") {
         return this.albums;
       } else {
         return album.genre === this.type;
       }
     })
    }
  }

});
