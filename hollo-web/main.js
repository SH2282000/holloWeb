import * as THREE from 'three';

let cube, renderer, scene, camera, controls;

init();
animate();

function init() {
    dropdown()
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const buttons = document.querySelectorAll('#button0, #button1, #button2, #button3');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            onButtonClick(index)
        }, false)
    });

    camera.position.z = 5;
}

function animate() {
	requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onButtonClick(index){
    console.log(`Button ${index + 1} clicked!`);
    cube.material.color.set( Math.random() * 0xffffff );
}

function dropdown() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownCaret = document.querySelector(".arrow");
    const dropdownContent = document.querySelector(".dropdown-content");

    // add click event to dropdown button
    dropdownBtn.addEventListener("click", () => {
      // add rotate to caret element
      dropdownCaret.classList.toggle("arrow-rotate");
      // add open styles to menu element
      dropdownContent.classList.toggle("menu-open");
      dropdownBtn.setAttribute(
        "aria-expanded",
        dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
      );
    });
}