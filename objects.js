var person={name:"dilshad",age:25,place:"Calicut",display: function(){
    console.log(this.name)
}
}
person.dob="14-05-2002"
person.displayAge=function(){
    console.log(this.age)
}


console.log(person.displayAge())