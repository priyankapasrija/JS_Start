// const myName = 'Max';

// if (true) {
//     console.log('hello');
// }

// let isLoggedIn = true;

// if (isLoggedIn === true) {
//     console.log('User is logged in!');
// }

// const enreredUserName = '';

// if (enreredUserName) {
//     console.log('input is valid!');
// }

// const userAge = 52;
// if (userAge > 60 && userAge < 100) {
//     console.log('User is in our target customer group!');
// } else if (userAge < 30) {
//     console.log('User is a potential future customer.');
// } else {
//     console.log('User is also an interesting customer!');
// }

for ( i=0; i<10; i++) {
    console.log(i);
}

const userNames = ['max','manu','manual'];

for (let particulerUser of userNames) {
    console.log(particulerUser);
}

const userOutput = {
    name:'Max',
    age: 32,
    location: 'Germany'
};

for (let userDetail in userOutput) {
    console.log(userDetail) // its output is - name, age, location property
    console.log(userOutput[userDetail]); // its output is - max, 32, germany
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?')
}

console.log('Done');