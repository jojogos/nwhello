
let [n,b,s]=[1,true,"a string"];

let d=new Date();
let fns=[Function,Object,Number,Boolean,String,Array,Date];

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    println(i);
  };
}

for(let i=0;i<10;i++){
    println("------------------------");
}

let ps=$('p');

for(let i=0;i<ps.length;i++){
    $(ps[i]).click(()=>{
        println("Click",i+1);
    })
}


