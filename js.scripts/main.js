 
                                                // Custom cursor Pointer. //

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; 
const pos = { x: 0, y: 0 }; 
const speed = 0.1; 

const updateCoordinates = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
  return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
  const distance = Math.sqrt(
    Math.pow(diffX, 2) + Math.pow(diffY, 2)
  );
  const maxSqueeze = 0.15;
  const accelerator = 1500;
  return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
  const diffX = Math.round(mouse.x - pos.x);
  const diffY = Math.round(mouse.y - pos.y);
  
  pos.x += diffX * speed;
  pos.y += diffY * speed;
  
  const angle = getAngle(diffX, diffY);
  const squeeze = getSqueeze(diffX, diffY);
  
  const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
  const rotate = 'rotate(' + angle +'deg)';
  const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

  cursor.style.transform = translate;
  cursorCircle.style.transform = rotate + scale;
};

function loop() {
  updateCursor();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
  curosrModifier.addEventListener('mouseenter', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.add(className);
  });
  
  curosrModifier.addEventListener('mouseleave', function() {
    const className = this.getAttribute('cursor-class');
    cursor.classList.remove(className);
  });
});





                                          // Auto Typing //

var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','), 
            typer =  document.querySelector("span[words]"), 
            typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70), 
            typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);
    
var currentWordIndex = 0, currentCharacterIndex = 0; 

function type(){

    var wordToType = wordsToType[currentWordIndex%wordsToType.length];

    if(currentCharacterIndex < wordToType.length){
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    }else{

        setTimeout(erase, typingDelay);
    }

}
function erase(){
    var wordToType = wordsToType[currentWordIndex%wordsToType.length]; 
    if(currentCharacterIndex >0){
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex -1);
        setTimeout(erase, typingSpeed);
    }else{

        currentWordIndex++; 
        setTimeout(type, typingDelay);
    }

}

window.onload = function(){
    type(); 
}



                                               // AOS Library //


AOS.init();              




                                                // Ham Burger Menu //

  const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});                                