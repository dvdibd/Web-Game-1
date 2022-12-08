var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function(){
    var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
    );
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over.");
        
        block.style.animation = "block 1s infinite linear";
    }
},10);