
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


// var canvas = document.getElementById("canvas");

// function getElementPosition(obj) {
//     var curleft = 0, curtop = 0;
//     if (obj.offsetParent) {
//         do {
//             curleft += obj.offsetLeft;
//             curtop += obj.offsetTop;
//         } while (obj = obj.offsetParent);
//         return { x: curleft, y: curtop };
//     }
//     return undefined;
// }

// function getEventLocation(element,event){
//         var pos = getElementPosition(element);
    
//     return {
//         x: (event.pageX - pos.x),
//         y: (event.pageY - pos.y)
//     };
// }

// function rgbToHex(r, g, b) {
//     if (r > 255 || g > 255 || b > 255)
//         throw "Invalid color component";
//     return ((r << 16) | (g << 8) | b).toString(16);
// }

// drawImageFromWebUrl("ams0.jpg");


// canvas.addEventListener("mousemove",function(e){
    
//     var eventLocation = getEventLocation(this,e);
//     var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
//     // Get the data of the pixel according to the location generate by the getEventLocation function
//     var context = this.getContext('2d');
//     var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

//     // If transparency on the image
//     if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
//                 coord += " (Transparent color detected, cannot be converted to HEX)";
//     }
    
//     var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
//     // Draw the color and coordinates.
//     document.getElementById("status").innerHTML = coord;
//     document.getElementById("color").style.backgroundColor = hex;
// },false);



// canvas.addEventListener("click",function(e){
//     var eventLocation = getEventLocation(this,e);
//     var coord = "x=" + eventLocation.x + ", y=" + eventLocation.y;
    
//     // Get the data of the pixel according to the location generate by the getEventLocation function
//     var context = this.getContext('2d');
//     var pixelData = context.getImageData(eventLocation.x, eventLocation.y, 1, 1).data; 

//     // If transparency on the image
//     if((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0)){
//                 coord += " (Transparent color detected, cannot be converted to HEX)";
//     }
    
//     var hex = "#" + ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);
    
//     // Draw the color and coordinates.
//     document.getElementById("block1").style.backgroundColor = hex;
// },false);

// switch between dark and light mode! 
$('.dark').click(function() {
    if ( $('body').css('background-color') == "rgb(0, 0, 0)") {
        $("body").css('background-color', "white");
        $("body").css('color', 'black');
        $("a").css('color', 'black');
        console.log("turning white");
        } else {
            $("body").css("background-color", "black")
            $("body").css('color', 'white');
            $("a").css('color', 'white');
        }
    });


(function () {
    'use strict';
    
    var img = document.querySelector('img'),
        list = document.querySelector('ul'),
        section = document.querySelector('section'),
        paletteReady = false;
        
    img.addEventListener('load', function() {
        if ( !paletteReady )
            getPalette();
    });
    
    if (!paletteReady)
        getPalette();
    
    function getPalette() {
        paletteReady = true;
        
        var vibrant = new Vibrant(img),
            swatches = vibrant.swatches(),
            listFragment = new DocumentFragment();
        
        for ( var swatch in swatches ) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) { 
                console.log(swatch, swatches[swatch].getHex());
                var li = document.createElement('li'),
                    p = document.createElement('p'),
                    small = document.createElement('small');
                
                p.textContent = swatches[swatch].getHex();
                p.style.color = swatches[swatch].getTitleTextColor();
                small.textContent = swatch;
                small.style.color = swatches[swatch].getBodyTextColor();
                li.style.backgroundColor = swatches[swatch].getHex();
                li.appendChild(p);
                li.appendChild(small);
                listFragment.appendChild(li);
            }
        }
        
        list.appendChild(listFragment);
        
        if (swatches['DarkVibrant']) {
            section.style.backgroundColor = swatches['DarkVibrant'].getHex();
        }
    }
} ());


 
// var img = document.createElement('img');
// img.setAttribute('src', 'images/me.jpg')

// img.addEventListener('load', function() {
//     var vibrant = new Vibrant(img);
//     var swatches = vibrant.swatches()
//     for (var swatch in swatches)
//         if (swatches.hasOwnProperty(swatch) && swatches[swatch])
//             console.log(swatch, swatches[swatch].getHex())

//     /*
//      * Results into:
//      * Vibrant #7a4426
//      * Muted #7b9eae
//      * DarkVibrant #348945
//      * DarkMuted #141414
//      * LightVibrant #f3ccb4
//      */
// });
        


