
for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {

    //Anonymous funciton
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        console.log(this)
        console.log(this.innerHTML)
        playSound(this.innerHTML)
        addAnimationOnButtonClick(this.innerHTML)
    })
}

// document.addEventListener("keypress", function() {
//     alert("key pressed");
// });

document.addEventListener("keydown", function (event) {
    // alert("key down");
    console.log(event)
    console.log("key "+event.key)
    playSound(event.key)
    addAnimationOnButtonClick(event.key)
    
});


function playSound(key) {
     var soundURL = "sounds/"
     switch (key) {
         case "w":
             soundURL += "kick-bass.mp3";
             break;
         case "a":
             soundURL += "snare.mp3";
             break;
         case "s":
             soundURL += "tom-1.mp3";
             break;
         case "d":
             soundURL += "tom-2.mp3";
             break;
         case "j":
             soundURL += "tom-3.mp3";
             break;
         case "k":
             soundURL += "tom-4.mp3";
             break;
         case "l":
             soundURL += "crash.mp3";
             break;
        default:
            console.log("wrong key pressed");
     }
     var audio = new Audio(soundURL);
     audio.play();
}

function addAnimationOnButtonClick(key) {
    var activeButton = document.querySelector("." +key)
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}
