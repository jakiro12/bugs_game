
    const informationThisLevelBox=document.createElement('div') //Contenedor de la informacion general
    const bookBtnTag=document.createElement('div') //contenedor del Logo del libro
    const titleInformationBox=document.createElement('h3') //Titulo de la caja de informacion
    const responsiveSettingNavbar=document.createElement('div') 
    const imgNavBarFly=document.createElement('div')
    const progressBarMobile=document.createElement('div')
    const btnOptionsMobile=document.createElement('div')
    const desciptionBox=document.createElement('div')
    const barLevelMobile=document.createElement('div')
    const volumeBtnMobile=document.createElement('button')
    const gearBtnMobile=document.createElement('button')
    titleInformationBox.innerText='¿Como jugar?'
    titleInformationBox.className='title_box_information'
    desciptionBox.innerText='El juego consiste en elegir la esfera con el color que es igual al panel superior izquierdo dentro de la pantalla del juego, ejemplo si la esfera es azul debe elegir el color de la esfera y luego hacer click sobre alguna, cada vez la elija una esfera con el color requerido se agrerara dicho color al circulo cromatica.'
    desciptionBox.className='description_box_information'
    responsiveSettingNavbar.className='nabvar_options'
    imgNavBarFly.className='logo_fly_mobile'
    progressBarMobile.className='progess_bar_mobile'
    btnOptionsMobile.className='btn_settings_ui_mobile'
function informationAboutPickLevel(){
    const parentElementInfo=document.querySelector('.game_info_and_options_1')
    informationThisLevelBox.className='box_about_this_level'
    bookBtnTag.className='box_about_this_level'
    parentElementInfo.appendChild(informationThisLevelBox)
    parentElementInfo.appendChild(bookBtnTag)
    parentElementInfo.appendChild(responsiveSettingNavbar)
    informationThisLevelBox.appendChild(titleInformationBox)
    informationThisLevelBox.appendChild(desciptionBox)
    responsiveSettingNavbar.appendChild(imgNavBarFly)
    responsiveSettingNavbar.appendChild(progressBarMobile)
    responsiveSettingNavbar.appendChild(btnOptionsMobile)
    progressBarMobile.appendChild(barLevelMobile)
    btnOptionsMobile.appendChild(volumeBtnMobile)
    btnOptionsMobile.appendChild(gearBtnMobile)
}
export {informationAboutPickLevel}