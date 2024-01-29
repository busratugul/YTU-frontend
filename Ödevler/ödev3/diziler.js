/* ARRAY
Complex veri tiplerinden bir diğeri de arraylerdir.
Matematikteki kümeler gibi düşünebiliriz.İçinde function, obje, isimler her şeyi tutabilir.

complex: object, array ,function
her bir fonksiyon js tarafından obje olarak değerlendirilir.
*/

let isim = 'Ahmet' //string
let personel = {
  //object
  isim: 'Ahmet',
  soyad: 'Yılmaz',
  hizmetYiliHesapla: function () {
    //....
    //return ...
  },
}

//Objeler gibi ancak farkı: elemanlara property adı vermiyoruz. Js bunlara otomatik olarak birer numara(index) atıyor. 0dan başlıyor, 1,2...

//genel tanımlama kullanımı
let isimler = ['Ahmet', 'Mehmet', 'Ece', 'Kaan']

//array tanımlama 2. yol
let isimler2 = new Array('Ahmet', 'Mehmet', 'Ece')

//array içindeki elemanlara ulaşma: Hangisine ulaşmak istiyorsak js tarafından verilen otomatik numaraları kullanırız.
console.log(isimler[2]) //Ece
console.log(isimler[0]) //Ahmet
console.log(isimler) //tüm listeyi yazdırır

// ELEMAN GÜNCELLEME
isimler[1] = 'Busra' // ["Ahmet", "Busra", "Ece" ]
console.log(isimler)

//UZUNLUĞU ALMA - LENGTH (property)
console.log(isimler.length) //3
//mesela dinamik bir liste olduğunda toplam kaç eleman olduğunu bilmediğimizde son elemana ulaşmak için length-1 kullanırız.
console.log(isimler[isimler.length - 1])
//length ile dizinin tüm elemanlarını dönebiliriz.
for (sayac = 0; sayac < isimler.length; sayac++) {
  console.log('***' + isimler[sayac] + '***')
}

//ARRAY METHODLARI bir array oluşturduğumuz an js bir array objesi tanımlar ve içinde js tarafından atanmış özel methodlar vardır.

//SONA
//PUSH() - dizinin sonuna eleman ekleme, push içine 1 veya daha fazla değer verebiliriz.
isimler.push('Onur', 'Eda')
console.log(isimler) //['Ahmet', 'Busra', 'Ece', 'Kaan', 'Onur', 'Eda']

//POP() -son elemanı elde edip silmek için kullanılır.
isim1 = isimler.pop() //eda
console.log(isimler) // ['Ahmet', 'Busra', 'Ece', 'Kaan', 'Onur']

//BAŞA
//UNSHIFT()- dizinin başına eleman ekler
isimler.unshift('Eda', 'Okan')
console.log(isimler) //['Eda', 'Okan', 'Ahmet', 'Busra', 'Ece', 'Kaan', 'Onur']

//SHIFT()- dizinin başındaki elemanı elde edip siler.
isim1 = isimler.shift() //eda
console.log(isimler) //['Okan', 'Ahmet', 'Busra', 'Ece', 'Kaan', 'Onur']

//silme veya ekleme işlemlerinden sonra indeksler tekrar verilir.
