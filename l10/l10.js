const user = {
    name: "Vasya",
    lastName: "Bird",
    getName
},
user2 ={
    name: "Petya",
    lastName: "Gril",
    getName
}

function getName(){
    return `${this.name} ${this.lastName}` 
}


const userName = getName.bind(user);
// console.log(userName());
//-----------------------------------------------------
const admins = [{
    firstName: 'Adm1',
    lastName: 'In',
    password: '12345678'
},
{
    firstName: 'Adm2',
    lastName: 'In',
    password: '12345679'
},
{
    firstName: 'Adm3',
    lastName: 'In',
    password: '12345670'
}].map(user=>{
    user.checkAccess = checkAccess;
return user});

console.log(admins);


function checkAccess(password){
    return this.password===password; 
}




function getAccess(){
    const password = prompt('Get password:'),
        admin = admins.find(user => user.checkAccess(password));

    if(admin){
        console.info("Welkome! ", admin);
    }
    else{
        console.error("Access Denied");        
    }
}

getAccess();