const prms = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve('Sukces');
        } else {
            reject('Błąd');
        }
    }, 2000)
})

console.log('przed');

prms.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

console.log('po');

// 
const prms2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve('Sukces');
        } else {
            reject('Błąd');
        }
    }, 2000)
})

console.log('przed');

try {
    const res = await prms2;
} catch(e) {
    console.log(e);
}


console.log('po');

// 
const prms_3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve('Sukces');
        } else {
            reject('Błąd');
        }
    }, 2000)
})

const handlePromise = async() => {
    try {
        const res = await prms;
    } catch(e) {
        console.log(e);
    }
}

console.log('przed');

handlePromise();

console.log('po');