document.getElementById("listeZekat").addEventListener("change",zekatHesaplama);

function zekatHesaplama(){
    let liste=document.getElementById("listeZekat");
    let secılenYılZekat=liste.options[listeZekat.selectedIndex].value;

    let sonuc=750/secılenYılZekat;
    document.getElementById("sonuc").innerHTML="Seçtiğiniz Yıl Vericeğiniz Zekat Mikarı  "+sonuc.toFixed(2)+"";
}