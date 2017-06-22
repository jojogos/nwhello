let fns = [Function, Object, Number, Boolean, String, Array, Date];
let ar = TDATA.num_ar;
let log = console.log;
>>>>>>> cdf7618d2599c2584b3b1f92651fdf0eea858b10
//////////////////////////////////////////////////


println("iLibs.es.doneClick([function]");
println("iLibs.es.actionClick([function]");
println("Libs", Object.getOwnPropertyNames(Libs));
println("iLibs", Object.getOwnPropertyNames(iLibs));
///////////////////////////////////////////////////////

$.getJSON('jsons/td.json',function(jsonObj){
    $.each(jsonObj,function(idx,obj){
        println(idx,obj.Airplane);
    });
})
