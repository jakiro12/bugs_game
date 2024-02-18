import {  secondarychromaticWheelColors, ternarychromaticWheelColors } from "../GlobarVars/chromaticColors";
import { levelSuccessDescription } from "../GlobarVars/describeInfo";

const modalBox=document.createElement('main')
const modalContainer=document.createElement('article')
const btnCloseModal=document.createElement('button')
const parrfAboutLevel=document.createElement('p')
    modalContainer.className='alert'
    modalContainer.id='modal_level_info'
    modalBox.className='modal_box_information'
    btnCloseModal.innerText='X'
    parrfAboutLevel.className='alert_information'
export function levelSuccesslful(){
    const wheelSettings=document.getElementById('wheel')
    const secondaryColors=['purple','green','orange'] 
    const ternaryColors=['blueviolet','orangered','chartreuse','teal','goldenrod','magenta']
    const bugRequired=document.querySelector('.bug_to_pick')
    modalContainer.appendChild(modalBox)
    const gameView=document.getElementById('phaser-container')
    gameView.appendChild(modalContainer)
    parrfAboutLevel.textContent=levelSuccessDescription[0]
    modalBox.appendChild(parrfAboutLevel)
    modalBox.appendChild(btnCloseModal)
    
    function subLevel_1(){
        secondarychromaticWheelColors.push(secondaryColors[0]) //Adiciono nuevos colores
        secondarychromaticWheelColors.push(secondaryColors[1])
        secondarychromaticWheelColors.push(secondaryColors[2]) //Fin nuevos colores
        modalContainer.className=''
        let bar_progress_status=document.querySelector('.progess_bar > div')
        bar_progress_status.style.setProperty('--set-barprogress','0%') //Reinicia la barra de progreso
        if (secondarychromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = secondarychromaticWheelColors[0];
            wheelSettings.classList.remove(wheelSettings.classList[0])
            wheelSettings.className='wheel_status_sub_level_2'
            parrfAboutLevel.textContent=levelSuccessDescription[1]
        }
    }
    function subLevel_2(){
        ternarychromaticWheelColors.push(ternaryColors[0])//Adiciono nuevos colores
        ternarychromaticWheelColors.push(ternaryColors[1])
        ternarychromaticWheelColors.push(ternaryColors[2])
        ternarychromaticWheelColors.push(ternaryColors[3])
        ternarychromaticWheelColors.push(ternaryColors[4])
        ternarychromaticWheelColors.push(ternaryColors[5])//Fin nuevos colores
        modalContainer.className=''
        let setSecondaryBtnToChangeColors=document.querySelectorAll('.btn_to_handle_colors_secondary')
        let setFooterContainerBtns=document.getElementById('handle_colors_section')
        if (ternarychromaticWheelColors.length > 0) {
            bugRequired.style.backgroundColor = ternarychromaticWheelColors[0];
            wheelSettings.className='wheel_status_sub_level_3'
            setSecondaryBtnToChangeColors.forEach(btn => {
            btn.style.setProperty('--set-displayBtnSecondaries', 'block');
          });
          setFooterContainerBtns.classList.remove(setFooterContainerBtns.classList[0])
          setFooterContainerBtns.className='footer_game_options_final_level'
        }

    }
    btnCloseModal.addEventListener('click',()=>{
        if(wheelSettings.classList[0] === 'wheel_status_sub_level_1'){
            subLevel_1()
        }else if(wheelSettings.classList[0] === 'wheel_status_sub_level_2'){
            subLevel_2()
        }else{
            console.log('juego terminado') // Agregar el ultimo modal aqui
        }
    })

}