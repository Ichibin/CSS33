/*Name this external file gallery.js*/

function upDate(previewPic){
    var div = document.getElementById("image");
    var link = previewPic.src;
    // console.log(String(link));
    div.style.backgroundImage = "url(" + link + ")";
    div.innerHTML = previewPic.alt;
}

function unDo(){
    // var initText = document.getElementById("image").innerHTML;
    var div = document.getElementById("image");
    // var link = previewPic.src;
    div.style.backgroundImage = "url('')";
    div.innerHTML = "Hover over an image below to display here.";
}

function focusing(){
    console.log('this is focusing');
    var imgs = document.querySelectorAll("img"); // this recieves the selectors from css files
    for(let i = 0;i < imgs.length; i++){
        // console.log('pog',i);
        imgs[i].setAttribute("tabindex",i+1);
    }
}