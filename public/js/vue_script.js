const vm = new Vue({
  el: '#myID',
  data: {
    menu: food,
    burger: "",
    name: "",
    email: "",
    street: "",
    housenumb: "",
    payment: "Credit card",
    gender: "male",
    seen: false
  },
  methods: {
    markDone: function(){
      this.seen = true;
      alert("Type of burger: " + this.burger + '\n' +
       "Customer name: " + this.name + '\n' +
       "Customer email: " + this.email + '\n' +
       "Customer adress: " + this.street + '\n' +
       "Customer house number: " + this.housenumb + '\n' +
       "Customer payment option: " + this.payment + '\n' +
       "Customer gender: " + this.gender)
    }
  }

})
