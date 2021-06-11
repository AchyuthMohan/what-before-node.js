function person(name,age,place){
this.name=name
this.age=age
this.place=place
this.display=function(){
    console.log("name: ",this.name,"Age: ",this.age,"Place: ",this.place)
}
}
var dilshad=new person("dilshad",20,"calicut")
var abhinand=new person("abhinand",20,"calicut")
console.log(dilshad.display())
console.log(abhinand.display())
console.log(dilshad)
dilshad.display()