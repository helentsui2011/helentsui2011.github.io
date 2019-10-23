
// when pressed add to cart

function addCart() {
    var countEl = document.getElementById("count");
    document.getElementById("add-item").innerHTML = "Added to Cart!";
    console.log("hi");
    document.getElementById("notif").style.backgroundColor = "white";
}


// element.innerHTML
// document.createElement
// document.appendChild

// order quantity add or minu
var count = 1;
function plus() {
    count++;
    var countEl = document.getElementById("count");
    countEl.value = count;
}
function minus() {
  if (count > 1) {
    count--;
    var countEl = document.getElementById("count");
    countEl.value = count;
  }
}



// select item color 
function activecolor(dot) {
    dot_ids = ["dot1", "dot2", "dot3"];
    for (i = 0 ; i < dot_ids.length ; ++i) {
        document.getElementById(dot_ids[i]).style.borderColor='transparent';
    }
    document.getElementById(dot).style.borderColor='#000000';

}
// change image : .sibling -- current change to active
// CSS: active, then ...


// var objectss = {firstName:"John", lastName:"Doe"}