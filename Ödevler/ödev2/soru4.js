//fiyat adında değişken oluşturun ve tamsayı değeri atayın
//adet adında bir değişken oluşturun ve tamsayı değeri atayın
//KDV adında bir sabit oluşturun ve değerini 0.18 atayın
//tutar adında bir değişken oluşturun ve fiyat ile adet çarpımını atayın
//KDVliTutar adında bir değişken oluşturun ve tutar + tutarın KDV ile çarpımının toplamını atayın
//consola "Tutar: xxx TL" yazdırın (xxx yerine tutar değişken değeri yazmalı)
//consola "KDV Dahil Tutar: xxx TL" yazdırın (xxx yerine KDVliTutar değişken değeri yazmalı)
//eğer tutar 50'den büyükse consola "Kargo ücretsiz" yazdırın
//eğer tutar 50'den küçükse consola "Kargo tutarı: 5 TL" yazdırın
//eğer tutar 50'den küçükse consola "Kargo ve KDV dahil toplam tutar: xxx TL" yazdırın (xxx yerine kargo bedeli + KDVliTutar yazmalı)
//eğer tutar 100'den büyükse consola "10TL Puan kazandınız" yazdırın
//eğer tutar 150'den büyükse consola "15TL Puan kazandınız" yazdırın
//eğer tutar 200'den büyükse consola "20TL Puan kazandınız" yazdırın
//eğer tutar 100'den küçükse consola "Puan kazanamadınız" yazdırın
let fiyat = 105
let adet = 1
const KDV = 0.18
let tutar = fiyat * adet
let KDVliTutar = tutar + tutar * KDV
console.log(`Tutar: ${tutar}`)
console.log(`KDV Dahil Tutar: ${KDVliTutar}`)
if (tutar > 50) {
  kargo = 0
  console.log('Kargo Ücretsiz!')
} else {
  console.log('Kargo bedeli 5 TL')
  console.log(`Kargo ve KDV dahil toplam tutar: ${5 + KDVliTutar} `)
}
if (tutar > 100 && tutar < 150) {
  console.log('10 TL Puan Kazandınız...')
} else if (tutar > 150 && tutar < 200) {
  console.log('15 TL Puan Kazandınız...')
} else if (tutar > 200) {
  console.log('20 TL Puan Kazandınız...')
} else {
  //100den küçükse ihtimali
  console.log('Puan kazanamadınız')
}
