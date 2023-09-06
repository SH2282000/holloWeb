import { windowContactAction } from './src/contact.js';
import { dropdown } from './src/dropdown.js';
import { btnVideosPress } from './src/video.js';



let renderer, scene, camera, controls, glasses, speed = 0.1;

init();


function init() {
    // Loading Scene
    document.addEventListener('contextmenu', event => event.preventDefault());
    loadMenu()
    btnVideosPress()
    windowContactAction()
}

function loadMenu() {
    const numOfButtons = 8
    for (const x of Array(numOfButtons).keys()) {
        dropdown(x, numOfButtons)
    }
}