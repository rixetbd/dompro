/*
    * Project Requirments:
    * - Change the banckground color by generating random RGB Color by clicking a butting

*/

// Step 01
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root')
    const change_button = document.getElementById('change_btn')

    change_button.addEventListener('click', function(){
        const bgColor = generateRGBColor()
        root.style.backgroundColor = bgColor
        root.style.transition = '1s'
    })
}

// Step 02
function generateRGBColor(){

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}

// Step 03 - Collect all necessary references

