function add(num1,num2,callback){
    let err=false
    if(num1==0){
       err=true
    }
    callback(num1+num2,err)
}

add(0,20,(sum,err)=>{
    if(err){
        console.log("first number is 0")
    }
    else{
        console.log(sum)
    }
    
})