
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

// number of cart items on right top show up when added to cart
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
    dot1.onclick = function() {
    document.getElementById("detail-img").src="brown.jpg";
    }

    dot2.onclick = function() {
    document.getElementById("detail-img").src="yellow.jpg";
    }

    dot3.onclick = function() {
    document.getElementById("detail-img").src="pink.jpg";
    }

}


// select item color 

function activecolor(dot) {
    dot_ids = ["dot1", "dot2", "dot3"];
    for (i = 0 ; i < dot_ids.length ; ++i) {
        document.getElementById(dot_ids[i]).style.borderColor='transparent';
    }
    document.getElementById(dot).style.borderColor='#000000';

    var images = [
            "brown.jpg",
            "yellow.jpg",
            "pink.jpg"    
    ];

    


}






// element.innerHTML
// document.createElement
// document.appendChild