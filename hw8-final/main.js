
// $('#gold').click(function() {
//     selectedColor = 'gold';
//     $("#detail-img").attr("src", "gold.jpg");
// });


// window.onload = function() {
//     if 
// }

// .getImageData();



var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

$('#myImg').click(function() {
    $('#myModal').css("display", "block");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

});

// click x to escape modal view

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    $('#myModal').css("display", "none");
}



// color thief testing




// getColor(image [, quality])
// Returns: [Number, Number, Number]





