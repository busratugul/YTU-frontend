//promise - söz vermek

const yapilacakIs = new Promise(   (olumlu, olumsuz)=>{ //producing code yani üreten code ya bir veri ya da bir hata üretir
    fetch("https://fakestoreapi.com/products")
    .then(yanit=> yanit.json())
    .then(veri => {
        //veri nesnesi bir array ve içerisinde ürün bilgi objeleri var
        console.log(veri)
    })
}   )


yapilacakIs.then(() => {})