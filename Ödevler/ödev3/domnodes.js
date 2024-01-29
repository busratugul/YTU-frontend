//node: düğüm demektir.Bu düğümler html etiketlerini temsil eder.Elementlerden eleman / node diye bahsedilir.

//Yeni eleman oluşturmak - createElement() ile oluşturulan element appendChild ile ekleme yapmak gerekmektedir. İkisi beraber çalışıyor gibi düşünebiliriz. appendChild sona ekleme yapar.
let eleman = document.createElement('p')
document.querySelector('body').appendChild(eleman)
eleman.innerHTML = 'Ben eleman'
eleman.style.fontSize = '3rem'
eleman.id = 'pr-1'

let eleman2 = document.createElement('div')
//eklediğimiz elemanın yerini ayarlamak istiyorsak insertBefore kullanılır. araya eklemek anlamına gelir.İki parametre alır.Birincisi oluşturulan yeni node, ikincisi de hangi elemandan önce eklenecekse o.
document.querySelector('body').insertBefore(eleman2, eleman)
eleman2.innerHTML = 'Ben eleman2'
eleman2.style.backgroundColor = 'yellow'

//Eleman silmek - remove()
setTimeout(function () {
  eleman.remove()
}, 2000)

//Var olan elemanı güncellemek -  replaceChild() mutlaka parent etiketin içinde çalıştırılır.İki parametre alır. Bir neyi koyucaz, 2 neyin yerine koyucaz
let eleman3 = document.createElement('section')
document.querySelector('body').replaceChild(eleman3, eleman2)

//JSde DOM nesneleri arasında gezinmemizi sağlayan bazı özellikler var bunlara DOM NAVIGATION denir.chilnode, sibling ve parent ilişkisi ile bu gezinme sağlanıyor. Elementlerin içindeki metinlerin parenti içinde olduğğu etikettir.
let kokEtiket = document.querySelector('html')
//chilNodes[nodenumber] bize child listesi döndürür
console.log(kokEtiket.childNodes.length)
console.log(kokEtiket.childNodes) // [head, text, body]
kokEtiket.childNodes[2].style.backgroundColor = 'gray'

//lastChild ile herhangi bir ağaç içindeki bir elemanın son elemana ulaşılır. firstChild ile de ilk eleman
console.log(kokEtiket.lastChild) //body
console.log(kokEtiket.firstChild) //head

//parentNode ile seçtiğimiz elemanın apğaç içerisindeki üstünde yer alan elemanı seçmemizi sağlar.
let sc1 = document.querySelector('section')
console.log(sc1.parentNode) //body
sc1.parentNode.id = 'govde'

//nextSibling, previousSibling seçtiğimiz elemanın önceki ve sonraki kardeşlerine ulaşmamızı sağlar.
let govde = kokEtiket.childNodes[2] //body
console.log(govde.childNodes) //metinler de bir nodedur.
console.log(govde.previousSibling) //#text

//Üzerinde çalıştığımız node elemanının ne tür bir tipi olduğuna nodeName ve nodeType ile bakarız.
console.log(govde.childNodes[0].nodeName) //#text
console.log(govde.childNodes[1].nodeName) //P
console.log(govde.childNodes[1].nodeType) //1
//nodetypelardan 1 html elemanına, 2 attributeye, 3 textnode, 8 yorumlar w3s dom navigationdan devamına bakabiliriz.

//CLASS LISTLER İLE ÇALIŞMAK: js ile bir dom elemanı üzerinde class ekleme, çıkarma, classa sahip olup olmadığını öğrenmek için çeşitli fonksiyonlar vardır.
console.log(sc1.classList) //DOMTokenList döndürür.Bu listenin bazı önemli methodları var
//add():parantez içine birden fazla ekleme yapılabilir.
sc1.classList.add('sinif1', 'sinif2')
//remove(): birden fazla classı kaldırabiliriz.
sc1.classList.remove('sinif1')
//toggle(): girilen class adını ekleme ve kaldırma yapabilir.Eğer belirtilen class adı varsa kaldırır, yoksa ekler
sc1.classList.toggle('sinif5')
console.log(sc1.classList.toggle('sinif5')) //true ve false değeri döndürür
//contains() fonksiyonu içeriyor mu yani bu class var mı yok mu diye kontrol edip true/ false döner.
console.log(sc1.classList.toggle('sinif5'))
