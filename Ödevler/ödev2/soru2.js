//fiyat adında değişken oluşturun ve tamsayı değeri atayın
//adet adında bir değişken oluşturun ve tamsayı değeri atayın
//tutar adında bir değişken oluşturun ve fiyat ile adet çarpımını atayın
//consola "Tutar: xxx TL" yazdırın (xxx yerine tutar değişken değeri yazmalı)
//eğer tutar 50'den büyükse consola "Kargo ücretsiz" yazdırın
//eğer tutar 50'den küçükse consola "Kargo tutarı: 5 TL" yazdırın
//eğer tutar 50'den küçükse consola "xxx TL daha harcayın kargo bedava olsun" yazdırın (xxx değeri 50 ile tutar farkı olmalı)
let fiyat = 30
let adet = 3
let tutar = fiyat * adet
console.log(`Tutar: ${tutar} TL`)
if (tutar > 50) {
  console.log('Kargo Ücretsiz')
} else {
  console.log('Kargo tutarı: 5 TL')
  console.log(`${50 - tutar} TL daha harcayın kargo bedava olsun`)
}
