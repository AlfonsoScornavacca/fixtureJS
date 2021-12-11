let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p7 = document.getElementById('p7')
let p8 = document.getElementById('p8')
let p13 = document.getElementById('p13')
let p14 = document.getElementById('p14')
let btn = document.getElementById("btn")
let reset = document.getElementById("reset")
let nombre = document.getElementById("nombre")
let nombre2 = document.getElementById("nombre2")
let btn2 = document.getElementById("btn2")
let nombret = document.getElementById("nombret")
btn.innerHTML="Player"
reset.innerHTML="Reset"
btn2.innerHTML="Torneo"
let cantidadPlayers = 0;
let posicion = [1,2,3,4]
let posicionnew=[];

btn.addEventListener('click', function et(){
    let player = nombre.value;
    console.log("longitud:"+posicionnew.length,"lista: ",posicionnew);  
    if (posicionnew.length<4){  
    var posicion2 = Math.floor(Math.random()*4)+1;    
        comprueba(posicion2, posicionnew);  
    }

    function comprueba(posicion2,posicionnew){  
        let norepe=true;
        if (norepe){  
            posicionnew.forEach(function(item){  
        if(posicion2==item){norepe=false}      
        })
        if (norepe){
        posicionnew.push(posicion2);    
        }
        }if(!norepe){et()}
        return posicion2; 
     } 
    if(posicion2 == 1 && p3.innerHTML == ('') ){	
        p3.innerHTML = player   
    }else if( posicion2 == 2 && p4.innerHTML == ('') ){
        p4.innerHTML = player
    }else if( posicion2 == 3 && p13.innerHTML == ('')){
        p13.innerHTML = player
    }else if( posicion2 == 4 && p14.innerHTML == ('')){
        p14.innerHTML = player
    }
})

document.addEventListener('click', function(e){
    if(e.target.id == 'p3' && p7.innerHTML != p13.innerHTML){
        p7.innerHTML = p3.innerHTML;
        e.target.classList.add('verde')
        p13.innerHTML = 'Afuera'
    }else if(e.target.id == 'p13' && p7.innerHTML != p3.innerHTML){
        p7.innerHTML = p13.innerHTML;
        e.target.classList.add('verde')
        p3.innerHTML = 'Afuera'
    }else if(e.target.id == 'p4' && p8.innerHTML != p14.innerHTML){
        p8.innerHTML = p4.innerHTML;
        e.target.classList.add('verde')
        p14.innerHTML = 'Afuera'
    }else if(e.target.id == 'p14' && p8.innerHTML != p4.innerHTML){
        p8.innerHTML = p14.innerHTML;
        e.target.classList.add('verde')
        p4.innerHTML = 'Afuera'
    }else if(e.target.id == 'p7'){
        p7.innerHTML = 'CHAMPION'
        p8.innerHTML = 'Cebollita'
        alert(campeon.innerHTML + ' Sos el mejor')
    }else if(e.target.id == 'p8'){
        p8.innerHTML = 'CHAMPION'
        p7.innerHTML = 'Cebollita'
        alert(campeon.innerHTML + ' Sos el mejor')
        }
})

btn2.addEventListener('click', function(){
    let nombreTorneo = nombre2.value;
    nombret.innerHTML = nombreTorneo;
})

reset.addEventListener('click', function(){
    document.getElementById("form").reset();  
})
const navbar = document.querySelector('.main-nav');
const toggle = document.querySelector('.toggle-btn');

toggle.addEventListener('click', ()=>{
    navbar.classList.toggle('is-open');
})