// const promise = new Promise(makePromise);

// function makePromise(resolve, reject){
//     setTimeout(function(){
//         resolve([1,2,4]);
//     }, Math.random()*2000);    //приблизно 2 секунди
//     setTimeout(function(){
//         reject(5);
//     }, 1500);                   //через 1,5 секунди  спрацьовує або те абе те
// }

// promise.then(onResolve, onReject);              //функції, що виконуються при виконанні чи невиконанні 
                                                
// function onResolve(value){                           //функція, при виконні
//     console.log("resolve", value);
// }
// function onReject(value){                            //функція при невиконанні
//     console.log('reject', value);
// }

// console.log(promise);
// const circle = document.querySelector('.circle');
// let flag = 0;

// setInterval(function(){
//     if(flag ===0){
//         circle.style = 'transform: translateX(97vw)';
//         flag = 1;
//     }
//     else{
//         circle.style = 'transform: translateX(0px)';
//         flag = 0;
//     }
// },2000);
// console.dir(circle);