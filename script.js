
let boxSize = 16

createBoxes(boxSize)
addBoxEventListerner()

// set up event listner on button
const btn = document.getElementById('clear');
btn.addEventListener('click', resetFunc);

function addBoxEventListerner(){
    // get node list of all boxes
    const boxes = document.querySelectorAll('.box');

    //add event listener for each box
    boxes.forEach((item) => {
        item.addEventListener('mouseover', (e) => paint(e.target.id))
    });
}

function resetFunc(){

  // remove all boxes in container
    let element = document.getElementById("container");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

    // get size of next grid
    let boxText = (prompt('Change Grid Size?'));

    // check number entered

    if (boxText === null){
        boxSize = 16
    }
    else{
        if (Number(boxText) > 100 || Number(boxText) < 1){
            alert('You must enter a number between 1 and 100 !')
            boxSize = 16
        }
        else{

            if (!boxText.search(/[^0-9]/)){
                alert('You must enter a number !')
                boxSize = 16
            }
            else{
                boxSize = Number(boxText)
             }
        }
  
    }

    // set up size of grid by changing grid template variable
    let sizeText = 'repeat(' + boxSize + ', 1fr) / repeat(' + boxSize + ', 1fr)'
    var containerStyles = document.getElementById('container').style;
    containerStyles.setProperty('--grid-template-var', sizeText)

    createBoxes(boxSize)
    addBoxEventListerner()
}

function createBoxes(size) {
    // create boxes (equal square of boxsize)
    for (let i = 1; i <= Math.pow(size,2); i++){
        // create box
        const box = document.createElement('div');

        // give box class and id
        box.classList.add('box');
        box.id = i;

        // place box in grid - append to grid
        container.appendChild(box);
    }
}



function paint(id) {

    //console.log(typeof(id))
    const selectedBox = document.getElementById(id);
    const paintColor = randomColor()
    selectedBox.style.backgroundColor = paintColor
}

function randomColor(){
    return 'rgb(' + randomNumber(0,256) +',' + + randomNumber(0,256) +','+ randomNumber(0,256) +')'
}

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}