import * as THREE from 'three';
import { dropdown } from './src/dropdown.js';
import { loadObj } from './src/objLoader.js';

let cube, renderer, scene, camera, controls, glasses;

init();
loadObjects();
animate();

function init() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    dropdown()

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({
        antialias: true, // Enable antialiasing
        pixelRatio: window.pixelRatio, // Set pixel ratio to match device's pixel density
    });
    // renderer.setPixelRatio(window.pixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const buttons = document.querySelectorAll('#button0, #button1, #button2, #button3');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            onButtonClick(index)
        }, false)
    });

    camera.position.z = 10;
}

function loadObjects() {
    const position = new THREE.Vector3(-4, 0, -4)
    const rotation = new THREE.Euler(-Math.PI/2, 0, 0)
    loadObj("glasses", 0.1, position, rotation)
        .then((object) => {
            glasses = object
            scene.add(glasses)
        })
        .catch((error) => {
            console.error(`Error while loading obj: ${error}`);
        })
}

function animate() {
	requestAnimationFrame(animate);

    glasses.rotation.z += 0.02;

    renderer.render(scene, camera);
}

function onButtonClick(index){
    console.log(`Button ${index + 1} clicked!`);
    cube.material.color.set( Math.random() * 0xffffff );
}