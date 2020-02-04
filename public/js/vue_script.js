function menuItem(name, kCal, gluten, lactos, image){
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactos = lactos;
  this.image = image;
  this.info = function(){
    return this.name + ' ' + this.kCal;
  };
}

let item1 = new menuItem("Burgare1","1000kCal",true,false,"hej");
let item2 = new menuItem("Burgare2","10kCal",true,true,"hej");
let item3 = new menuItem("Burgare3","100kCal",false,false,"hej");
let item4 = new menuItem("Burgare4","1kCal",false,false,"hej");
let item5 = new menuItem("Burgare5","50kCal",false,true,"hej");

const vm = new Vue({
  el: '#myID',
  data: {
   menu: [item1.info(),item2.info(),item3.info(),item4.info(),item5.info()]
  },
})
