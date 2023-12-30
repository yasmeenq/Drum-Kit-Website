

// know what drum got clicked

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i <numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",react); //then react function
}


function react(){
    var buttonInnerHTML = this.innerHTML;  // here we take the button and take what's written in it
    makeSound(buttonInnerHTML);   // then take it to make sound ex. makesound(w); so the key now is w
    buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", report);  // report what key was pressed down

function report (event){
    makeSound(event.key);          // this will output the string of the key that was pressed then take it to makesound ex. makesound(s);
    buttonAnimation(event.key);
}


function makeSound(key){           // here whatever key was pressed or clicked will come here and will make a sound          
    switch(key) {
        case 'w':
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;                
        case 'k':
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;
        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;                
        default:
          console.log(buttonInnerHTML);
      }
    

    function buttonAnimation();
}