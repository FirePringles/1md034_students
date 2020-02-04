/*
let myElement = document.getElementById("myID");
let boxName = "A";
function nextCharacter(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
for (index in food)
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
*/


/*
let orderButton = document.getElementById('orderButton');
orderButton.addEventListener("click", triggerFunc);
function triggerFunc(){
  let x = document.getElementById('fullname').value;
  let y = document.getElementById('email').value;
  let z = document.getElementById('street').value;
  let v = document.getElementById('housenumb').value;
  let w = document.getElementById('recipient').value;
  var ele = document.getElementsByName('gender');

for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
    ele = ele[i].value;
}
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(v);
  console.log(w);
  console.log(ele);
}
*/
