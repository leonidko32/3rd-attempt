
//console.dir($ticket);
 
 
 
 function createElement(tagName, props={}){   
    const $el = document.createElement(tagName);
    if(props){          
        for(key in props){
            if(key==="children"){
                $el.append(...props.children);
            }
            else {$el[key] = props[key];}
        } 
    }   

    return $el;
}

//число по розрядам
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
//--------------------------


const ticket = tickets[10];

function createTicket(){
const ticket = tickets[10];
    const price = numberWithSpaces(ticket.price);
        const $ticket__price = createElement('div',
        {className: 'ticket__price',
        innerText: price + " P"}
    );
    const ticket__avia_logo = createElement(
        'div',
        {
            className: 'ticket__avia-logo',
            children: [createElement(
                'img',
                {
                    className: 'tiscket__avia-logo-img',
                    src: 'logo1.png',
                    alt: 'none'
                }
            )] 
        }
    );
    const ticket__variants = createElement(
        'div',
        {
            className: 'ticket__variants'
        }
    );
    const $ticket = createElement('div',
        {
            className: "ticket",
            children:[$ticket__price, ticket__avia_logo, ticket__variants]
        }
    );
        return $ticket;
    }

const $ticket = createTicket();



function createTicketVariant(segment){
    const $destination = createElement(
        'div',
        {
            className: 'ticket__variant-item',
            children:[
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-label",
                        innerText: 'MOW – HKT'
                    }                    
                ),
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-value",
                        innerText: '10:45 – 08:00'
                    }                    
                )
            ]
        }
    ),
    $roadTime = createElement(
        'div',
        {
            className: 'ticket__variant-item',
            children:[
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-label",
                        innerText: 'В пути'
                    }                    
                ),
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-value",
                        innerText: '21ч 15м'
                    }                    
                )
            ]
        }
    ),
    $transplants = createElement(
        'div',
        {
            className: 'ticket__variant-item',
            children:[
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-label",
                        innerText: '2 пересадки'
                    }                    
                ),
                createElement(
                    'div',
                    {
                        className: "ticket__variant-item-value",
                        innerText: 'HKG, JNB'
                    }                    
                )
            ]
        }
    ),
    $variant = createElement(
        'li',
        {
            className: "ticket__variant",
            children:[$destination, $transplants, $variant]
        }
    )
    return $variant;
}

const seg =[{
    origin: "a",
    destination: "b"
},
{
    origin: "c",
    destination: "d"
}
]


function addZero(value){
    let value1;
    if(value<10){
        value1 = '0'+value.toString();}
        else {value1=value}
    
    return value1;
}

const{origin, destination} = seg[1];
//console.log(origin);

function finalCountdown(){
let  currentTime = new Date();
let  endTime = new Date('2022-12-31T23:59:59');
let timer = endTime.getTime()-currentTime.getTime();
let days = Math.floor(timer/86400000);
let hours = addZero(Math.floor((timer % 86400000)/3600000));
let minutes = addZero(Math.floor(timer % 86400000%3600000/60000));
let seconds =addZero(Math.floor(timer % 86400000%3600000%60000/1000));
let timerP =days+" days "+hours+':'+minutes+':'+seconds;
return timerP;
}
//setInterval(finalCountdown,1000);
//console.log(addZero(10));
//console.log(timerP);

const t = createElement("span",{
    innerText: finalCountdown()
})

let a = document.querySelector('.timer');
setInterval(function(){ a.innerText = finalCountdown()},1000);


