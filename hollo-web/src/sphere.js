import * as THREE from 'three';

export function createSphere(object, offset) {
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x800080, transparent: true, opacity: 0.5 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.copy(object.position)
    sphere.position.add(offset)
    sphere.add(object);
    return sphere
}