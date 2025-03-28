import * as THREE from "three";

export function Demo() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    renderer.setAnimationLoop(() => animate(scene, camera, cube, renderer));

    const container = document.getElementById("three-app");
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}

/**
 * @param {THREE.Scene} scene
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>} cube
 * @param {THREE.WebGLRenderer} renderer
 */
function animate(scene, camera, cube, renderer) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
