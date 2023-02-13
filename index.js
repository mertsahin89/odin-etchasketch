
const gridSetter = document.querySelector(".grid-setter");

const colorSetter = document.querySelector(".color-setter");

let gridInput = document.querySelector(".grid-setter").value;

const eraser = document.querySelector(".eraser");

const rainbow = document.querySelector(".rainbow");

const reset = document.querySelector(".reset");

let color = "black";

let isEraserActive = false;

let isRainbowActive = false;

let gridNumber = gridInput * gridInput;

let myDivs = null;

let drag = false;




createGrid(6, 36);
paintPixel();
activateEraser();
setGrid();
inputColorChanger();
resetGrid();
rainbowMode();



function paintPixel() {

    myDivs = document.querySelectorAll(".sketch");

    for (let index = 0; index < myDivs.length; index++) {
        myDivs[index].addEventListener("mousedown", function () {

            drag = true;
            this.style.backgroundColor = colorGen();
        })

        myDivs[index].addEventListener("mouseover", function () {



            switch (drag) {
                case true:
                    this.style.backgroundColor = colorGen();
                    break;

                default:
                    "This is an easter egg!"
                    break;
            }

            myDivs[index].addEventListener("mouseup", function () {

                drag = false;

            })
        })

    }
}

function setGrid() {
    gridSetter.addEventListener("input", function (event) {

        document.querySelector(".container").innerHTML = '';
        gridInput = document.querySelector("input").value;

        gridNumber = gridInput * gridInput;

        createGrid(gridInput, gridNumber);
        paintPixel();

    });
}


function inputColorChanger() {
    colorSetter.addEventListener("input", function (event) {
        color = this.value;
    })
}



function resetGrid() {
    reset.addEventListener("click", function () {
        let divsToReset = document.querySelectorAll(".sketch");
        for (let index = 0; index < divsToReset.length; index++) {
            divsToReset[index].style.backgroundColor = "white";

        }
    })
}


function activateEraser() {
    eraser.addEventListener("click", function (event) {
        isEraserActive = !isEraserActive;
        console.log(isEraserActive);
        switch (isEraserActive ) {
            case true:
                eraser.classList.add("eraser-activated");
                toggleColorPicker();
                rainbow.disabled = true;
                break;

            case false:
                eraser.classList.remove("eraser-activated");
                toggleColorPicker();
                break;

            default:
                break;
        }
    })

}



function createGrid(a, b) {

    document.querySelector(".container").style.gridTemplateColumns = `repeat(${a} , auto)`;
    document.querySelector(".container").style.gridTemplateRows = `repeat(${a} , auto)`;

    for (let index = 0; index < b; index++) {

        let node = document.createElement("div");
        node.classList.add("sketch");
        document.querySelector(".container").appendChild(node);

    }
}


function toggleColorPicker() {

    colorSetter.disabled = !colorSetter.disabled;
}


function rainbowMode() {

    rainbow.addEventListener("click", function () {
        isRainbowActive = !isRainbowActive;
        switch (isRainbowActive) {
            case true:
                rainbow.classList.add("rainbow-activated");
                break;

            case false:
                rainbow.classList.remove("rainbow-activated");
                break;
        }

    })
}


function colorGen() {
    let colorArray = [];
    for (let index = 0; index < 3; index++) {
        let rgb = Math.floor(Math.random() * 256);
        colorArray.push(rgb);

    }

    if (isEraserActive) {
        return "white";
    } else if (isRainbowActive) {
        return "rgb(" + colorArray[0] + "," + colorArray[1] + "," + colorArray[2] + ")"
    } else {
        return color;
    }
}