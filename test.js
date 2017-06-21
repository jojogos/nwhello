
let fns = [Function, Object, Number, Boolean, String, Array, Date];
let ar = TDATA.num_ar;
let log = console.log;
//////////////////////////////////////////////////


println("iLibs.es.doneClick([function]");
println("iLibs.es.actionClick([function]");
println("Libs", Object.getOwnPropertyNames(Libs));
println("iLibs", Object.getOwnPropertyNames(iLibs));
///////////////////////////////////////////////////////

$.getJSON('td.json',function(jsonObj){
    $.each(jsonObj,function(idx,obj){
        println(idx,obj.Airplane);
    });
})
