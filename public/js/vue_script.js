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
    burg1: item1.info(),
    burg2: item2.info(),
    burg3: item3.info(),
    burg4: item4.info(),
    burg5: item5.info()
  },
})
