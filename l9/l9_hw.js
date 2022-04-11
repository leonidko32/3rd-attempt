// task1 среднюю разницу в возрасте между матерями и их детьми
const newArray = [];

function mDate(){
    let sum = 0;
    let count = 0;
    for(let i = 0; i<ANCESTRY_DATA.length;i++){
        if(bDate(ANCESTRY_DATA[i].mother)!== null){
            newArray.push(ANCESTRY_DATA[i].born  - bDate(ANCESTRY_DATA[i].mother));
            sum = sum+(ANCESTRY_DATA[i].born  - bDate(ANCESTRY_DATA[i].mother));
            count++;

        }
       
    }
    return Math.round(sum/count);       
}


function bDate(name){
    let data = null;
    if(name!==null){
        for(key in ANCESTRY_DATA){
            if(ANCESTRY_DATA[key].name===name){
                data = ANCESTRY_DATA[key].born;
            }        
        }
    }
    return data;
}
//console.log(mDate());
// task 2 среднюю разницу между в возрасте между родителями
const parentsDiffArr = [];

function parentsDiff(){
    let sum = 0;
    let count = 0;
    for(let i = 0; i<ANCESTRY_DATA.length;i++){
        if(bDate(ANCESTRY_DATA[i].mother)!== null && bDate(ANCESTRY_DATA[i].father)!== null ){
            parentsDiffArr.push(Math.abs(bDate(ANCESTRY_DATA[i].mother)-bDate(ANCESTRY_DATA[i].father)));
            sum=sum+(Math.abs(bDate(ANCESTRY_DATA[i].mother)-bDate(ANCESTRY_DATA[i].father)));
            count++;
        }
    }
    return sum/count;
}

// console.log(parentsDiff());
// console.log(parentsDiffArr.reduce((total,person)=>total+person,0)/parentsDiffArr.length);

//task 3 среднее количество детей в семье
const childQuantityArr = [];

function childQuantity(){
    for(let i = 0; i<ANCESTRY_DATA.length;i++){
        
        if(ANCESTRY_DATA[i].father!== null){
            let value = 0;
            
            for(let z = 0; z<ANCESTRY_DATA.length;z++){
                
                if(ANCESTRY_DATA[z].father===ANCESTRY_DATA[i].father){
                    value++;
                }
            }
            childQuantityArr.push({name: ANCESTRY_DATA[i].father, children:value});
        }
        
    }
    return (childQuantityArr.reduce((total,person)=>total+person.children,0))/childQuantityArr.length;
}
;
//console.log(childQuantity());

//task 4 средний возраст людей для каждого из столетий. Назначаем столетию людей, 
// беря их год смерти, деля его на 100 и округляя: `Math.ceil(person.died / 100)`.
const centuryArray = [];

function centuryArrayFill(){
    for(let i = 0; i<ANCESTRY_DATA.length;i++){
        if(ANCESTRY_DATA[i].born!== null && ANCESTRY_DATA[i].died!== null){
            centuryArray.push({
                age: ANCESTRY_DATA[i].died - ANCESTRY_DATA[i].born,
            century: Math.ceil(ANCESTRY_DATA[i].died / 100) });
        }
    }
}
centuryArrayFill();



const uniqueCent = [];
function uniqueCentFill (){
    for(let i = 0; i<centuryArray.length;i++){
        if(!uniqueCent.includes(centuryArray[i].century)){
            uniqueCent.push(centuryArray[i].century);
        }
    }

}

uniqueCentFill ();



const Cent16 = centuryArray.filter(person=>person.century===16);

//console.log(Cent16.reduce((total,person)=>total+person.age,0)/Cent16.length);

//uniqueCent[0]= [5,4,3];
uniqueCent.sort();
//console.log(uniqueCent);

const finalArray =[];
function finalArrayFill(){
    for(let i = 0; i<uniqueCent.length;i++){
        finalArray.push({century: uniqueCent[i]});
        finalArray[i].arr = (centuryArray.filter(person=>person.century===finalArray[i].century));
        finalArray[i].middle = Math.round(finalArray[i].arr.reduce((total,person)=>total+person.age,0)/finalArray[i].arr.length);
        console.log("століття: "+finalArray[i].century+" середній вік: " +finalArray[i].middle);
    }      
}
//finalArrayFill();
//console.log(finalArray);
//-----------------------------------------------------------------------------

function arg (a,b,c){
    let sum = 0;
    if(arguments.length!==0){
        for(let i =0; i<arguments.length;i++){
            sum = sum+(arguments[i]*(i+1));
        }
    }
    return sum;
}

console.log(arg ());


