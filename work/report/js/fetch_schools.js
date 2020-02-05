// http://api.scb.se/UF0109/v2/

(function(){

    var schoolSelect = document.getElementById("schoolSelect")
    var schoolTable = document.getElementById("schoolTable")

    var opt = document.createElement('option');

    var schoolNr
    var komunSchools

    fetch('data/kommun_nrs.json')
    .then(res => res.json())
    .then(data => schoolNr = data)
    .then((schoolNr) => console.log(schoolNr))

    var jsonString = JSON.parse(schoolNr)

    for (var i = 0; i < jsonString.Kommuner.length; i++) {
        var kommun = jsonString.counters[i];
        console.log(kommun.Kommunkod);
        opt.appendCHild(document.createTextNode(kommun.Namen))
        opt.value = kommun.Kommunkod
        sel.appendChild(opt)
    }

    /*for(element element in the komun_nrs JSON/XML file)
{
    opt.appendCHild(document.createTextNode('name of the komun'))
    opt.value = 'nr of komun'
    sel.appendChild(opt)
}
    */


   schoolSelect.addEventListener("change", function(){
    fetch('data\kommun_schools.xml')
    .then(res => res.json())
    .then(data => komunSchools = data)
    .then(() => console.log(komunSchools))

    var row = schoolTable.insertRow(0)
    var cell = row.insertCell(0)
    cell.innerHTML = 'komun name' 

    var i = 1 
    /* for(each element in komun_schools JSON/XML file)
    {
      row = schoolTable.insertRow(i)
      cell = row.insertCell(0)
      cell.innerHTML = 'school name' 
      i++
    }
    
    */

   });

})()