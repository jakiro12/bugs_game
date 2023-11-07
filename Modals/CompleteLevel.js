const modalBox=document.createElement('main')
const modalContainer=document.createElement('article')
    modalContainer.className='alert'
    modalBox.className='modal_box_information'
export function levelSuccesslful(){
    modalContainer.appendChild(modalBox)
    const gameView=document.getElementById('phaser-container')
    gameView.appendChild(modalContainer)
    modalBox.innerText='nivel completado'

}