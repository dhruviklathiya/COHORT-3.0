const data = [1,2,1,2,2,32,5,654,54,,1,21,55,4,,2,,213,21,54,5,498,75,132,15464,132,1,354,61,321]


const filter_data = (_para) => {
    return data.filter((one)=>one%2==0)
}

console.log("Array with all even number is: ==>",filter_data(data))