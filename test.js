
let [n,b,s]=[1,true,"a string"];
let a=[2,3,4];
let d=new Date();
let fns=[Function,Object,Number,Boolean,String,Array,Date];

function Name(){
    this.name="NONAME";
}

class Person{
    constructor(){
        this.age='person';
    }
};
class Student extends Person{
    constructor(){
        super();
    }
};
var so1={},
    so2=new Name(),
    so3=new Person(),
    so4=new Student();
    so5=function(){};

println("n",iType(n));
println("b",iType(b));
println("s",iType(s));
println("d",iType(d));
println("fns",iType(fns));
for(var v of fns){
    println("fns iter",iType(v));
}
println("so1",iType(so1));
println("so2",iType(so2));
println("so3",iType(so3));
println("so4",iType(so4));
println("so5",iType(so5));
println("prototype obj",iType(Number.prototype));



