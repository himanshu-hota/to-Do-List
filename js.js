var btn = document.querySelector("#btn");
var input = document.querySelector("#input");
var ul = document.querySelector("#uu");
function inputLength () {
  return input.value.length;
}


function createLIst () {


  var li = document.createElement("li");
  var txt =document.createTextNode(input.value);
    li.appendChild(txt);
    ul.appendChild(li);


  var btnr= document.createElement("button");
  var btnv= document.createTextNode("X");
  btnr.appendChild(btnv);
  btnr.classList.add("close");

  function removeItem() {
    li.classList.toggle("togge");
    // btnr.classList.add("togge");
    li.remove();
    btnr.remove();

  }
  btnr.addEventListener("click",removeItem);
  ul.appendChild(btnr);
  input.value = "";

};

function createListOnClick() {
  if(inputLength()>0) { createLIst(); }
};

function createListOnKey(event) {
  if((inputLength()>0) && (event.which===13)) {createLIst();}
};

btn.addEventListener("click",createListOnClick);
input.addEventListener("keypress",createListOnKey);
