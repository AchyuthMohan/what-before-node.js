var read=require("readline-sync")

var n1=read.question("Enter first number: ")
var n2=read.question("Enter second number: ")
if(n1>n2){
    console.log("larger is",n1)
}
else if(n2>n1) {
    console.log("larger is",n2)
    
} 
else {
    console.log("equal")
}
console.log(n1==n2)