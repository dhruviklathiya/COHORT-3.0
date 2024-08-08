const people = [
    { name: 'John Doe', age: 30, gender: 'male' },
    { name: 'Jane Smith', age: 25, gender: 'female' },
    { name: 'Alex Johnson', age: 20, gender: 'others' },
    { name: 'Emily Davis', age: 35, gender: 'female' },
    { name: 'Chris Brown', age: 28, gender: 'male' },
    { name: 'Taylor Lee', age: 22, gender: 'others' }
]

const greet_individual = (user) => {
    console.log("==== Greeting individual ====")
        if(user.gender == "male"){
            console.log(`Hello Mr. ${user.name}, your age is ${user.age}`)
        }
        else if (user.gender == "female"){
            console.log(`Hello Mrs.${user.name}, your age is ${user.age}`)
        }
        else{
            console.log(`Hello ${user.name}, your age is ${user.age}`)
        }
}

greet_individual(people[0])


const greet_everyone = (data) => {
    console.log("==== Greeting everyone ====")
    data.map((_val)=>{
        if(_val.gender == "male"){
            console.log(`Hello Mr. ${_val.name}, your age is ${_val.age}`)
        }
        else if (_val.gender == "female"){
            console.log(`Hello Mrs.${_val.name}, your age is ${_val.age}`)
        }
        else{
            console.log(`Hello ${_val.name}, your age is ${_val.age}`)
        }
    })
}

greet_everyone(people)

