const emailLogin = document.getElementById('inputEmail');
const senhaLogin = document.getElementById('inputSenha');
const botaoLogin = document.getElementById('botaoEntrar');

function login() {
  botaoLogin.addEventListener('click', () => {
    if (
      emailLogin.value === 'tryber@teste.com' && senhaLogin.value === '123456'
    ) {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
login();
