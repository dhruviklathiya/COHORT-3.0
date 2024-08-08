const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const print_data = (user) => {
    console.log("Your name is:", user.name)
    console.log("Your age is:", user.age)
}

const greetUser = () => {
    rl.question("What is your name? ", (name) => {
        rl.question("How old are you? ", (age) => {
            console.log(`Hello, ${name}! You are ${age} years old.`)
            print_data({name,age})
            rl.close()
        });
    });
}

greetUser();
