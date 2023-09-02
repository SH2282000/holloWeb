import * as THREE from 'three';

export function addStars(quantity, position, scene) {
    function addStar() {
        const geometry = new THREE.SphereGeometry(0.1, 4, 4);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(50));
        const z = THREE.MathUtils.randInt(position, position-300)
        star.position.set(x, y, z);
        scene.add(star);
    }

    Array(quantity).fill().forEach(addStar);
}