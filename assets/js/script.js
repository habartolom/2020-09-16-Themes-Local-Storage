const dark = document.getElementById('dark');
const light = document.getElementById('light');
const oceanic = document.getElementById('oceanic');
const blue = document.getElementById('blue');
const container = document.getElementById('container');

/**
 * Obtiene el último tema establecido y lo aplica al cargar la página
 */

let currentTheme = localStorage.getItem('theme');
if(currentTheme != null){
    applytheme(currentTheme);
}

/* Eventos click para cada uno de los temas */

light.addEventListener('click', ()=>{
    applytheme('light');
});


dark.addEventListener('click', ()=>{
    applytheme('dark');
});

oceanic.addEventListener('click', ()=>{
    applytheme('oceanic');
});

blue.addEventListener('click', ()=>{
    applytheme('blue');
});

/**
 * Si el tema es light quita el tema guardado en localStorage y su clase respectiva en el container, 
 * Si el tema es distinto a light, guarda el nuevo tema en localStorage, y se establece la nueva clase al container
 */
function applytheme(selectedTheme){
    if(selectedTheme != 'light'){
        localStorage.setItem('theme', selectedTheme);
        container.className = 'container ' + selectedTheme;
    }
    else{
        localStorage.removeItem('theme');
        container.className = 'container';
    }
}