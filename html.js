let logIn = false;
let name;
let surname ;
let password;
while(!logIn){
 name= prompt('enter your name'),
 surname = prompt ('enter your surname'),
 password = prompt('enter your password'); 
 if(name === 'myName'&&  surname ==='mySurname' && password ==='myPassword'){logIn = true;
    console.log('you have login'); 
 }
 else{
    console.log('invalid credentials! please try again');
 }
 
 }