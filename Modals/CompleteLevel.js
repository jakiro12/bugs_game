import {  secondarychromaticWheelColors, ternarychromaticWheelColors } from "../GlobarVars/chromaticColors"

const modalBox=document.createElement('main')
const modalContainer=document.createElement('article')
const btnCloseModal=document.createElement('button')
const parrfAboutLevel=document.createElement('p')
    modalContainer.className='alert'
    modalContainer.id='modal_level_info'
    modalBox.className='modal_box_information'
    btnCloseModal.innerText='cerrar'
    parrfAboutLevel.className='alert_information'
export function levelSuccesslful(){
    const wheelSettings=document.getElementById('wheel')
    const secondaryColors=['purple','green','orange'] 
    const ternaryColors=['blueviolet','orangered','chartreuse','teal','violet','magenta']
    const bugRequired=document.querySelector('.bug_to_pick')
    modalContainer.appendChild(modalBox)
    const gameView=document.getElementById('phaser-container')
    gameView.appendChild(modalContainer)
    parrfAboutLevel.textContent='nivel 1 completado'
    modalBox.appendChild(parrfAboutLevel)
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
    function subLevel_2(){
        ternarychromaticWheelColors.push(ternaryColors[0])
        ternarychromaticWheelColors.push(ternaryColors[1])
        ternarychromaticWheelColors.push(ternaryColors[2])
        ternarychromaticWheelColors.push(ternaryColors[3])
        ternarychromaticWheelColors.push(ternaryColors[4])
        ternarychromaticWheelColors.push(ternaryColors[5])
        modalContainer.className=''
        if (secondarychromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = ternarychromaticWheelColors[0];
            
        }

    }
    btnCloseModal.addEventListener('click',()=>{
        console.log(wheelSettings.classList)
        if(wheelSettings.classList[0] === 'wheel_status_sub_level_1'){
            subLevel_1()
        }else if(wheelSettings.classList[0] === 'wheel_status_sub_level_2'){
            console.log('cerrar nivel 2')
            subLevel_2()
            console.log(ternarychromaticWheelColors)
        }else{
            console.log('juego terminado')
        }
    })

}