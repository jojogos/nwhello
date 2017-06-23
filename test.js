let fns = [Function, Object, Number, Boolean, String, Array, Date];
let ar = TDATA.num_ar;
let log = console.log;

//////////////////////////////////////////////////
function searchPhone(_val) {
    let finded = findInComunications((v) => _val == v.name);
    if (finded) {
        $('#header-out1').text(finded.phone);
    } else {
        $('#header-out1').text("Not Find " + _val);
    }
    return true;
}


$('document').ready(function () {
    window.moveTo(1, 1);
    es.relinPressed(searchPhone);
    es.doneClick(searchPhone);
    let dbs = store.get('comunications'),
        namess = $("#namess");
    dbs.forEach(v => namess.append($("<option>").val(v.name)));

});
