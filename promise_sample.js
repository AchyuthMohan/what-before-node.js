

const Promise=require("promise")

function add(num1,num2){
  return new Promise((resolve,reject)=>{
      if (num1==0){
          reject("error:first number is zero")
      }
      resolve(num1+num2)
  })
}
function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num1==0){
            reject("error:first number is zero")
        }
        resolve(num1*num2)
    })
  }
  function div(num1,num2){
    return new Promise((resolve,reject)=>{
        if (num1==0){
            reject("error:first number is zero")
        }
        resolve(num1/num2)
    })
  }

add(10,20).then((sum)=>{                           //chain like manner
    console.log(sum)
    return multiply(sum,sum)
}).then(product=>{
    console.log(product)
    return div(product,10)
}).then(divd=>{
    console.log(divd)
})
.catch((err)=>{
    console.log(err)
})