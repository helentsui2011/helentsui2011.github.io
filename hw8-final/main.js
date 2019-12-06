
// $('#gold').click(function() {
//     selectedColor = 'gold';
//     $("#detail-img").attr("src", "gold.jpg");
// });


window.onload = function() {


}


var captionText = document.getElementById("caption");
var modalImg = document.getElementById("expandedImg");


function lightbox(imgs) {
   // modalImg.parentElement.style.display = "block";
   $('#myModal').css("display", "block");
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
}

// click x to escape modal view
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    $('#myModal').css("display", "none");
}



// function draw(img) {
//     var canvas = document.createElement("canvas");
//     var c = canvas.getContext('2d');
//     c.width = canvas.width = img.width; 
//     c.height = canvas.height = img.height;
//     c.clearRect(0, 0, c.width, c.height);
//     c.drawImage(img, 0, 0, img.width, img.height);
//     return c;
// }


var canvas = document.getElementById("canvas");

function getElementPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
}

function getEventLocation(element,event){
        var pos = getElementPosition(element);
    
    return {
        x: (event.pageX - pos.x),
        y: (event.pageY - pos.y)
    };
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function drawImageFromWebUrl(sourceurl){
      var img = new Image();
      img.addEventListener("load", function () {
          // The image can be drawn from any source
          canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      });
      img.setAttribute("src", sourceurl);
      canvas.width = img.width;
      canvas.height = img.height;
}

drawImageFromWebUrl("ams0.jpg");


canvas.addEventListener("mousemove",function(e){
      var eventLocation = getEventLocation(this,e);
    var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // If transparency on the image
    if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
                coord += " (Transparent color detected, cannot be converted to HEX)";
    }
    
    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
    // Draw the color and coordinates.
    document.getElementById("status").innerHTML = coord;
    document.getElementById("color").style.backgroundColor = hex;
},false);



canvas.addEventListener("click",function(e){
      var eventLocation = getEventLocation(this,e);
    var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var context = this.getContext('2d');
    var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

    // If transparency on the image
    if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
                coord += " (Transparent color detected, cannot be converted to HEX)";
    }
    
    var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
    // Draw the color and coordinates.
    document.getElementById("block1").style.backgroundColor = hex;
},false);



