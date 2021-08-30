const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};



console.log(person.firstName)
let firstName = person.firstName;
let lastName = person.lastName;




const { email, firstName:fname, lastName:lname,password:pw, username } = person;

console.log(email)
// console.log(firstName)
console.log(username)
console.log(fname)

//destructuring from an array

//old way
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

caughtFish = animals[2]
bird = animals[4]


//new way
const [   ,    ,  fish ,   , birdy  ] = animals




console.log(caughtFish)
console.log(bird)
console.log(fish)
console.log(birdy)




// const person2 = person

// console.log(person)
// console.log(person2)







const person3 = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person3;  
//Predict the output
console.log(password);
console.log(hashedPassword);



//12345
//undefined
