const people = [
    { name: 'John Doe', age: 30, gender: 'male' },
    { name: 'Jane Smith', age: 25, gender: 'female' },
    { name: 'Alex Johnson', age: 20, gender: 'others' },
    { name: 'Emily Davis', age: 35, gender: 'female' },
    { name: 'Chris Brown', age: 8, gender: 'male' },
    { name: 'Taylor Lee', age: 22, gender: 'others' }
]

const user_over_18 = (_para) => {
    return _para.filter((one)=>one.age>18)
}

console.log("Users above age of 18 are ==>",user_over_18(people))

const user_over_18_name = (_para) => {
    return _para.filter((one)=>one.age>18).map((one)=> one.name)
}

console.log(user_over_18_name(people));