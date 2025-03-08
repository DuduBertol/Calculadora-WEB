
const viewer = document.getElementById("viewer") 
const log = document.getElementById("log")

let firstNum = 0
let secondNum = 0

//queria usar struct, não sei...
let operation = ""
let state = "firstNum"


function AddNum(num) {
    Tracker()
    printLogMessage("Added: " + String(num))

    let tempString = String(num)
    viewer.textContent += tempString

    if (state == "firstNum"){
        firstNum += String(num)
    }    
    else if (state == "secondNum"){
        secondNum += String(num)
    }

    Tracker()
}

function SetOperation(oper) {
    printLogMessage("Set Operation: " + oper)

    if (oper == "sum"){
        viewer.textContent += " + "
    }
    else if (oper == "sub"){
        viewer.textContent += " - "
    }
    else if (oper == "mult"){
        viewer.textContent += " * "
    }
    else if (oper == "div"){
        viewer.textContent += " / "
    }
    else {
        log.textContent = "ERROR"
    }
    
    operation = oper
    state = "secondNum"

    Tracker()
}

function Result() {
    printLogMessage("Result from: " + String(firstNum) + " " + operation + " " + String(secondNum))

    let finalResult = 0

    firstNum = Number(firstNum)
    secondNum = Number(secondNum)

    if (operation == "sum") {
        finalResult = firstNum + secondNum 
    } 
    else if (operation == "sub"){
        finalResult = firstNum - secondNum
    } 
    else if (operation == "mult"){
        finalResult = firstNum * secondNum
    }
    else if (operation == "div"){
        finalResult = firstNum / secondNum
    }
    else {
        //Operação Inválida
        log.textContent = "ERROR" 
    }

    viewer.textContent = String(finalResult)

    firstNum = finalResult
    secondNum = 0

    Tracker()
}

function Cleaner() {
    printLogMessage("Clear")

    let empty = ""
    viewer.textContent = empty
    firstNum = 0
    secondNum = 0
    operation = ""
    state = "firstNum"

    Tracker()
}

function printLogMessage(msg) {
    //log.textContent = msg
}

function Tracker() {
    let tracker = document.getElementById("tracker")
    //tracker.textContent = "FirstNum = " + String(firstNum) + " || Operation = " + operation  + " || SecondNum = " + String(secondNum)
}
