import { chromaticWheelColors } from "../GlobarVars/chromaticColors";
import { levelSuccesslful } from "../Modals/CompleteLevel";

const boxToShowCurrentBug=document.createElement('div')
boxToShowCurrentBug.className='card_current_bug'
const bugRequired=document.createElement('div')
bugRequired.className='bug_to_pick'

function handleBugToChoose (){
    const parentElement=document.querySelector('.header_game_options');
    const allBugsMoving=document.querySelectorAll('.bugs_styles')
    const chromaticElement=document.querySelector('.wheel_status_sub_level_1')
    parentElement.appendChild(boxToShowCurrentBug)
    boxToShowCurrentBug.appendChild(bugRequired)


    function updateColorToSelect(){
        if (chromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = chromaticWheelColors[0];
          } else {
            bugRequired.style.backgroundColor = "grey"; // Si el array esta vacio dejar este color
            setTimeout(() => {
                levelSuccesslful()
            }, 1000);
          }
    }
    updateColorToSelect()
    bugRequired.style.backgroundColor=`${chromaticWheelColors[0]}`
    console.log(chromaticWheelColors)
    allBugsMoving[0].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir
        }
    })
    allBugsMoving[1].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir
        }
    }) 
    allBugsMoving[2].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0] && chromaticWheelColors.includes(colorName)){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
            chromaticWheelColors.splice(chromaticWheelColors.indexOf(colorName), 1);
            console.log(chromaticWheelColors)
            updateColorToSelect(); //Refrescar color a elegir
        }
    })
}
export {handleBugToChoose}
