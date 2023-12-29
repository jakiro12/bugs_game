import { pickTwoColors, secondarychromaticWheelColors, chromaticWheelColors, colorCombinations, ternarychromaticWheelColors } from "../GlobarVars/chromaticColors"

function addButtonsToChangeColors(){
    let sectionToBtns=document.querySelector('.footer_game_options')
    let changeColorBugsTag=document.querySelectorAll('.bugs_styles')
    let btnRed=document.createElement('button')
    let btnBlue=document.createElement('button')
    let btnYellow=document.createElement('button')
    
    let btnGreen=document.createElement('button')
    let btnPurple=document.createElement('button')
    let btnOrange=document.createElement('button')

    sectionToBtns.appendChild(btnBlue)
    sectionToBtns.appendChild(btnYellow)
    sectionToBtns.appendChild(btnRed)
    sectionToBtns.appendChild(btnGreen)
    sectionToBtns.appendChild(btnPurple)
    sectionToBtns.appendChild(btnOrange)


    btnBlue.style.backgroundColor='blue'
    btnRed.style.backgroundColor='red'
    btnYellow.style.backgroundColor='yellow'
    btnGreen.style.backgroundColor='green'
    btnPurple.style.backgroundColor='purple'
    btnOrange.style.backgroundColor='orange'

    btnRed.className='btn_to_handle_colors'
    btnBlue.className='btn_to_handle_colors'
    btnYellow.className='btn_to_handle_colors'
    btnGreen.className='btn_to_handle_colors_secondary'
    btnPurple.className='btn_to_handle_colors_secondary'
    btnOrange.className='btn_to_handle_colors_secondary'

    function getMixedColor() {
        // demora 0.5 segundos en cambiar al color deseado
        if(!Object.values(pickTwoColors).includes('')){//si hay dos colores aplica lo siguiente
            const sortedColors = Object.values(pickTwoColors).sort().join('').toLowerCase(); // los ordenos y los uno, para luego buscar el valor por nombre,
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorCombinations[`${sortedColors}`]}`);
            });
            console.log(pickTwoColors)
        }else{
            console.log('falta un color')
        }
        
    }
    btnRed.addEventListener('click',()=>{
        let colorName='red'
        btnRed.style.opacity='1'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
            btnYellow.style.opacity='0.7'
            btnBlue.style.opacity='0.7'
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && Object.values(pickTwoColors).includes(colorName) === false ){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                console.log(positionToAddColor)
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}` //aqui esta el error agrega un indice mas
                btnRed.style.boxShadow='0px 0px 15px red'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else if(Object.values(pickTwoColors).includes(colorName) === true){
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                console.log(findColorToRemoveIt)
                pickTwoColors[`color${findColorToRemoveIt}`] = '' // cuando lo remuevo estoy agregando otro :D
                btnRed.style.boxShadow=''
            }else{
                return // caso en que quiera agregar un color cuando ya hay dos
            }
        }
    })
    btnBlue.addEventListener('click',()=>{
        let colorName='blue'
        btnBlue.style.opacity='1'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
            btnYellow.style.opacity='0.7'
            btnRed.style.opacity='0.7'
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && Object.values(pickTwoColors).includes(colorName) === false){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                console.log(positionToAddColor)
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}` //aqui esta el error agrega un indice mas
                btnBlue.style.boxShadow='0px 0px 15px blue'
                console.log(pickTwoColors)
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else if(Object.values(pickTwoColors).includes(colorName) === true){
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                console.log(findColorToRemoveIt)
                pickTwoColors[`color${findColorToRemoveIt}`] = ''
                btnBlue.style.boxShadow=''
            }else{
                return // por si ya hay 2 colores y quiero meter otro
            }
        }
    })
    btnYellow.addEventListener('click',()=>{
        let colorName='yellow'
        btnYellow.style.opacity='1'
        if(chromaticWheelColors.length > 0){
            changeColorBugsTag.forEach((bug) => {
                bug.style.setProperty('--set-colorbtn', `${colorName}`);
            });
            btnBlue.style.opacity='0.7'
            btnRed.style.opacity='0.7'
        }
        if (secondarychromaticWheelColors.length > 0 || ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && Object.values(pickTwoColors).includes(colorName) === false){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                console.log(positionToAddColor)
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}` //aqui esta el error agrega un indice mas
                btnYellow.style.boxShadow='0px 0px 15px yellow'
                console.log(pickTwoColors)
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else if(Object.values(pickTwoColors).includes(colorName) === true){
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                console.log(findColorToRemoveIt)
                pickTwoColors[`color${findColorToRemoveIt}`] = ''
                btnYellow.style.boxShadow=''
            }else{
                return // por si ya hay 2 colores.- -
            }
        }
    })
    btnGreen.addEventListener('click',()=>{
        let colorName='green'
        if(ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}`
                btnGreen.style.boxShadow='0px 0px 15px green'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt}`] = ''
                btnGreen.style.boxShadow=''
            }
        }
    })
    btnPurple.addEventListener('click',()=>{
        let colorName='purple'
        if(ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}`
                btnPurple.style.boxShadow='0px 0px 15px purple'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt}`] = ''
                btnPurple.style.boxShadow=''
            }
        }
    })
    btnOrange.addEventListener('click',()=>{
        let colorName='orange'
        if(ternarychromaticWheelColors.length > 0){
            if(Object.values(pickTwoColors).includes('')  && !Object.values(pickTwoColors).includes(colorName)){ //Verificar si aun no se eligieron colores, por lo tanto ambos o uno esta vacio
                let positionToAddColor=Object.values(pickTwoColors).findIndex((e)=> e === '')
                pickTwoColors[`color${positionToAddColor}`] = `${colorName}`
                btnOrange.style.boxShadow='0px 0px 15px orange'
                setTimeout(() => {
                    getMixedColor()
                }, 500);
            }else{
                let findColorToRemoveIt=Object.values(pickTwoColors).findIndex((e)=> e === colorName)
                pickTwoColors[`color${findColorToRemoveIt}`] = ''
                btnOrange.style.boxShadow=''
            }
        }
    })
}
export {addButtonsToChangeColors}