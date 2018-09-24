
let largura = 0
let altura = 0 

function windowAdjust(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

windowAdjust()

let posicaoX = Math.floor(Math.random() * largura);
let posicaoY = Math.floor(Math.random() * altura);

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

let mosca = document.createElement('img');
mosca.src = 'imagens/mosca.png'
mosca.className = 'mosquito1'
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
document.body.appendChild(mosca)
tamanhoAleatorio();


function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
}