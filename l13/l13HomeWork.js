const redCircle = document.querySelector('.circle:nth-child(1)');
const blueCircle = document.querySelector('.circle:nth-child(2)');
const sleep = ms =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(),ms)
    })
}



const run = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        blueCircle.style = 'transform: translateX(92vw)';
        resolve();

    },1000)
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            redCircle.style = 'transform: translateX(92vw)';
            resolve();    
        },1000)
    }
)
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            redCircle.style = 'transform: translateY(0vw)';
            resolve();    
        },3000)
    }
)
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            blueCircle.style = 'transform: translateX(0vw)';
            resolve();    
        },1000)
    }
)
})
.then(()=>console.log(blueCircle.classList));


