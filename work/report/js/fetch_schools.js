// http://api.scb.se/UF0109/v2/

(function () {

    var schoolSelect = document.getElementById("schoolSelect")
    var schoolTable = document.getElementById("schoolTable")


    var schoolNr
    var komunSchools
    var jsonObj 
    fetch('data/kommun_nrs.json')
        .then(res => res.json())
        .then(data => schoolNr = data)
        .then((schoolNr) => console.log(schoolNr))
        .then(jsonObj = JSON.parse(schoolNr))

    //   schoolNr = '{    "Uttagsdatum": "2020-02-05T10:34:26.8768229+01:00",     "Kommun": [     {               "Kommunkod": "1440",  "Namn": "Ale" },{               "Kommunkod": "0382",  "Namn": "Östhammar" }, { "Kommunkod": "1256","Namn": "Östra Göinge"},{"Kommunkod": "2513", "Namn": "Överkalix"},{     "Kommunkod": "2518", "Namn": "Övertorneå"}]}'



    //   console.log(jsonObj)

    for (var i = 0; i < jsonObj.Kommun.length; i++) {
        var opt = document.createElement('option');
        var kommun = jsonObj.Kommun[i];
        opt.appendChild(document.createTextNode(kommun.Namn))
        opt.value = kommun.Kommunkod
        kommunNr = kommun.Kommunkod
        schoolSelect.appendChild(opt)
    }

    schoolSelect.addEventListener("change", function () {
        var kommunNr = schoolSelect.options[schoolSelect.selectedIndex].value
        //    console.log(kommunNr)
        fetch('data\&{kommunNr}.json')
            .then(res => res.json())
            .then(data => komunSchools = data)
            .then((komunSchools) => console.log(komunSchools))

        //   var schools = '{ "Uttagsdatum": "2020-02-05T14:51:08.9349048+01:00",   "Skolenheter": [   { "Kommunkod": "1440",  "PeOrgNr": "2120001439", "Skolenhetskod": "11043800",          "Skolenhetsnamn": "Bohusskolan"},{"Kommunkod": "1440","PeOrgNr": "2120001439",  "Skolenhetskod": "12789480","Skolenhetsnamn": "Nolskolan" }]}'

        jsonObj = JSON.parse(komunSchools)

        //  console.log(jsonObj)

        var rowCount = schoolTable.rows.length;
        for (var x = rowCount - 1; x > 0; x--) {
            schoolTable.deleteRow(x);
        }

        var row = schoolTable.insertRow(0)
        var cell = row.insertCell(0)
        var cell1 = row.insertCell(1)
        var cell2 = row.insertCell(2)
        var cell3 = row.insertCell(3)
        cell.innerHTML = 'Skolenhetskod'
        cell1.innerHTML = 'Skolenhetsnamn'
        cell2.innerHTML = 'Kommunkod'
        cell3.innerHTML = 'PeOrgNr'

        for (var i = 0; jsonObj.Skolenheter.length; i++) {
            var school = jsonObj.Skolenheter[i]
            row = schoolTable.insertRow(i + 1)
            cell = row.insertCell(0)
            cell1 = row.insertCell(1)
            cell2 = row.insertCell(2)
            cell3 = row.insertCell(3)

            cell.innerHTML = school.Skolenhetskod
            cell1.innerHTML = school.Skolenhetsnamn
            cell2.innerHTML = school.Kommunkod
            cell3.innerHTML = school.PeOrgNr
        }

    });

})()