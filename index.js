const btnScrollToTop= document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click",function(){
    window.scrollTo(0,0);
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})
mybutton = document.getElementById("btnScrollToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 110) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function play() {
  var audio = document.getElementById("audio");
  

if(audio.paused){
audio.play();
button.innerHTML = "Pause";
} else {
audio.pause();
button.innerHTML = "Play";
}}
//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}//collapsible



 
