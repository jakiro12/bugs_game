import {  secondarychromaticWheelColors } from "../GlobarVars/chromaticColors"

const modalBox=document.createElement('main')
const modalContainer=document.createElement('article')
const btnCloseModal=document.createElement('button')
    modalContainer.className='alert'
    modalContainer.id='modal_level_info'
    modalBox.className='modal_box_information'
    btnCloseModal.innerText='cerrar'
export function levelSuccesslful(){
    const wheelSettings=document.getElementById('wheel')
    const secondaryColors=['violet','green','orange'] 
    const bugRequired=document.querySelector('.bug_to_pick')
    modalContainer.appendChild(modalBox)
    const gameView=document.getElementById('phaser-container')
    gameView.appendChild(modalContainer)
    modalBox.innerText='nivel completado'
    modalBox.appendChild(btnCloseModal)

    function subLevel_1(){
        secondarychromaticWheelColors.push(secondaryColors[0])
        secondarychromaticWheelColors.push(secondaryColors[1])
        secondarychromaticWheelColors.push(secondaryColors[2])
        modalContainer.className=''
        if (secondarychromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = secondarychromaticWheelColors[0];
            wheelSettings.classList.remove(wheelSettings.classList[0])
            wheelSettings.className='wheel_status_sub_level_2'
        }
    }

    btnCloseModal.addEventListener('click',()=>{
        console.log(wheelSettings.classList)
        if(wheelSettings.classList[0] === 'wheel_status_sub_level_1'){
            subLevel_1()
        }
    })

}