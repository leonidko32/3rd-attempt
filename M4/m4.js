const arr = [1,2,3,4];

function add(...args){
    let result = args.reduce((total, el, indx)=>{return total+el*(indx+1);},0);
    return result;
}

console.log(add(1,2,3));



// console.log(arr.reduce((total, el, indx)=>{return total+el*(indx+1);},0));
