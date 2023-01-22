var modal = document.getElementById("modal");
var btn = document.getElementById("btn-trailer");
var span = document.getElementsByClassName("close-modal")[0];
var video = document.getElementById("video");
var link = video.src;


btn.onclick = function() {
    modal.style.visibility = "visible";
    video.setAttribute("src", link);    
}

span.onclick = function() {
    modal.style.visibility = "hidden";
    video.setAttribute("src", "");
}