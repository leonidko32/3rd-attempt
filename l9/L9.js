/*
function pow (x, n){
    let result = x;
    for(let i = 2;i<=n;i++){
        result=result*x;
    }
    return result;
}

*/



function pow (x, n){
   
    if(n===1){
        return x;
    }
    return x*pow(x, n-1);
}

// console.log(pow(2, 4));

function factorial(n){
    let result = 1;
    for(let i = 1; i<=n;i++){
        result = result*i;
    }
    return result;
}

// function factorial(n){
//     if(n<=2){
//         return n;
//     }
//     return factorial(n-1)*n;
// }

// console.log(factorial(5));

function fib (n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}

let ma = fib(8);
// console.log({ma});

const obj = [
    {name: 'Peter',
    salary: 2000},
    {name: 'Jack',
    salary: 2500},
    {name: 'Lohn',
    salary: 2300}
]

const obj2 = obj.map(key=>key.salary);

const obj3 = obj.reduce((sum, key)=>sum+key.salary,0);
// console.log(obj3);
//-----------------------------------------------------------------
function SayHi (){
    console.log("Hi");
}
function SayBye(){
    console.log("Bye")
}

function addCounter(f){
    function decoratedF(){    
        decoratedF.count++;
        return f();    
    }
    decoratedF.count = 0;
    return decoratedF;
}

// const CountSayHi = addCounter(SayHi);
// CountSayHi();
// CountSayHi();
// CountSayHi();
// console.log(CountSayHi.count);

const arr = [1,2,3,4,5,7,8,7,4,34,23,34,46,68];

console.log(
    arr.filter( inBetween(4, 46) )
    );

    function inBetween(min, max){
        return function(key){
            return key>4 && key<46;
        }
    }

