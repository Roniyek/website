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
