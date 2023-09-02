import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { dropdown } from './src/dropdown.js';
import { loadObj } from './src/objLoader.js';
import { createSphere } from './src/sphere.js';
import { addStars } from './src/stars.js';
import { handBtnPress } from './src/multiView.js';



let cube, renderer, scene, camera, controls, glasses;

init();
loadObjects();
loadMenu()
handBtnPress()
animate();

function init() {
    // Loading Scene
    document.addEventListener('contextmenu', event => event.preventDefault());
    window.addEventListener('resize', onWindowResize)

    scene = new THREE.Scene();
    scene.add(new THREE.AxesHelper(5))
    scene.background = new THREE.Color( 0x00000 );
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    const canvasContainer = document.getElementById('view0');
    canvasContainer.appendChild( renderer.domElement );


    // Add lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(10, 10, 10);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Add elements
    addStars(1000, camera.position.z, scene)

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    cube = new THREE.Mesh(geometry, material);
    const offset = new THREE.Vector3(0, 0, 0)
    scene.add(createSphere(cube, offset));

    camera.position.z = 15;
    controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
}

function loadObjects() {
    const position = new THREE.Vector3(0, 0, 0)
    const rotation = new THREE.Euler(-Math.PI/2, 0, 0)
    loadObj("glasses", 0.12, position, rotation)
        .then((object) => {
            glasses = object
            const offset = new THREE.Vector3(-5, 0, 0)
            scene.add(createSphere(glasses, offset))
        })
        .catch((error) => {
            console.error(`Error while loading obj: ${error}`);
        })
}

function animate() {
	requestAnimationFrame( animate );

	glasses.rotation.x += 0.01;
	glasses.rotation.y += 0.01;

    scene.background += new THREE.Color( 0x00000 +1);

    camera.position.z -= 0.1;
    addStars(1, camera.position.z, scene)

	renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function loadMenu() {
    const numOfButtons = 8
    for (const x of Array(numOfButtons).keys()) {
        dropdown(x, numOfButtons)
    }
}