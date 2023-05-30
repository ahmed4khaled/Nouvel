let start = document.getElementById('start')
let moon = document.getElementById('moon')
let river = document.getElementById('river') 
let moun1 = document.getElementById('mountains3')
let moun2 = document.getElementById('mountains4')
let moun3 = document.getElementById('mountains7')
let boat = document.getElementById('boat')
let nou = document.getElementById('nou')
let H = document.getElementsByTagName('h2')[0]

window.onscroll = function () {
let value = scrollY
  start.style.left = value + 'px'
  moon.style.top = value*2 + 'px'
  moun1.style.top = value*1.5 +'px'
  river.style.top = value +'px'
  moun2.style.top = value*1.2 +'px'
  boat.style.left = value*2.4 +'px'
  nou.style.fontSize = value +'px'
if (value>=67) {
    nou.style.fontSize = 67 +'px'
    nou.style.position ='fixed'
}
if (value>=127) {
    document.querySelector("section").style.background= 'linear-gradient(#376281,transparent)'
}else{
    document.querySelector("section").style.background= 'linear-gradient(#200016,transparent)'

}
if (value>=328.5) {
    nou.style.display = 'none'
}else{
    nou.style.display = 'block'
}
  if (value>=35) {
    H.style.display = 'none'
}else{
    H.style.display = 'block'
}
}
console.log(document.querySelector("section"));
