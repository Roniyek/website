yazı style color fontsize
/*
//getelementbyid ve queryselector teklı elementler
let yazi;
yazi = document.getElementById('header');
yazi.style.color="gray";
yazi.style.fontSize= '55px';
//document.getElementById('header').innerText='sa';  header id li yaziyi değiştirir
//document.getElementById('header').innerHTML='<b>yazi</b>' header id li yaziyi kalınlaştırır
//fontsize yazı buyuklugu
//color renk 
//.style.display="none"; yazıyı siler
//yazi.style.fontWeight='bold'; kalın yazar ama yazmıyor
document.querySelector('li').style.color='red '; //ilk
document.querySelector('li:Last-child').style.color='red ';//son
document.querySelector('li:nth-child(2)').style.color='red ';//biz seciyoz
document.querySelector('li:nth-child(2)').textContent="yazi yaz"//yazıyı degiştirir
//querySelector class('') veya # ile çalışır


*/
/*
//document.getElementsByClassName() ve classname

let grup;
grup = document.getElementsByClassName('falan filan')[4];
grup = grup[4];
//console.log(grup[4].textContent='sa'); yazı değişir 
//grup = grup.getElementsByTagname('a') a elementine ulaşır a div li gibi bir element
//for döngüsü yerine grup.forEach(funcition(item){console.log(item);}); diyip hepsini yazar
//fucition itemden önce ne istediğimizi yaziyoz  grup = document.querySelectionAll('li); gibi belirtilir
//öreniği
/*    grup = document.querySelectionAll('li);
grup.forEach(funcition(item){console.log(item);});  
//tum kutucuklara index no ve -hello yazacak  örengi

 grup = document.querySelectionAll('li);
grup.forEach(function(item,index) {
item.textContent=`${index}-hello`;  });  //1-hello "gibi"
console.log(grup)    
//tum kutuların rengi gri olacak  örneği

   grup = document.querySelectorAll('li:nth-child(even)';
grup.forEach(function(item){
    item.style.background='#ccc';   });    
*/
/*
//yazıları değiştirme
let renk = document.getElementById('header');
renk.style.color="green";
renk.style.fontSize='55px';
document.getElementById('header').innerHTML='<b>Hayal Paradoksu</b>'
let doc =document.querySelector('thead')
doc.style.color="white";
doc.style.fontSize="23px";
let cod =document.querySelector('tbody');
cod.style.color="white";
cod.style.fontSize="20px";

//backround ile arkasını boyama
let val;
val =document.querySelectorAll('thead');
val.forEach(function(item){
item.style.background='rgb(53, 165, 137)';
});

//backround ile arkasını boyama
let kal;
kal = document.querySelectorAll('tbody:nth-child(even)');
kal.forEach(function(item){
item.style.background='rgb(22, 83, 53)';
});

*/
/*
//eleman li yi oluşturduk
const li =document.createElement('li'); 
li.className="ferat";
li.setAttribute("tittle","new item"); 
//tittle ye new item isminde bir değişken ekledik
const a =document.createElement("a");
a.setAttribute("href","#");
//appenchild ile ekleme yapılır li ye
li.appendChild(a); 
document.querySelector("#task-list").appendChild(li); //ul ye koyma
console.log(li);
*/
/*
//liste element silme-ul listesi sikme
const list = document.querySelector("#task-list");
list.remove();
console.log(list);
//index inci eleman için dizi metdotu
list.children[3].remove();
console.log(list);
//class id gibi silme işlemleri classattrıbue
list.children[0].removeAttribute("class");
//döngü içindede silinebilir
for(let i=0;List.children.length;i++){
    list.children[i].removeAttribute("class");}
//element değiştirme-isim değiştirme
const h2 =document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("my list"));

const parent = document.querySelector(".card");
parent.replace.child(h2,cardHeader);
//href olusturma
let val;
let link;
   //link tanomlanmış olmalı
val = link.getAttribute("href","sa");
console.log(val);

//id si su olana ulaş
const btn = document.querySelector("#header");
btn.addEventListener("click",function(){
console.log("btnclicked");
});
*/
/*
// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click=buton
btn.addEventListener('click',eventHandler);
 ul.addEventListener('click',eventHandler);

// double click=iki defa basma
 btn.addEventListener('dblclick',eventHandler);

//mouse down=butona tıklama
 btn.addEventListener('mousedown',eventHandler);
//mouse up=tıklanan butondan mausu cekme
 btn.addEventListener('mouseup',eventHandler);

// mouseenter=id içinde olması
ul.addEventListener('mouseenter',eventHandler);
// mouseleave=id dişinda olması
ul.addEventListener('mouseleave',eventHandler);

// mouseover
ul.addEventListener('mouseover',eventHandler);
// mouseout
ul.addEventListener('mouseout',eventHandler);

// mouse move
const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
console.log(`event type : ${event.type}`);

h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;}
*/
/*
// Keyboard Events
const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');
//tuşa basınca
input.addEventListener('keydown',eventHandler);
//tusa basmayı bırakınca
input.addEventListener('keyup',eventHandler);
//arka plan rengi ile alakalı mause girince renk değis cıkınca eskı hale don vs
input.addEventListener('blur',eventHandler);
input.addEventListener('cut',eventHandler);
//arama kısmı arkaplanı 
function eventHandler(e){
e.target.style.backgroundColor='yellow';}
*/
/*
// Event Capturing


form.addEventListener('click',function(e){
console.log('form');
e.stopPropagation();  },true);  //divler arasındakillerin sadece ilgili div ini  cağırmayı saglar
 

cardBody.addEventListener('click',function(e){
console.log('card body');
e.stopPropagation();  },true);


card.addEventListener('click',function(e){
console.log('card');
e.stopPropagation();  },true);


container.addEventListener('click',function(e){
console.log('container');
e.stopPropagation();  },true);

//id ye ulaşmak için # kullanılır
*/

