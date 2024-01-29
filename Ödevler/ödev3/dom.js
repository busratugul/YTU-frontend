/* DOM(Document Object Model) 
DOM Standart diyerek arama yaparak standart dokümanlara ulaşabiliriz.
Her sitenin kaynak kodu olur burada en temel öğe <html> elementidir yani root(kök) elementtir.
window elementinin altında document nesnesini görmüştük. DOCUMENT: html elementleri ile oluşturulmuş kodun hiyerarşik yapısını temsil eden ana nesnedir.
-Herhangi bir elementin içinde yer alan metinler de documentin hiyerarşik yapısında bir eleman olarak sayılıyor.
-html elementlerine head etiketi vermezsek bile tarayıcı head elementini kendi olıuşturur.Çünkü bir ağaç gibidir bu yapı.Bu ağaçta aynı seviyede olan elementlere sibling deniyor.Üst seviyedekiler parenttır.Alt seviyedekiler de childrendır.
-html etiketlerinin içindeki özelliklere attribute denir.

SELECTORS
getElementById : bir html etiketi döndürür.
getElementsByTagName: bir dizi döndürür
getElementsByClassName: dizi

querySelector() içlerine css seçici yazılır.
querySelectorAll() nodeList döndürür.
document.querySelectorAll(".social-media")[0] diyerek kullanırız.
document.querySelectorAll("img")[0].src = "" yeni foto verebiliriz. Bu seçicilerle html etiketlerinin attributeya erişebiliriz.
document.querySelector("body").style.backgroundColor= sık yaptığımız bu style manipülasyonu da aynı attribute işlemi.

Örneğin:
document.getElementByTagName("a")[0].innerHtml = gibi tek elemanı değiştirebiliriz ya da hepsini değiştirmek istiyorsak döngü oluşturmak gerekiyor.

*/

