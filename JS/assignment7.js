const people = [
    { name: 'John Doe', age: 30, gender: 'male' },
    { name: 'Jane Smith', age: 25, gender: 'female' },
    { name: 'Alex Johnson', age: 20, gender: 'others' },
    { name: 'Emily Davis', age: 35, gender: 'female' },
    { name: 'Chris Brown', age: 8, gender: 'male' },
    { name: 'Taylor Lee', age: 22, gender: 'others' }
]

const greet_individual = (user) => {
    console.log("==== Greeting individual ====")
        if(user.gender == "male"){
            if(user.age > 18){
                console.log(`Hello Mr. ${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello Mr. ${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
        else if (user.gender == "female"){
            if(user.age > 18){
                console.log(`Hello Mrs.${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello Mrs.${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
        else{
            if(user.age > 18){
                console.log(`Hello ${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello ${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
}

greet_individual(people[0])


const greet_everyone = (data) => {
    console.log("==== Greeting everyone ====")
    data.map((user)=>{
        if(user.gender == "male"){
            if(user.age > 18){
                console.log(`Hello Mr. ${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello Mr. ${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
        else if (user.gender == "female"){
            if(user.age > 18){
                console.log(`Hello Mrs.${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello Mrs.${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
        else{
            if(user.age > 18){
                console.log(`Hello ${user.name}, your age is ${user.age} & you can vote`)
            }
            else{
                console.log(`Hello ${user.name}, your age is ${user.age} & you cannot vote`)
            }
        }
    })
}

greet_everyone(people)

