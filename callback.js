var hello=function(data){
    console.log("data: "+data)
}
var hey=function(callback){
    console.log("hey working")
    callback("crossroads")
}
hey(hello)