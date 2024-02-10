
    const informationThisLevelBox=document.createElement('div') //Contenedor de la informacion general
    const bookBtnTag=document.createElement('div') //contenedor del Logo del libro
    const titleInformationBox=document.createElement('h3') //Titulo de la caja de informacion
    titleInformationBox.innerText='¿Como jugar?'
    titleInformationBox.className='title_box_information'
    const desciptionBox=document.createElement('div')
    desciptionBox.innerText='El juego consiste en elegir la esfera con el color que es igual al panel superior derecho dentro de la pantalla del juego, ejemplo si la esfera es azul debe elegir el color de la esfera y luego hacer click sobre alguna, cada vez la elija correctamente el color se agregara a la rueda cromatica.'
    desciptionBox.className='description_box_information'

function informationAboutPickLevel(){
    const parentElementInfo=document.querySelector('.game_info_and_options_1')
    informationThisLevelBox.className='box_about_this_level'
    bookBtnTag.className='box_about_this_level'
    parentElementInfo.appendChild(informationThisLevelBox)
    parentElementInfo.appendChild(bookBtnTag)
    informationThisLevelBox.appendChild(titleInformationBox)
    informationThisLevelBox.appendChild(desciptionBox)
}
export {informationAboutPickLevel}