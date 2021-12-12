let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')
let p6 = document.getElementById('p6')
let p7 = document.getElementById('p7')
let p8 = document.getElementById('p8')
let p9 = document.getElementById('p9')
let p10 = document.getElementById('p10')
let p13 = document.getElementById('p13')
let p14 = document.getElementById('p14')
let p15 = document.getElementById('p15')
let p16 = document.getElementById('p16')
let btn = document.getElementById("btn")
let modalText = document.getElementById("modalText")
let champion = document.getElementById("champion")
let reset = document.getElementById("reset")
let nombre = document.getElementById("nombre")
let nombre2 = document.getElementById("nombre2")
let btn2 = document.getElementById("btn2")
let nombret = document.getElementById("nombret")
btn.innerHTML="Player"
reset.innerHTML="Reset"
btn2.innerHTML="Torneo"
let cantidadPlayers = 0;
let posicion = [1,2,3,4,5,6,7,8]
let posicionnew=[];

btn.addEventListener('click', function et(){
    let player = nombre.value;
    console.log("longitud:"+posicionnew.length,"lista: ",posicionnew);  
    if (posicionnew.length<8){  
    var posicion2 = Math.floor(Math.random()*8)+1;    
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
    if(posicion2 == 1 && p1.innerHTML == ('') ){	
        p1.innerHTML = player   
    }else if( posicion2 == 2 && p2.innerHTML == ('') ){
        p2.innerHTML = player
    }else if( posicion2 == 3 && p5.innerHTML == ('')){
        p5.innerHTML = player
    }else if( posicion2 == 4 && p6.innerHTML == ('')){
        p6.innerHTML = player
    }else if( posicion2 == 5 && p9.innerHTML == ('')){
        p9.innerHTML = player
    }else if( posicion2 == 6 && p10.innerHTML == ('')){
        p10.innerHTML = player   
    }else if( posicion2 == 7 && p15.innerHTML == ('')){
        p15.innerHTML = player
    }else if( posicion2 == 8 && p16.innerHTML == ('')){
        p16.innerHTML = player
    }
})

document.addEventListener('click', function(e){
    if(e.target.id == 'p1' && p3.innerHTML != p5.innerHTML){
        p3.innerHTML = p1.innerHTML;
        e.target.classList.add('verde')
        p5.innerHTML = 'Afuera'
    }else if(e.target.id == 'p5' && p3.innerHTML != p1.innerHTML){
        p3.innerHTML = p5.innerHTML;
        e.target.classList.add('verde')
        p1.innerHTML = 'Afuera'
    }else if(e.target.id == 'p2' && p4.innerHTML != p6.innerHTML){
        p4.innerHTML = p2.innerHTML;
        e.target.classList.add('verde')
        p6.innerHTML = 'Afuera'
    }else if(e.target.id == 'p6' && p4.innerHTML != p2.innerHTML){
        p4.innerHTML = p6.innerHTML;
        e.target.classList.add('verde')
        p2.innerHTML = 'Afuera'
    }else if(e.target.id == 'p9' && p13.innerHTML != p15.innerHTML){
        p13.innerHTML = p9.innerHTML;
        e.target.classList.add('verde')
        p15.innerHTML = 'Afuera'
    }else if(e.target.id == 'p15' && p13.innerHTML != p9.innerHTML){
        p13.innerHTML = p15.innerHTML;
        e.target.classList.add('verde')
        p9.innerHTML = 'Afuera'
    }else if(e.target.id == 'p10' && p14.innerHTML != p16.innerHTML){
        p14.innerHTML = p10.innerHTML;
        e.target.classList.add('verde')
        p16.innerHTML = 'Afuera'
    }else if(e.target.id == 'p16' && p14.innerHTML != p10.innerHTML){
        p14.innerHTML = p16.innerHTML;
        e.target.classList.add('verde')
        p10.innerHTML = 'Afuera'
    }else if(e.target.id == 'p3' && p7.innerHTML != p13.innerHTML){
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
        p8.innerHTML = 'Cebollita'
        champ()
        modalText.innerHTML = p7.innerHTML;
    }else if(e.target.id == 'p8'){
        p7.innerHTML = 'Cebollita'
        champ()
        modalText.innerHTML = p8.innerHTML;
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
function champ() {

    document.getElementById('champion').classList.add('finish_sub')
}