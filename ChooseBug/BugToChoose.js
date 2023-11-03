import { chromaticWheelColors } from "../GlobarVars/chromaticColors";

const boxToShowCurrentBug=document.createElement('div')
boxToShowCurrentBug.className='card_current_bug'
const bugRequired=document.createElement('div')
bugRequired.className='bug_to_pick'

function handleBugToChoose (){
    const parentElement=document.querySelector('.header_game_options');
    const allBugsMoving=document.querySelectorAll('.bugs_styles')
    const chromaticElement=document.querySelector('.wheel_status')
    parentElement.appendChild(boxToShowCurrentBug)
    boxToShowCurrentBug.appendChild(bugRequired)
    bugRequired.style.backgroundColor=`${chromaticWheelColors[0]}`
    console.log(chromaticWheelColors)
    allBugsMoving[0].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]).getPropertyValue('--set-colorbtn') //los estilos de ese insecto
        if(colorName === chromaticWheelColors[0]){ // si el color del insecto coincide al de la primera posicion del array ejecuto
            console.log('es el color')
            chromaticElement.style.setProperty(`--set-${colorName}colorwheel`, `${colorName}`);// aplica el color en la rueda
        }

    })
    allBugsMoving[1].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[1]).getPropertyValue('--set-colorbtn')
        console.log('hola color  '+ colorName)
        chromaticElement.style.setProperty('--set-bluecolorwheel', `${colorName}`);

    })
    allBugsMoving[2].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[2]).getPropertyValue('--set-colorbtn')
        console.log('hola color '+ colorName)
        chromaticElement.style.setProperty('--set-yellowcolorwheel', `${colorName}`);

    })
}
export {handleBugToChoose}
