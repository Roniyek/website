# website
deneme
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
