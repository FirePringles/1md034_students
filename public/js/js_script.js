function menuItem(name, kCal, gluten, lactos, image){
  this.name = name;
  this.kCal = kCal;
  this.gluten = gluten;
  this.lactos = lactos;
  this.image = image;
  this.info = function(){
    if(this.gluten == true && this.lactos == true){
    	return this.kCal + " Lactos" + " Gluten";
      }
    else if(this.gluten == true){
    	return this.kCal + " Gluten";
    }
        else if(this.lactos == true){
    	return this.kCal + " Lactos";
    }
    else {
    return this.kCal;
    }
  };
}

let item1 = new menuItem("Ultimate Burger","10000kCal",true,false,"https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg");
let item2 = new menuItem("Pale Burger","20000kCal",true,true,"https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg");
let item3 = new menuItem("Tripple Wombo Combo","30000kCal",false,false,"https://assets.biggreenegg.eu/app/uploads/2017/12/05133526/topimage-mango-filled-hamburgers-800x500-600x375.jpg");
let item4 = new menuItem("Saucy Burger","40000kCal",false,false,"https://mb.cision.com/Public/12521/2851454/aa42a4d1cb9c6ca5_800x800ar.jpg");
let item5 = new menuItem("Bacon Burger","50000kCal",false,true,"https://i2.wp.com/media.victoriasprovkok.se/2017/08/image-139.jpeg");
let item6 = new menuItem("BBQ Burger","60000kCal",true,true,"https://www.javligtgott.se/wp-content/uploads/2019/07/IMG_0557-1024x682.jpg");

let menu = [item1, item2, item3, item4, item5, item6];

let myElement = document.getElementById("myID");
let boxName = "A";
function nextCharacter(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
for (index in menu)
{
        let divItem = document.createElement("div");
        divItem.setAttribute('class', boxName);

        let headItem = document.createElement("h2");
        let headValue = document.createTextNode(menu[index].name);
        headItem.appendChild(headValue);
        divItem.appendChild(headItem);

        let imageValue = document.createElement("IMG");
        imageValue.setAttribute("src", menu[index].image);
        imageValue.setAttribute("width", "200");
        imageValue.setAttribute("alt", menu[index].name);
        imageValue.setAttribute("title", menu[index].name);
        divItem.appendChild(imageValue);

        let listItem = document.createElement("p");
        let listValue = document.createTextNode(menu[index].info());
        listItem.appendChild(listValue);
        divItem.appendChild(listItem);

        myElement.appendChild(divItem);
        boxName = nextCharacter(boxName);
}
