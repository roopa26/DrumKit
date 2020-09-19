var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0;i<numberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",btnClickEventListener)
}
function btnClickEventListener(event){
  var classAttribute = this.getAttribute('class')[0];
  var soundTrack = "sounds/";
  switch(classAttribute){
    case "w": soundTrack+="crash.mp3";break;
    case "a": soundTrack+="kick-bass.mp3";break;
    case "s": soundTrack+="snare.mp3";break;
    case "d": soundTrack+="tom-1.mp3";break;
    case "j": soundTrack+="tom-2.mp3";break;
    case "k": soundTrack+="tom-3.mp3";break;
    case "l": soundTrack+="tom-4.mp3";break;
    default : console.log("invalid key"); break;
  }
  var audio = new Audio(soundTrack);
  audio.play();
}
document.addEventListener("keypress",function(event){
  var classAttribute = event.key;
  var soundTrack = "sounds/";
  switch(classAttribute){
    case "w": var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "a": var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s": var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "d": var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "j": var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k": var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l": var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    default : console.log("invalid key");
    break;
  }
})
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
