
const 
clock = document.querySelector('#clock'),
NewYaer = document.querySelector('#NewYaer'),
ChinaNewYaer = document.querySelector('#ChinaNewYaer'),
NewYaerTime = new Date('2022-12-31T23:59:59').getTime(),
ChinaNewYaerTime = new Date('2023-01-22T23:59:59').getTime();
console.log(ChinaNewYaerTime);

function timeTransform(value){
    let 
    Days = Math.floor(value/86400000),
    Hours = Math.floor(value%86400000/3600000).toString().padStart(2,'0'),
    Minutes = Math.floor(value%86400000%3600000/60000).toString().padStart(2,'0'),
    Seconds = Math.floor(value%86400000%3600000%60000/1000).toString().padStart(2,'0');
    return Days+" днів "+Hours+' годин '+Minutes+' хвилин '+Seconds+ ' секунд';
}

function timerUpdate(){
    let currentTime = new Date(),
    CH = currentTime.getHours().toString().padStart(2,'0'),
    CM = currentTime.getMinutes().toString().padStart(2,'0'),
    CS = currentTime.getSeconds().toString().padStart(2,'0'),
    NY = timeTransform(NewYaerTime-currentTime.getTime()),
    CNY = timeTransform(ChinaNewYaerTime-currentTime.getTime());

    return clock.innerText = CH+':'+CM+':'+CS, NewYaer.innerText = NY, ChinaNewYaer.innerText = CNY;

}

setInterval(function(){timerUpdate()},1000);
