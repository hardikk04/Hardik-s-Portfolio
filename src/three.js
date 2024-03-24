import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// Scene
const scene = new THREE.Scene();

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const fontTextureText = textureLoader.load("/textures/matcaps/2.png");
const fontTextureTorus = textureLoader.load("/textures/matcaps/4.png");
fontTextureText.colorSpace = THREE.SRGBColorSpace;
fontTextureTorus.colorSpace = THREE.SRGBColorSpace;

// Materials
const materialText = new THREE.MeshMatcapMaterial({
  matcap: fontTextureText,
});
const materialTorus = new THREE.MeshMatcapMaterial({
  matcap: fontTextureTorus,
});

// Font Loader
const fontLoader = new FontLoader();
fontLoader.load("Fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Three js in progress...", {
    font: font,
    size: 0.5,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });
  const text = new THREE.Mesh(textGeometry, materialText);
  textGeometry.center();
  scene.add(text);
});

// Geometry
const geometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);

// Creating 300 torus
for (let i = 0; i < 500; i++) {
  const mesh = new THREE.Mesh(geometry, materialTorus);
  mesh.position.x = (Math.random() - 0.5) * 12;
  mesh.position.y = (Math.random() - 0.5) * 12;
  mesh.position.z = (Math.random() - 0.5) * 15;

  mesh.rotation.x = Math.random() * Math.PI;
  mesh.rotation.y = Math.random() * Math.PI;

  const scaleVal = Math.random();
  mesh.scale.set(scaleVal, scaleVal, scaleVal);

  scene.add(mesh);
}

// Resize the scene
const threejsPage = document.querySelector(".threejs");
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
scene.add(camera);
camera.position.x = 6;

// Canvas
const canvas = document.querySelector(".webgl");

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Orbit Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

controls.minDistance = 0;
controls.maxDistance = 10;

scene.background = new THREE.Color(0x1f1e21);

const tick = () => {
  controls.update();
  requestAnimationFrame(tick);
  renderer.render(scene, camera);
};
tick();
