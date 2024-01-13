//função do Hello World com JS
function helloWorld(){
    alert("HelloWorld")
}

//Variavel 
let nome = document.getElementById("nome")
//Let nome = <input id="nome" type="text" name="nome">

/*
Case Sensetive = reconhece letras maiuscula e minusculas

por tag: getElementByTagName()
por id: getElementById()
por Nome:getElementeByname()
por Classe: getElementsByClassName() - classe pode ser usado em varias tag - 
por Seletor: querySelector() - Melhor prática
*/ 

function enviar(){
    alert("Olá" + nome.value)
}

let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '18%'
email.style.width = '18%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'nome inválido' 
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }              
}

function validaEmail(){
    let txtEmail  = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.')== -1 ){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color= 'red'
    }else{
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color= 'green'
        emailOk = true
    }

 }

 function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >= 100){  
        txtAssunto.innerHTML = 'Texto é muito grande , digite ao máximo 100 caracteres'
        txtAssunto.style.color = 'red'
    }else{
        txtAssunto.style.display = 'none' 
        assuntoOk = true
    }
 }
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente antes de enviar.');
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}


function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
