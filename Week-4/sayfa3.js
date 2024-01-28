//fetch("./oyuncu.json")

//200ler pozitif 300ler bi sorun varsa 500ler sunucu hatası 400ler istemci hatası

const sonuc = fetch("./oyuncu.json")
.then(yanit => yanit.json()) //PROMISE DONER
.then(jsObjesi => {
    console.log(jsObjesi) //JS OBJESİ OLARAK DÖNER
})