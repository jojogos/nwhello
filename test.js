
let log = console.log;

//////////////////////////////////////////////////
function searchPhone(_val) {
    let finded = findInComunications((v) => _val == v.name),
        viewer = $("#shower").children("span:eq(0)");
    if (finded) {
        viewer.html(`${finded.name}:${finded.phone}`);
    } else {
        viewer.html(`Not Find '${_val}'.`);
    }
    return true;
}
function getVdtString(){
    return new Date().toLocaleString().slice(0,-3);
}

$('document').ready(function () {
    window.moveTo(1, 1);
    let ho1 = $("#header-out1");

    ho1.html(getVdtString());
    setInterval(()=>ho1.html(getVdtString()),1000*60);

    es.relinPressed(searchPhone);
    es.doneClick(searchPhone);

    let dbs = store.get('comunications'),
        namess = $("#namess");
    dbs.forEach(v => namess.append($("<option>").val(v.name)));

});
