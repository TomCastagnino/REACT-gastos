const promise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('This is my resolved date');
    }, 1500);
} );

console.log('before');

promise.then( data => {
    console.log(data);
});

console.log('after');