console.log('Requesting data...');

// setTimeout(()=>{
//     console.log('Preparing data...');
//     const data = {
//         value1: 'some data',
//         value2: 'another data',
//         value3: 'some more data'
//     }
//     setTimeout(()=>console.log('got some data', data),5000);
// },2000 );

const p = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Preparing data...');
        const data = {
            value1: 'some data',
            value2: 'another data',
            value3: 'some more data'
        }
        resolve(data);
    },2000 );
});
p.then(data1=>{ 
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            data1.modified = true;
            resolve(data1);
    },2000);
})
}).then(data2=>{
    console.log('Data recieved', data2);
    return 'test another then and return';
}).then((string)=>console.log(string)
).then(()=>console.log('and another then') )


const sleep = ms =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),ms)
    })
}

sleep(10000).then(()=>console.log('test sleep 10 seconds') );

Promise.all([sleep(2000),sleep(10000)]).then(()=>console.log('all'));
Promise.race([sleep(2000),sleep(10000)]).then(()=>console.log('race promices'));