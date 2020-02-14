'use strict';
const socket = io();

const vm = new Vue({
  el: '#myID',
  data: {
    menu: food,
    burger: [],
    name: "",
    email: "",
    payment: "Credit card",
    gender: "male",
    seen: false,
    localOrder: [],
    details: {x: 0, y: 0},
    orderID: 0,
    orders: {}
  },
  methods: {
    markDone: function(){
      this.seen = true;
      alert("Type of burger: " + this.burger + '\n' +
       "Customer name: " + this.name + '\n' +
       "Customer email: " + this.email + '\n' +
       "Customer payment option: " + this.payment + '\n' +
       "Customer gender: " + this.gender);
       this.localOrder = [
        "Customer name: " + this.name,
        "Customer email: " + this.email,
        "Customer payment option: " + this.payment,
        "Customer gender: " + this.gender];
        this.addOrder();
    },
    getNext: function() {
      this.orderID = this.orderID + 1;
      return this.orderID;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.details.x,
          y: this.details.y,
        },
        orderItems: this.burger,
        orderDetails: this.localOrder
      });
      console.log(this.orders);
    },
    displayOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      console.log("hej");
      this.details = {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        };
    }
  }

})
