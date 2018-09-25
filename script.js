
let largura = 0
let altura = 0 

function windowAdjust(){

    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}


function logicaGame(){    
    //remover o mosquito anterior (se existir)   
    if(document.querySelector('#mosca')) { 
document.querySelector('#mosca').remove()
}
let posicaoX = Math.floor(Math.random() * largura) -90;
let posicaoY = Math.floor(Math.random() * altura) -90;
posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY
console.log(posicaoX, posicaoY)
let mosca = document.createElement('img');
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosca'
document.body.appendChild(mosca)

 }

 windowAdjust()
setInterval(function() {
    logicaGame()
 }, 1000)
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    console.log(classe)
    switch(classe){
        case 0:
        return 'mosquito1'
        
        case 1:
        return 'mosquito2'
        
        case 2:
        return 'mosquito3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    console.log(classe)
    switch(classe){
        case 0:
        return 'ladoA'
        
        case 1:
        return 'ladoB'
  
    }
}