import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);


const geometry = new THREE.TetrahedronGeometry(10, 0);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff67, wireframe: true });
const TetrahedronGeometry = new THREE.Mesh(geometry, material);
scene.add(TetrahedronGeometry);

function animate() {
  requestAnimationFrame(animate);
  TetrahedronGeometry.rotation.x += 0.01;
  TetrahedronGeometry.rotation.y += 0.005;
  TetrahedronGeometry.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();