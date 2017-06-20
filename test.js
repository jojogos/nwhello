
let [n,b,s]=[1,true,"a string"];
let d=new Date();
let fns=[Function,Object,Number,Boolean,String,Array,Date];

//////////////////////////////////////////////////
class MainSheet{
  constructor(num){
    this.coloum=num;
  }
  show(){
    println("MainSheet",this.coloum);
    setTimeout(()=>alert(this.coloum),2000);
  }
}

class Bsheet extends MainSheet{
  constructor(num,width){
    super(num);
    this.width=width;
  }
  show(){
    super.show();
    println("Bsheet",this.width);
  }
}

let b1=new MainSheet(321);
let b2=new Bsheet(128,31);
b1.show();
b2.show();
