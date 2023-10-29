function addButtonsToChangeColors(){
    let sectionToBtns=document.querySelector('.footer_game_options')
    let changeColorBugsTag=document.querySelectorAll('.bugs_styles')
    let btnRed=document.createElement('button')
    let btnBlue=document.createElement('button')
    let btnYellow=document.createElement('button')
    
    sectionToBtns.appendChild(btnBlue)
    sectionToBtns.appendChild(btnYellow)
    sectionToBtns.appendChild(btnRed)

    btnBlue.style.backgroundColor='blue'
    btnRed.style.backgroundColor='red'
    btnYellow.style.backgroundColor='yellow'


    btnRed.className='btn_to_handle_colors'
    btnBlue.className='btn_to_handle_colors'
    btnYellow.className='btn_to_handle_colors'

    btnRed.addEventListener('click',()=>{
        changeColorBugsTag.forEach((bug) => {
            bug.style.setProperty('--set-colorbtn', 'red');
        });
    })
    btnBlue.addEventListener('click',()=>{
        changeColorBugsTag.forEach((bug) => {
            bug.style.setProperty('--set-colorbtn', 'blue');
        });
    })
    btnYellow.addEventListener('click',()=>{
        changeColorBugsTag.forEach((bug) => {
            bug.style.setProperty('--set-colorbtn', 'yellow');
        });
    })
}
export {addButtonsToChangeColors}