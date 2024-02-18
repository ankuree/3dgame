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


const geometry = new THREE.TorusGeometry(10,0);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff});
const TetrahedronGeometry = new THREE.Mesh(geometry, material);

scene.add(TetrahedronGeometry);


const pointLight = new THREE.PointLight(0xff0000,12,1000000000,0.5);
pointLight.position.set(5, 19, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff,0.3);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

function animate() {
  requestAnimationFrame(animate);
  TetrahedronGeometry.rotation.x += 0.1;
  TetrahedronGeometry.rotation.y += 0.09;
  TetrahedronGeometry.rotation.z += 0.04;

  renderer.render(scene, camera);
}
//svdssdv
animate();