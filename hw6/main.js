
// when pressed add to cart
function addCart() {
    document.getElementById("add-item").innerHTML = "Added to Cart!";
}



// order quantity add or minus

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

// number of cart items on right top 
window.onload = function(){ 
    var click = 0;
    var cartButton = document.getElementById("add-item");
    var display = document.getElementById("displayCount");
    cartButton.onclick = function() {
        click ++; 
        display.innerHTML = click;
        console.log(click);
        document.getElementById("displayCount").style.borderColor = 'white';
        document.getElementById("displayCount").style.color = 'white';

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




// element.innerHTML
// document.createElement
// document.appendChild