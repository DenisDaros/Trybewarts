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

function submitForm() {
  const botaoSend = document.getElementById('submit-btn');
  botaoSend.addEventListener('click', () => {
    if (document.getElementById('agreement').checked === false) {
      alert('Você precisa concodar com os termos!');
    }
  });
}
submitForm();