const form =document.querySelector("form");
const input =document.querySelector("#txtTaskName");
const btndeleteall =document.querySelector("#btnDeleteAll");
const tasklist =document.querySelector("#task-list");

eventListeners();
//eventlisteners adında bir fonk olusturduk
function eventListeners(){
//form un içine addnewitem değişkenini ekledik
//submit bir parametre
form.addEventListener("submit",addnewitem);
tasklist.addEventListener("click",deleteitem);
btndeleteall.addEventListener("click",deleteAllitems);
                         }
//e parametre almak içindir  
function addnewitem(e){
//console.log(input.value);==girdiğimiz değeri consoldada yazar-inputtaki değer
if(input.value==""){
    alert("Değer girmedin mal");
                   }
//li elemanını html den aldık                   
const li=document.createElement("li"); 
li.className="list-group-item list-group-item-secondary";
//li içine creat textnotu yani yazdığımız inputu ekleme işlemi
li.appendChild(document.createTextNode(input.value));
const a=document.createElement("a");
a.classList="list-group";  
//href e # ekleme işlemini yaptı 
a.setAttribute("href","#");     
a.innerHTML='<i class="fas fa-times"></i>';    
//li içine a yı ekleme işlemi
li.appendChild(a);
//li yi ul içine ekleme
tasklist.appendChild(li);
//değer eklendikten sonra arama kısmı silinmesi için boş değer ekleme
input.value="";
//form un sumbit olmasını engeller
    e.preventDefault();
                      }
function deleteitem(e){
//ikona bastık mı basmadık mı
if(e.target.className==="fas fa-times"){
//e.target elemana ulaşır. biz tıkladık mı demek
//html lodunda ikonun(i) bir ustu a sonra bir ustu li.
//iki defa parent element yazarak ikondan li ye ulasacaz
e.target.parentElement.parentElement.remove();
}


e.preventDefault();
                      }            
//bu birinci kod=hepsini sil                       
function deleteAllitems(e){
if(confirm("Hatıraları silmek nasıl bu kadar kolay baba?")){
tasklist.innerHTML="";
                          } 
e.preventDefault();                   
                                                           }   


