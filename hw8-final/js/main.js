
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("expandedImg");


document.addEventListener('DOMContentLoaded', function() {

    // click x to escape modal view
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        $('#myModal').css("display", "none");
    }


});



// lightbox for enlarge photographs
function lightbox(imgs) {
   // modalImg.parentElement.style.display = "block";
   $('#myModal').css("display", "block");
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
}



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
        // section = document.querySelector('section'),
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
        


