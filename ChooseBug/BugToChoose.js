const boxToShowCurrentBug=document.createElement('div')
boxToShowCurrentBug.className='card_current_bug'
function handleBugToChoose (){
    const parentElement=document.querySelector('.header_game_options');
    const allBugsMoving=document.querySelectorAll('.bugs_styles')
    parentElement.appendChild(boxToShowCurrentBug)
    console.log(allBugsMoving)
    allBugsMoving[0].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[0]) //los estilos de ese insecto
       // let cs = getComputedStyle(ele);
     //   para.textContent = ("Previously " + cs.getPropertyValue('--innerColor') + " color");
        console.log('hola color  '+ colorName.getPropertyValue('--set-bluebtn'))
    })
    allBugsMoving[1].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[1])
        console.log('hola color  '+ colorName.getPropertyValue('--set-bluebtn'))
    })
    allBugsMoving[2].addEventListener('click',()=>{
        let colorName= getComputedStyle(allBugsMoving[2])
        console.log('hola color '+ colorName.getPropertyValue('--set-bluebtn'))
    })
}
export {handleBugToChoose}
