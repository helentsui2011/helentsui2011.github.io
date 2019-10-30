

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

function activecolor(dot) {
    dot_ids = ["dot1", "dot2", "dot3"];
    for (i = 0 ; i < dot_ids.length ; ++i) {
        document.getElementById(dot_ids[i]).style.borderColor='transparent';
    }
    document.getElementById(dot).style.borderColor='#000000';

}

window.onload = function(){ 
    var click = 0;
    var cartButton = document.getElementById("addCart");
    var display = document.getElementById("displayCount");
    
    cartButton.onclick = function() {

        // button change status for 2 sec
        document.getElementById("addCart").innerHTML = "Added to Cart!";
        setTimeout(function() {
            document.getElementById("addCart").innerHTML = "Add to Cart";
        }, 2000);

        // count num of items added to cart
        click ++; 
        display.innerHTML = click;
        display.style.borderColor = 'white';
        display.style.color = 'white';


    }

    // change item image based on color option

    var images = [
        "brown.jpg",
        "yellow.jpg",
        "pink.jpg"
    ];

    dot1.onclick = function() {
    document.getElementById("detail-img").src = images[0];
    }

    dot2.onclick = function() {
    document.getElementById("detail-img").src = images[1];
    }

    dot3.onclick = function() {
    document.getElementById("detail-img").src = images[2];
    }

}







// element.innerHTML
// document.createElement
// document.appendChild