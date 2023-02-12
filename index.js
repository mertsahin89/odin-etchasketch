
const gridSetter = document.querySelector(".grid-setter");

const colorSetter = document.querySelector(".color-setter");

let gridInput = document.querySelector(".grid-setter").value;

const eraser = document.querySelector(".eraser");

const reset = document.querySelector(".reset");

let color = "black";

let isEraserActive = false;


let gridNumber = gridInput * gridInput;

let myDivs = null;

let drag = false;




createGrid(6, 36);
changeColor();


function changeColor() {
   myDivs= document.querySelectorAll(".sketch");
   for (let index = 0; index < myDivs.length; index++) {
    myDivs[index].addEventListener("mousedown", function(){
        console.log(this);
        drag = true;
        this.style.backgroundColor = color;
    })
    myDivs[index].addEventListener("mouseover", function(){
        switch (drag && !isEraserActive) {
            case true:
                this.style.backgroundColor = color;
                break;
        
            default:
                "This is an easter egg!"
                break;
        }
        myDivs[index].addEventListener("mouseup", function(){
            console.log(this);
            drag = false;
            
        })
    })
    

    
}
}


gridSetter.addEventListener("input", function(event){

    document.querySelector(".container").innerHTML = '';
    gridInput = document.querySelector("input").value;

    gridNumber = gridInput * gridInput;
    console.log("event");
    
    createGrid(gridInput, gridNumber);
    changeColor();
    
});

colorSetter.addEventListener("input", function(event) {
    color = this.value;
})

reset.addEventListener("click", function () {
    let divsToReset = document.querySelectorAll(".sketch");
    for (let index = 0; index < divsToReset.length; index++) {
        divsToReset[index].style.backgroundColor = "white";
        
    }
})

eraser.addEventListener("click", function(event){
    isEraserActive = !isEraserActive;
    console.log(isEraserActive);
    switch (isEraserActive) {
        case true:
            eraser.classList.add("eraser-activated");
            color = "white";
            break;

        case false:
            eraser.classList.remove("eraser-activated");
            color = "black";
            break;    
    
        default:
            break;
    }
})


function createGrid(a, b) {
    
    document.querySelector(".container").style.gridTemplateColumns = `repeat(${a} , auto)`;
    document.querySelector(".container").style.gridTemplateRows = `repeat(${a} , auto)`;
    for (let index = 0; index < b; index++) {
    
        let node = document.createElement("div");
        node.classList.add("sketch");
        document.querySelector(".container").appendChild(node);
        
    }
}


