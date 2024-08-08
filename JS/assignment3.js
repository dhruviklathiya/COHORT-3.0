const readline = require("readline")

const _interface = readline.createInterface(
{    input : process.stdin,
     output : process.stdout
})

const _function = () => {
    _interface.question("Enter number for checking:",
        (answer) => {
            if (!isNaN(answer)){
                if (answer == 0){
                    _interface.close()
                }
                else if (answer%2==0){
                     console.log(`Enetered number ${answer} is even`)
                     console.log("Enter 0 for exit")
                     _function()
                    }
                else{
                    console.log(`Enetered number ${answer} is odd`)
                    console.log("Enter 0 for exit")
                    _function()
                }
            }
            else{
                console.log("Please enter number only as input")
                _function()
            }
        }
    )
}

_function()