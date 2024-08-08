const people = [
    { name: 'John Doe', age: 30, gender: 'male' },
    { name: 'Jane Smith', age: 25, gender: 'female' },
    { name: 'Alex Johnson', age: 20, gender: 'others' },
    { name: 'Emily Davis', age: 35, gender: 'female' },
    { name: 'Chris Brown', age: 28, gender: 'male' },
    { name: 'Taylor Lee', age: 17, gender: 'male' }
];

const male_over_18 = (data) => {
    return data.filter(user => user.age > 18 && user.gender === 'male');
};

console.log("Male users above the age of 18 are ==>", male_over_18(people));
