const readline = require("readline")

const _interface = readline.createInterface(
{    input : process.stdin,
     output : process.stdout
})

_interface.question("Enter your age:",
    (answer) => {
        if (answer>18){
             console.log("You can vote")
        }
         console.log("You cannot vote")
         _interface.close()
    }
)