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

console.log(item1.info());
