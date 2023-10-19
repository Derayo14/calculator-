let displayValue="";
document.getElementById("display").value=0
function appendToDisplay(value){
    displayValue += value
    document.getElementById("display").value= displayValue
    
}
function clearDisplay(){
    displayValue =""
    document.getElementById("display").value=displayValue
}
function calculateResult(){
    // Try and catch is use for error handling
    // eval() 

 
    try{
        const result = eval(displayValue)
        console.log(result)
        document.getElementById("display").value=result
    }
    catch(error){
        console.log("this is catching error from the try block: " + error)
    }

}
