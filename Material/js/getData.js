function sendData(judul, porsi, biaya, prosedur) {
    let datanya = {
        "judul": judul,
        "porsi": porsi,
        "biaya": biaya,
        "prosedur": prosedur
    };
    let dataJSON = JSON.stringify(datanya);
    let xmlhttp = XMLHTTPRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 201) {
            let dataMhs = JSON.parse(this.responeText);
            console.log(dataMhs);
        }
    }
    xmlhttp.open("POST", "Linknya", true);
    xmlhttp.send(dataJSON);
}