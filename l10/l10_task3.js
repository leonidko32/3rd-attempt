const users = [],
 registrationForm = document.querySelector(".registration") ,
 loginForm = document.querySelector(".login");


registrationForm.addEventListener('submit', function(event){
     event.preventDefault();
     const {login, password} = registrationForm.elements,
        newUser = createUser(login.value, password.value);
        
        users.push(newUser);
        alert('USER REGISTERED');
        login.value = '';
        password.value = '';
    }
);

loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    const {login, password} = loginForm.elements;

    getAccess(login.value, password.value);
    login.value = '';
    password.value = '';
})


//console.log(users);

 

function createUser (login, password){
    const user = { 
        login,
        password,
        checkAccess
    };
    return user;
}

function getAccess (login, password){
    const user = users.find(user=>user.checkAccess(login, password));
    
    if(user){
        console.info('Welcome',user);
    } else{
        console.error("Access Denied");
    }

}

function checkAccess(login, password){
    return this.login === login && this.password === password;
}