
let userName = prompt("Adınızı Giriniz:") // Kullanıcıdan bilgi almak için prompt kullanıldı.
let info =document.querySelector("#info") // querySelector ile info id seçildi.
info.innerHTML = `${userName}` // innerHTML ile userNamedeki bilgiler infoya yazıldı.

function tarihsaat() {   //saniyenin hareketli olması için functin içine alındı.

let date = new Date(); 
let gün = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","cuma","Cumartesi"]
let saat = date.getHours();
let dakika = date.getMinutes();
let saniye = date.getSeconds();
let günismi = date.getDay();
let myClock =document.querySelector("#myClock")
myClock.innerHTML = `${saat}:${dakika}:${saniye}  ${gün[günismi]}`
}
setInterval(tarihsaat, 1000); // her saniye değişiklik olması için 1000 yapıldı.
