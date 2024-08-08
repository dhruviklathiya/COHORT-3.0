const readline = require("readline")

const _interface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)

// Infinity execution
const _function = () => {
    _interface.question(
        "Enter number till which you want sum:",
        (answer)=>{
            const _number = parseInt(answer)
            if(_number==0){
                _interface.close()
            }
            else{
                let i = 0
                let sum = 0
                while(i<=_number){
                    sum+=i
                    i++
                }
                console.log(`Answer is ${sum}`)
                console.log("Press 0 for exit")
                _function()
            }
        }
    )
}

_function()


// Code only for one time execution
// _interface.question(
//     "Enter number till which you want sum:",
//     (answer)=>{
//         const _number = parseInt(answer,10)
//         let i = 0
//         let sum = 0
//         while(i<=_number){
//             sum+=i
//             i++
//         }
//         console.log(`Answer is ${sum}`)
//         _interface.close()
//     }
// )
