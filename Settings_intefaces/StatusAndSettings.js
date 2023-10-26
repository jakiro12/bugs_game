    const wheelColorTag=document.createElement('div')
    wheelColorTag.className='wheel_status'
function addComponentsToHandleStatusAndSettings(){
const parentElement=document.querySelector('.game_info_and_options_2')
    parentElement.appendChild(wheelColorTag)
}

export {addComponentsToHandleStatusAndSettings}