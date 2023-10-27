const boxToShowCurrentBug=document.createElement('div')
boxToShowCurrentBug.className='card_current_bug'
function handleBugToChoose (){
    const parentElement=document.querySelector('.header_game_options');
    parentElement.appendChild(boxToShowCurrentBug)
}
export {handleBugToChoose}
