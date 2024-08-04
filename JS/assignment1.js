// Assignment 1: Sum function
const calculate_sum = (_para1,_para2) => {
    return _para1 + _para2
}

console.log(calculate_sum(10,20))

// Same task with string as parameter
const calculate_sum_string = (_para1,_para2) => {
    return _para1 + _para2
}

console.log(calculate_sum_string("10","20"))
// Polymorphism is the answer for weird nature of + operation on string
    // + operator works as concatenator for strings and Arithmetic operator for numbers

// Same task with string as parameter but number as output
const calculate_sum_from_string = (_para1,_para2) => {
    return Number(_para1) + Number(_para2)
}

console.log(calculate_sum_from_string("10","20"))
