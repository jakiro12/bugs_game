import { chromaticWheelColors } from "../GlobarVars/chromaticColors"

const modalBox=document.createElement('main')
const modalContainer=document.createElement('article')
const btnCloseModal=document.createElement('button')
    modalContainer.className='alert'
    modalBox.className='modal_box_information'
    btnCloseModal.innerText='cerrar'
export function levelSuccesslful(){
    const secondaryColors=['violet','green','orange'] 
    const bugRequired=document.querySelector('.bug_to_pick')
    modalContainer.appendChild(modalBox)
    const gameView=document.getElementById('phaser-container')
    gameView.appendChild(modalContainer)
    modalBox.innerText='nivel completado'
    modalBox.appendChild(btnCloseModal)
    btnCloseModal.addEventListener('click',()=>{
        chromaticWheelColors.push(secondaryColors[0])
        chromaticWheelColors.push(secondaryColors[1])
        chromaticWheelColors.push(secondaryColors[2])
        modalContainer.className=''
        if (chromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = chromaticWheelColors[0];
          }
        console.log(chromaticWheelColors)
    })

}