function terimaInput(){
    var a=document.forms['curhat']['nama'].value;
    var b=document.forms['curhat']['isi'].value;
    
    var tabel=document.getElementById('tabelInput');
    var row=tabel.insertRow(1)
    var cell1=row.insertCell(0)
    var cell2=row.insertCell(1)

    cell1.innerHTML=a;
    cell2.innerHTML=b;

    alert('Berhasil terkirim! Scroll ke bawah yaa')
}