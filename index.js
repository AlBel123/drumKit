// // I create the loop for all the drum buttons to call the function

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detectin Keyboard pressed
document.addEventListener("keypress",function(event){

    makeSound (event.key);

    buttonAnimation(event.key);

})

function makeSound(key){

switch (key) {
    case "a":
        var tom1=new Audio("sounds/tom-1.mp3")
        tom1.play();  
       
      
        break;
    
    case "s":
        var tom2=new Audio("sounds/tom-2.mp3");
        tom2.play();
        break; 

    case "d":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    
    case "f":
        var tom4 = new Audio ("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "k":
        var crash = new Audio ("sounds/crash.mp3");
        crash.play();
        break;
    
    case "l":
        var snare = new Audio ("sounds/snare.mp3");
        snare.play();
        break;


    default: console.log(buttonInnerHTML);
     
        }

    }

    //Amimation adtion to the letters

    function buttonAnimation(currentKey){

        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.toggle("pressed");
        
        setTimeout(function(){
            activeButton.classList.toggle("pressed");
        }, 100);

    }










// document.addEventListener("mouseover", function(){
//     document.querySelector("#title").innerHTML="mouse is over!";
// })

// document.addEventListener("mouseout", function(){
//     document.querySelector("#title").innerHTML="mouse has gone!";
// })


