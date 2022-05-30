/*
    * Project Requirments:
    * - Change the banckground color by generating random RGB Color by clicking a butting
    * -  

*/

// Global value

let divToast = null;

// Step 01 
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root')
    const color_input = document.getElementById('color_input')
    const change_button = document.getElementById('change_btn')
    const color_copy = document.getElementById('color_copy')

    change_button.addEventListener('click', function(){
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor
        root.style.transition = '1s'
        color_input.value = bgColor.substring(1).toLocaleUpperCase()
    })

    color_copy.addEventListener('click', function(){
        window.navigator.clipboard.writeText(`#${color_input.value}`)
        
        if(divToast != null){
            divToast.remove();
            divToast = null;
        }
        
        generateToastmessage(`#${color_input.value} Copied`)
        
    });

    color_input.addEventListener('keyup', function(e){
        const color = e.target.value
        if(color && isValidHex(color)){
            root.style.backgroundColor = `#${color}`
            root.style.transition = '1s'
        }
        color_input.value = color.toLocaleUpperCase()
    }); 

}

// Step 02
function generateRGBColor(){

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// Step 03 - Collect all necessary references

// Step 04 - Code with Toast Message
function generateToastmessage(msg){
    divToast = document.createElement('div')
    divToast.innerText = msg;
    divToast.className = 'toast-message toast-message-slide-in';

    divToast.addEventListener('click', function(){
        divToast.classList.remove('toast-message-slide-in');
        divToast.classList.add('toast-message-slide-out');

        divToast.addEventListener('animationend', function(){
            divToast.remove();
            divToast = null;
        })
    })

    document.body.appendChild(divToast);    
}

// Step 05 - Color By Code


/**
 * @param {string} color : ;
 */
function isValidHex(color){

    if(color.length != 6) return false;
    // if(color[0] != '#') return false;

    // color = color.substring(1)
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}

