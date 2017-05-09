var photo = document.getElementsByClassName("vulpix")[0];
var span = document.getElementsByClassName('close');
var galery= document.getElementsByClassName('container-galery')[0];

for (var i = 0; i < span.length; i++){
  span[i].addEventListener("click",hidden);
}

function hidden() {
  this.parentNode.style.display="none";
}


var origen=document.getElementById('buttonOrigen');
var textOrigen=document.getElementById('origen');

var evolucion=document.getElementById('buttonEvolucion');
var textEvolucion=document.getElementById('evolucion');

origen.addEventListener("dblclick", showO);
origen.addEventListener("click", hiddenO);
 
evolucion.addEventListener("dblclick", showE);
evolucion.addEventListener("click", hiddenE);


function showO() {
  textOrigen.style.visibility = "visible";
}
function hiddenO() {
  textOrigen.style.visibility = "hidden";
}

function showE() {
  textEvolucion.style.visibility = "visible";
}

function hiddenE() {
  textEvolucion.style.visibility = "hidden";
}

var buttonPost=document.getElementById('buttonPost');
buttonPost.addEventListener("click", postImg);

function postImg() {
  for(var i=0; i < span.length; i++){
    span[i].parentNode.style.display = "flex";
  }
}