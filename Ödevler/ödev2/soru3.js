//fiyat adında değişken oluşturun ve tamsayı değeri atayın
//adet adında bir değişken oluşturun ve tamsayı değeri atayın
//tutar adında bir değişken oluşturun ve fiyat ile adet çarpımını atayın
//consola "Tutar: xxx TL" yazdırın (xxx yerine tutar değişken değeri yazmalı)
//eğer tutar 50'den büyükse consola "Kargo ücretsiz" yazdırın
//eğer tutar 50'den küçükse consola "Kargo tutarı: 5 TL" yazdırın
//eğer tutar 50'den küçükse consola "Kargo dahil tutar: xxx TL" yazdırın (xxx yerine kargo bedeli + tutar yazmalı)
fiyat = 20
adet = 1
tutar = fiyat * adet

console.log(`Tutar: ${tutar} TL`)

if (tutar > 50) {
  console.log('Kargo Ücretsiz!')
} else {
  '', console.log('Kargo tutar: 5 TL')
  console.log(`Kargo dahil tutar: ${tutar + 5}`)
}
