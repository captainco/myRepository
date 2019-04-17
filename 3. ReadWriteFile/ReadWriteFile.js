var fs = require('fs');

function writeFile(path, contents) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, contents, (err, contents) => {
            if(err) {
                reject(err);
            } else {
                resolve('Write success');
            }
        });
    });
}

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'UTF8', (err, contents) => {
            if(err) {
                reject(new Error('Do not open or exist file'));
            } else {
                resolve(contents);
            }
        });
    });
}

Promise.all([writeFile('file.txt', 'World'), readFile('file.txt')])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})