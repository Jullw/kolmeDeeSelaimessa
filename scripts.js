import * as THREE from 'https://cdn.skypack.dev/three@0.132.0';

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });
          
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

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

    camera.position.z = 10;

    var animate = function () {
        requestAnimationFrame( animate );

        for(var ii = 0; ii < cubesArr.length; ii++){
            cubesArr[ii].rotation.y += 0.01;
            cubesArr[ii].rotation.x += 0.01;
        }
        renderer.render( scene, camera );
    };

    animate();