const animal = {
    canEat: true,
    canSleep: true,
    canRun: true,
    canSwim: true,
    speed:10,
    fill: 100,
    eat(addEat){
        this.fill = this.fill + addEat;
    },
    run(){
        if(this.fill<20){
            console.error('tired');
        }else{            
            let speed = this.speed;

            if(this.fill>100){
                console.error("Overeaten");
                speed *= 0.5;
            }

            this.fill -=20;

            console.info(this.name, 'run', speed);
        }

    }
}

const rabbit = {
    name: 'rabbit',
    speed:20
}
rabbit.__proto__ = animal;

rabbit. run();
console.log(animal.fill);

console.log(rabbit.fill);