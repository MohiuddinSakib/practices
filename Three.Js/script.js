

//start-up file for the project

//1.scene=scene is the main part of three js where we add all the objects.
//2.camera= camera is the eye of the user which is used to see the objects
//3.mesh->[geometry and material]= mesh is the combination of geometry and material
//4.renderer= renderer is used to render the scene and camera
//5.animate= animate function is used to animate the objects in the scene



//Create a new scene
const newScene = new THREE.Scene();

// Create a new camera
const newCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
newCamera.position.z = 5;
newScene.add(newCamera);    

// Create a new geometry
const newGeometry = new THREE.SphereGeometry(1, 32, 32);

// Create a new material
const newMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create a new mesh
const newMesh = new THREE.Mesh(newGeometry, newMaterial);

// Add the mesh to the scene
newScene.add(newMesh);

// Create a new renderer and create a canvas by taking it from dom otherwise you won't be able to see the object
const canvas = document.querySelector('#draw');
const newRenderer = new THREE.WebGLRenderer({ canvas});

// this is used to resize the window and adjust the camera aspect ratio ,we can also say it works as responsiveness
window.addEventListener('resize',()=>{
newRenderer.setSize( window.innerWidth, window.innerHeight );
newCamera.aspect=window.innerWidth/window.innerHeight;
newCamera.updateProjectionMatrix();
})


// Create an animate function
function newAnimate() {
    requestAnimationFrame(newAnimate);
    newMesh.rotation.x += 0.01;
    newMesh.rotation.y += 0.01;
    newRenderer.render(newScene, newCamera);
}

// Call the animate function
newAnimate();


//write me three js code here

//1. create a scene
//2. create a camera
//3. create a geometry
//4. create a material
//5. create a mesh
//6. add mesh to the scene
//7. create a renderer
//8. add the renderer to the scene
//9. create an animate function
//10. call the animate function
//11. add the cube to the scene
//12. set the camera position
//13. render the scene and camera
//14. set the size of the renderer
//15. set the position of the cube

// example 2 to play with
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;//not that necessary
scene.add(camera)


// Add a directional lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Add an ambient light
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

// Add a point light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);


//point light helper is not working
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );
// // Add a PointLightHelper to visualize the point light
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
// scene.add(pointLightHelper);

let loader=new THREE.TextureLoader();
let texture=loader.load('download.jpg');




const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( {map:texture} );
const mesh = new THREE.Mesh( geometry, material );
// mesh.rotation.y = Math.PI
// mesh.position.x = 2;
scene.add( mesh );



const canvas2 = document.querySelector('#draw2');
const renderer = new THREE.WebGLRenderer({canvas:canvas2});

//not working
// const gui = new lil.GUI();
// gui.add( document, 'title' );

window.addEventListener('resize',()=>{
renderer.setSize( window.innerWidth, window.innerHeight );
camera.aspect=window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();
})
// Add OrbitControls to allow camera orbiting,with the help of this we can touch it and turn it around.



let clock=new THREE.Clock();

function animate() {
    window.requestAnimationFrame( animate );//this function runs the animate function 60 times per second that means all the time.Because of this we are able to see animation of 3d objects
   
    renderer.render( scene, camera );
    mesh.rotation.x += 0.02;
    // mesh.rotation.y += 0.02;
    // mesh.rotation.y = Math.PI/2
    mesh.rotation.y = clock.getElapsedTime();
    // mesh.scale.x = 2
   
}
animate()




