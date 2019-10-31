// global variables

var click = 0;
var count = 0;
var selectedMaterial= "";
var selectedColor = "";
var price = "$9.99";


// create object
function Pillow(name, color, material, qty, url) {
    this.name = name;
    this.color = color;
    this.material = material;
    this.qty = qty;
    this.url = url;
    this.price = price;
}



// add or subtract quantity 
function plus() {
    count++;
    $('#count').val(count);
}
function minus() {
  if (count > 1) {
    count--;
    $('#count').val(count);
  }
}


function removeItem(id) {
    var data = JSON.parse(localStorage.getItem("pillows")); // object
    console.log("data length: " + data.length);
    console.log("this is id: " + id);

    if (data == null || data.length == 0) return;
    else if (data.length == 1) {
        $('#cart-detail').hide();
        localStorage.clear();
        cartLoad();
    } else {
        data = data.splice(id, 1);
        localStorage.setItem("pillows", JSON.stringify(data));
        cartLoad();
    }
};


    // if (data.length === 1) {
    //     localStorage.clear();
    //     $('#cart-detail').hide();
    // } else {
    //     data = data.splice(id, 1);
    //     localStorage.setItem("pillows", JSON.stringify(data));
    //     cartLoad();
    // }





// update item count on cart

function updateCount() {
    if (click == 0) {   // no item in cart
        $('#displayCount').hide();
    } else {
        $('#displayCount').html(click); //change innerHTML of circle 
        $('#displayCount').show();
    }
}

// update selected color border
function changeColor(currentColor) {
    var others = $(currentColor).siblings();
    for (var i=0; i< others.length; i++){
        if ($(others[i]).hasClass('activeColor')) {
            $(others[i]).removeClass('activeColor');
        }
    }
    $(currentColor).addClass('activeColor');
}


$('.dot-big').click(function() {
    changeColor(this);
});

//update internal variable selectedColor 
$('#brown').click(function() {
    selectedColor = 'brown';
    $("#detail-img").attr("src", "brown.jpg");
});

$('#pink').click(function() {
    selectedColor = 'pink';
    $("#detail-img").attr("src", "pink.jpg");
});

$('#gold').click(function() {
    selectedColor = 'gold';
    $("#detail-img").attr("src", "gold.jpg");
});




$('#addCart').click(function() {

    // button change status for 2 sec
    document.getElementById("addCart").innerHTML = "Added to Cart!";
    setTimeout(function() {
        document.getElementById("addCart").innerHTML = "Add to Cart";
    }, 2000);

    selectedMaterial = $('#productMaterial').val();
    productName = $('#productName').text();
    productSrc = selectedColor + ".jpg";

    // displaycount update
    click++;
    updateCount();


    var data = JSON.parse(localStorage.getItem("pillows")); // object
    if (data == null) {
        data = [];
    } 
    // push added item into storage
    data.push(new Pillow(productName, selectedColor, selectedMaterial, count, productSrc));
    localStorage.setItem("pillows", JSON.stringify(data));
});



// load cart.html page
function cartLoad() {
    var data = JSON.parse(localStorage.getItem("pillows")); // object

    if (data != null) {
        var codeFinal = "";
        for (var i=0; i<data.length; i++) {
            var code = `<div>
                    <div class="img"><a href="detail.html"><img class="displayImg" src="${data[i].url}"></a></div>
                </div>

                <div>
                    <p class="displayName" value="">${data[i].name}</p>
                    <p class="price" id="displayPrice" value="">${data[i].price}</p>
                    <p class="color" id="displayColor" value="">${data[i].color}</p>
                    <p class="material" id="displayMaterial" value="">${data[i].material}</p>
                </div>

                <div class="quantity-btn">
                    <input type="text" value="${data[i].qty}" id="displayQty">
                    <input type="button" value="Remove" onclick="removeItem(${i})">
                </div>`;
            codeFinal += code; // add html code together
            $('#cart-detail').append(code);
            // show price in order summary
            var sub = Number((i+1) * (data[i].qty) * 9.99);
            $("#subtotal").html(sub);
            var all = Number(sub + 5.00);
            $("#displayTotal").html(all);
        } 

        $('#cart-detail').html(codeFinal);


    }




}
















// window.onload = function() {     

 
// }


