import * as THREE from 'https://cdn.skypack.dev/three@0.132.0';



        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
          });
          
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(window.innerWidth, window.innerHeight);
       /*  var renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement ); */

        var color = [0x9400D3, 0x4B0082, 0x0000FF, 0x00FF00, 0xFFFF00, 0xFF7F00, 0xFF0000]
        var cubesArr = []
        var x = -10
        var y = 4
        for(var i = 0; i < 5; i++){
            for(var ii = 0; ii < 7; ii++){
                var geometry = new THREE.BoxGeometry( 1, 1, 1 );
                var material = new THREE.MeshBasicMaterial( { color: color[ii] } );
                var object = new THREE.Mesh( geometry, material );
                scene.add(object);
                object.translateY( y);
                object.translateX( x );
                cubesArr.push(object)
                x = x + 3
            }
            y = y - 2
            x = -10
        }

/*
var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xFF0080 } );
var material3 = new THREE.MeshBasicMaterial( { color: 0x80FF00 } );
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry1, material3)
cube2.translateX( -5 );
scene.add( cube, cube2 );
cube2.translateY( 5 );  */

camera.position.z = 10;

var animate = function () {
    requestAnimationFrame( animate );
/*
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01; */
    for(var ii = 0; ii < cubesArr.length; ii++){
        cubesArr[ii].rotation.y += 0.01;
        cubesArr[ii].rotation.x += 0.01;
    }
    renderer.render( scene, camera );
};

animate();