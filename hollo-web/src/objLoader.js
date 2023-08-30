import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export function loadObj(path, scale, position, rotation) {
    return new Promise((resolve, reject) => {
        // instantiate a loader
        const loader = new OBJLoader();

        // load a resource
        loader.load(
            // resource URL
            `/obj/${path}.obj`,
            // called when resource is loaded
            function (object) {
                object.scale.set(scale, scale, scale)
                object.position.copy(position)
                object.rotation.set(rotation.x, rotation.y, rotation.z)
                resolve(object)
            },
            // called when loading is in progresses
            function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            // called when loading has errors
            function ( error ) {
                console.log( 'An error happened for ' + `/obj/${path}.obj` );
                console.log( `Error: ${error}` );
                reject(error)
            }
        );
    })
}