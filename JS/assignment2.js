// if-else condition assignment


const canVote = (_para) => {
    if (_para>18){
        return true
    }
    return false
}

console.log("Can person with age 10 can vote? => ",canVote(10))
console.log("Can person with age 18 can vote? => ",canVote(18))
console.log("Can person with age 52 can vote? => ",canVote(52))