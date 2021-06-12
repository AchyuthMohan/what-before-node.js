const { reject } = require("promise")
const Promise=require("promise")

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Achyuth")
        },3000)
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("703")
        },2000)
    })
}
dt=new Date()
//Promise.all([getName(),getMobile()]).then((result)=>{
  //  console.log(result)
    //console.log(new Date()-dt)
//})
async function getUser(){           //await can be performed only in awync function or else it is error.
   let name= await getName()        //Manually we are telling the compiler to stop and wait until we get value from getName function.
   console.log(name)
   let mobile= await getMobile()
   console.log(mobile)
}
getUser()
