/*Name this external file gallery.js*/

function upDate(previewPic){
    var div = document.getElementById("image");
    var link = previewPic.src;
    // console.log(String(link));

    div.style.backgroundImage = "url(" + link + ")";
    
    div.innerHTML = previewPic.alt;
    
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

}

	function unDo(){
    // var initText = document.getElementById("image").innerHTML;
    var div = document.getElementById("image");
    // var link = previewPic.src;

    div.style.backgroundImage = "url('')";
    div.innerHTML = "Hover over an image below to display here.";

    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
		
}