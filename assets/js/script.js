const dark = document.getElementById('dark');
const light = document.getElementById('light');
const oceanic = document.getElementById('oceanic');
const blue = document.getElementById('blue');

/**
 * Obtiene el último tema establecido y lo aplica al cargar la página
 */

let theme = localStorage.getItem('theme');
document.getElementById('container').classList.add(theme);


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
 * Si el tema es distinto a light, guarda el nuevo tema en localStorage, se remueve la clase del tema anterior si la hay y se añade la nueva clase al container
 */
function applytheme(selectedTheme){
    if(selectedTheme != 'light'){
        let currentTheme = localStorage.getItem('theme');
        document.getElementById('container').classList.remove(currentTheme);
        
        localStorage.setItem('theme', selectedTheme);
        document.getElementById('container').classList.add(selectedTheme)
    }
    else{
        let currentTheme = localStorage.getItem('theme');
        document.getElementById('container').classList.remove(currentTheme);
        localStorage.removeItem('theme');
    }
}