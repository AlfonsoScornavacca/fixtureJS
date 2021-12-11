let btn = document.getElementById("btn")
let player = document.getElementById("player")
let btn2 = document.getElementById("btn2")
let player2 = document.getElementById("player2")
let team1 =document.getElementById("11")
let team2 =document.getElementById("22")
let team3 =document.getElementById("33")
let team4 =document.getElementById("44")
var cantidadteam1 = 0
var cantidadteam2 = 0
var cantidadteam3 = 0
var cantidadteam4 = 0

btn.addEventListener('click', function et(){
    let nombre = player.value;
    var lista = document.createElement('h4')
    var nodo = document.createTextNode(nombre)


    var posicion=Math.floor(Math.random()*4)+1
    
    

    if(posicion==1 && cantidadteam1<= cantidadteam2 && cantidadteam1 <= cantidadteam3 && cantidadteam1<= cantidadteam4){

    lista.appendChild(nodo)
    team1.appendChild(lista)
    cantidadteam1++
}else if(posicion==2 && cantidadteam2<= cantidadteam1 && cantidadteam2 <= cantidadteam3 && cantidadteam2<= cantidadteam4){

    lista.appendChild(nodo)
    team2.appendChild(lista)
    cantidadteam2++
} else if(posicion==3 && cantidadteam3<= cantidadteam2 && cantidadteam3 <= cantidadteam1 && cantidadteam3<= cantidadteam4 ){

    lista.appendChild(nodo)
    team3.appendChild(lista)
    cantidadteam3++
}else if(posicion==4 && cantidadteam4<= cantidadteam2 && cantidadteam4 <= cantidadteam3 &&cantidadteam4<= cantidadteam1){

    lista.appendChild(nodo)
    team4.appendChild(lista)
    cantidadteam4++
    
        
}else{et()}
})

let team5 = document.getElementById("55")
let team6 = document.getElementById("66")
let team7 = document.getElementById("77")
let team8 = document.getElementById("88")
let team9 = document.getElementById("99")
let team10 = document.getElementById("1010")
let team11 = document.getElementById("1111")
let team12 = document.getElementById("1212")

var cantidadteam5 = 0
var cantidadteam6 = 0
var cantidadteam7 = 0
var cantidadteam8 = 0
var cantidadteam9 = 0
var cantidadteam10 = 0
var cantidadteam11 = 0
var cantidadteam12 = 0

btn2.addEventListener('click', function ett(){
    let nombre = player2.value;
    var lista = document.createElement('h4')
    var nodo = document.createTextNode(nombre)


    var posicion=Math.floor(Math.random()*8)+1
    
    

    if(posicion==1 && cantidadteam5<= cantidadteam6 && cantidadteam5 <= cantidadteam7 && cantidadteam5<= cantidadteam8 && cantidadteam5<= cantidadteam9 && cantidadteam5<= cantidadteam10 && cantidadteam5<= cantidadteam11 && cantidadteam5<= cantidadteam12){

    lista.appendChild(nodo)
    team5.appendChild(lista)
    cantidadteam5++
}else if(posicion==2 && cantidadteam6<= cantidadteam5 && cantidadteam6 <= cantidadteam7 && cantidadteam6<= cantidadteam8 && cantidadteam6<= cantidadteam9 && cantidadteam6<= cantidadteam10 && cantidadteam6<= cantidadteam11 && cantidadteam6<= cantidadteam12){

    lista.appendChild(nodo)
    team6.appendChild(lista)
    cantidadteam6++
} else if(posicion==3 && cantidadteam7<= cantidadteam5 && cantidadteam7 <= cantidadteam6 && cantidadteam7<= cantidadteam8 && cantidadteam7<= cantidadteam9 && cantidadteam7<= cantidadteam10 && cantidadteam7<= cantidadteam11 && cantidadteam7<= cantidadteam12){

    lista.appendChild(nodo)
    team7.appendChild(lista)
    cantidadteam7++
}else if(posicion==4 && cantidadteam8<= cantidadteam5 && cantidadteam8 <= cantidadteam6 && cantidadteam8<= cantidadteam7 && cantidadteam8<= cantidadteam9 && cantidadteam8<= cantidadteam10 && cantidadteam8<= cantidadteam11 && cantidadteam8<= cantidadteam12){

    lista.appendChild(nodo)
    team8.appendChild(lista)
    cantidadteam8++
    
        
}else if(posicion==5 && cantidadteam9<= cantidadteam5 && cantidadteam9 <= cantidadteam6 && cantidadteam9<= cantidadteam7 && cantidadteam9<= cantidadteam8 && cantidadteam9<= cantidadteam10 && cantidadteam9<= cantidadteam11 && cantidadteam9<= cantidadteam12){

    lista.appendChild(nodo)
    team9.appendChild(lista)
    cantidadteam9++
} else if(posicion==6 && cantidadteam10<= cantidadteam5 && cantidadteam10 <= cantidadteam6 && cantidadteam10<= cantidadteam7 && cantidadteam10<= cantidadteam8 && cantidadteam10<= cantidadteam9 && cantidadteam10<= cantidadteam11 && cantidadteam10<= cantidadteam12){

    lista.appendChild(nodo)
    team10.appendChild(lista)
    cantidadteam10++
}else if(posicion==7 && cantidadteam11<= cantidadteam5 && cantidadteam11 <= cantidadteam6 && cantidadteam11<= cantidadteam7 && cantidadteam11<= cantidadteam8 && cantidadteam11<= cantidadteam9 && cantidadteam11<= cantidadteam10 && cantidadteam11<= cantidadteam12){

    lista.appendChild(nodo)
    team11.appendChild(lista)
    cantidadteam11++
    
        
}else if(posicion==8 && cantidadteam12<= cantidadteam5 && cantidadteam12 <= cantidadteam6 && cantidadteam12<= cantidadteam7 && cantidadteam12<= cantidadteam8 && cantidadteam12<= cantidadteam9 && cantidadteam12<= cantidadteam10 && cantidadteam12<= cantidadteam11){

    lista.appendChild(nodo)
    team12.appendChild(lista)
    cantidadteam12++
    
        
}else{ett()}
})
const navbar = document.querySelector('.main-nav');
const toggle = document.querySelector('.toggle-btn');

toggle.addEventListener('click', ()=>{
    navbar.classList.toggle('is-open');
})