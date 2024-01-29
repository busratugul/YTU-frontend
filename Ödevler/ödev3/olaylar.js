/* JS ile yazdığımız kodların belirli eylem ve olaylar sonucunda çalışmasını isteriz.Bunlara eventlar denir.W3Sda basit dilde anlatılmış incele.

- hangi eventi kullanacaksak o eventi hangi elementler destekliyor diye bakmamız gerekiyor.
-event bubling alt elementdeki olay triggerlanınca üst elementteki eventin da triggerlanması

GLOBAL EVENTLAR
1-WINDOW EVENTS
örnekler: 
onload sayfanın yuklenmesinin tamamlandığı an
onoffline/ ononline sayfa görüntülendiği anda bağlantı koptuğu/bağlandığı an

2-FORM EVENTS girilen bilgiler alınır
focus: odaklanma
onsubmit: gönderme eventi

3-KEYBOARD EVENTS basılan tuşu alabiliriz
onkeydown: klavyedeki bir tuşa basıp parmağımızı kaldırmadığımız yani bastığımız an 
onkeypress: parmağımız klavyede basılı olduğu an
onkeyup: parmağımızı kaldırdığımız an

4-MOUSE EVENTS tıklanan tuş alınabilir
onclick: tıklama 
ondbclick: double click

4-DRAG EVENTS (sürükle bırak) sürüklenenin idsi alınabilir
elemente draggable vermek gerekir.

5-CLIPBOARD EVENTS (copy-paste-cut)
6-MEDIA EVENTS

*/

function renkDegistir(eleman) {
  document.querySelector('#p-1').innerHTML = 'Renk Değişti'
  eleman.style.backgroundColor = 'blue'
}
//---eventlarda herhangi bir fonksiyon içinde parametre olarak this gönderilirse DOM'da karşılığını nesne olarak göndermiş oluruz.this gönderip istediğimiz isimle karşılayabiliriz. (this-eleman yaptık) Yani tıklanan elemanı göndeririz.Sanki querySelector gibi seçicilerle o elemanı seçmişiz gibi artık ona verdiğimiz isim üzerinden erişebiliyoruz.

//2-HTML elementine event atayıp sonra bir function vererek jsde onu tanımlamak da kullanır ama aslında en çok kullanılan yöntem elementi js tarafına seçicilerle alıp orada elemana bir event eklemektir.Bu yöntem kod okunaklığını kolaylaştırır.
document.querySelector('#kutu-1').onmouseover = function () {
  //anonim function
  event.target.style.backgroundColor = 'green'
  document.querySelector('#p-1').innerHTML = 'Fare üzerine geldi'
}

//3-bir yöntem daha var addEventListener kullanmak.Ancak addEventListenerda event isimlerinin başındaki on eki kaldırılır.Genellikle bu yöntem kullanılır.
document.querySelector('#kutu-1').addEventListener('mouseout', function () {
  document.querySelector('#p-1').innerHTML = 'Fare terk etti'
  event.target.style.backgroundColor = 'red'
})

//2 ve 3. yöntem arasındaki fark onmouseover eventinda baska olaylar eklemek istersek eger 2.de hepsini o fonksiyon içine yazmak zorundayız. ayrı ayrı yazarsak js sadece sonuncusunu çalıştırır. Ama 3. yöntemde aynı event ile ayrı ayrı tanımlamalar yapsak bile hepsi çalışır.

//Bu yöntemlerle(2/3) çalıştığımızda üzerine gelinen elemanı nasıl alacağız? (this kullanılmıyor cünkü function göndemiyoruz htmlden) event kullanırız. Event, herhangi bir olay ataması yapıldığında js tarafından bize otomatik verilen bir nesnedir. event.target ile nesnete direkt ulaşırız. target hedef, event olay demektir.

//W3S html dom references- HTML DOM EVENTSlar var addEventsListener içinde yazabileceğimiz eventlar var.incele.Belongs to bu olayların hangi olay grubuna dahil oldugunu söyler.
