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

let item1 = new menuItem("Burgare1",10000,true,false,"hej");
let item2 = new menuItem("Burgare2",20000,true,true,"hej");
let item3 = new menuItem("Burgare3",30000,false,false,"hej");
let item4 = new menuItem("Burgare4",40000,false,false,"hej");
let item5 = new menuItem("Burgare5",50000,false,true,"hej");

console.log(item1.info());
console.log(item2.info());
console.log(item3.info());
console.log(item4.info());
console.log(item5.info());

document.getElementById('burg1').innerHTML = item1.info();
document.getElementById('burg2').innerHTML = item2.info();
document.getElementById('burg3').innerHTML = item3.info();
document.getElementById('burg4').innerHTML = item4.info();
document.getElementById('burg5').innerHTML = item5.info();
