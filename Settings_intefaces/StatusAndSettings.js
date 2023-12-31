    const wheelColorTag=document.createElement('div')
    const fireflyTag=document.createElement('div')
    const progressBarTag=document.createElement('div')
    const btnSettignsTag=document.createElement('div')
    const btnVolume=document.createElement('button')
    const btnGear=document.createElement('button')
    const btnHome=document.createElement('button')
    const btnRestart=document.createElement('button')
    const progressBarSumary=document.createElement('div')
    btnSettignsTag.appendChild(btnVolume)
    btnSettignsTag.appendChild(btnGear)
    btnSettignsTag.appendChild(btnHome)
    btnSettignsTag.appendChild(btnRestart)
    progressBarTag.appendChild(progressBarSumary)
    wheelColorTag.className='wheel_status_sub_level_1'
    wheelColorTag.id='wheel'
    fireflyTag.className='fire_fly_container'
    progressBarTag.className='progess_bar'
    btnSettignsTag.className='btn_settings_ui'
    progressBarTag.setAttribute('max','100')
    progressBarTag.setAttribute('min','0')
    btnVolume.className='btn_volume'
    btnGear.className='btn_volume'
    btnHome.className='btn_volume'
    btnRestart.className='btn_volume'

function addComponentsToHandleStatusAndSettings(){
const parentElement=document.querySelector('.game_info_and_options_2')
    parentElement.appendChild(wheelColorTag)
    parentElement.appendChild(fireflyTag)
    parentElement.appendChild(progressBarTag)
    parentElement.appendChild(btnSettignsTag)
    progressBarTag.value='70'
}

export {addComponentsToHandleStatusAndSettings}