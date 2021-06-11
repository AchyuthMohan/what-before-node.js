class sample{
    samplehello(){
        console.log("this is sample hello")
    }
}


class hello extends sample{
    constructor(n1,n2){
        super()
        this.n1=n1
        this.n2=n2
    }
     hello(){
        console.log("hello friends "+this.n1,this.n2)
    }
}
let hey=new hello(10,20)
hey.hello()
hey.samplehello()