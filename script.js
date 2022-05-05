const emailLogin = document.getElementById('inputEmail');
const senhaLogin = document.getElementById('inputSenha');
const botaoLogin = document.getElementById('botaoEntrar');

let valorEmailLogin = emailLogin.value
let valorSenhaLogin = senhaLogin.value

function login() {
  botaoLogin.addEventListener('click', function (){

    if (emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456') {
      alert('Olá, Tryber!') 
      } else {
        alert('Email ou senha inválidos.')
      }
  })
  }

  login();
