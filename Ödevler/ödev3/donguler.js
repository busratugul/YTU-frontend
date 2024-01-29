/* Tekrar tekrar çalıştırmak istediğimiz blok grubuna döngü(loop) denir.
for / do while / while / for...in / for...of
*/

//WHILE
let sayac = 0
while (sayac < 10) {
  console.log(sayac)
  sayac++ //döngüyü sonlandıracak
}

//DOWHILE
let sayac2 = 0
//do bloğu; false ise 1 kere çalışır, true ise her döngüde çalışır
do {
  console.log('Do while yapısı')
  sayac2++
} while (false)
//while( sayac2 < 4)

/*FOR (while alternatifi olarak görülebilir farkı while ve dowhile parantez içine true ya da false döndüren bir değer alırken for 3 parçadan oluşur whilen dağınık yapısını topladığı için daha çok kullanılıyor.)
for(baslangic islemleri; kosul; dongu sonu islemleri){}
*/

for (let sayac3 = 0; sayac3 < 15; sayac3++) {
  console.log(sayac3)
}
/* 
    1. aşama = let sayac3 = 0
    2.aşama = sayac3 < 15 koşulu true yada false döner
    3.aşama = sayac3ü konsola yazdırma
    4.aşama=sayacı arttırma ve eğer koşul true ise bloğu tekrar çalıştırma 
*/

//BREAK kırmak, sonlandırmak. Döngü içinde herhangi bir noktaya konulursa orada döngü sonlanır ve programın kodları kaldığı yerden çalışmaya devam eder.
//CONTINUE sürdürmek. continueden sonraki kodları blok içinde çalıştırmıyor, döngünün kontrolüne tekrar geri döndürüyor.Döngü kontrolünden sonra eğer şart sağlanıyorsa o zaman döngüye tekrar giriyor.

for (let sayac4 = 0; sayac4 < 5; sayac4++) {
  //break //hiçbir kod çalışmadı ama bu kullanımın bir anlamı yok genellikle if koşulu ile kullanılır.
  if (sayac4 == 3) {
    console.log('sayac 3e eşit oldu ve break ile döngüden çıkıldı')
    break
  }
  console.log(sayac4)
}

for (let i = 0; i < 7; i++) {
  // continue; //burada continue koşul doğru ise altındaki kodları çalıştırtmadan döngü koşulunu tekrar kontrol ettiriyor ama sayaç artıcı tabiki de bu sırada artıyor ve 7 kere bu kontrol yapılıyor genellikle continueda bir koşul içinde kullanılıyor"",
  if (i == 3) {
    console.log("i 3'e eşit oldu ve continue aktif oldu")
    continue
  }
  console.log(1)
  //burada 7 kere 1 yazılması gerekirken 6 kere yazıldı çünkü continue i 3e eşit olduğunda true oldu ve çalıştı ama kendi blogunun haricindeki kodları o döngüde çalıştırmadığı için 1 1 kere eksik oldu.
}

//While döngülerinde de birebir aynı şekilde break ve continue kullanabiliriz.
