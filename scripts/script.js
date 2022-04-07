const botao = document.getElementById("botao");

botao.addEventListener("click", (event) => {
  //desabilita a funcao padrão do botao
  event.preventDefault();
});
function validacao() {
  //define as variaveis dos inputs
  const userEmail = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const [user, domain] = userEmail.value.split("@");

  //define as variaveis dos "spans" usados para mensagem de erro e sucesso
  const spanEmail = document.getElementById("spanEmail");
  const spanMensagem = document.getElementById("spanMensagem");
  const textoSucesso = document.getElementById("textoSucesso");

  //define o regex do email
  const regTeste = /^[a-z0-9A-Z.]{1,32}@[a-z0-9]{1,16}\.[a-z]+$/;

  //verifica se os campos estao de acordo com a validacao
  if (userEmail.value === "") {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerText = "";
  } else if (!regTeste.test(userEmail.value)) {
    spanEmail.classList.add("erro");
    userEmail.classList.add("bordaErro");
    textoSucesso.innerText = "";
  } else if (mensagem.value === "") {
    spanMensagem.classList.add("erro");
    mensagem.classList.add("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = "";
  } else {
    spanMensagem.classList.remove("erro");
    mensagem.classList.remove("bordaErro");
    spanEmail.classList.remove("erro");
    userEmail.classList.remove("bordaErro");
    textoSucesso.innerText = "Obrigado pelo contato, " + user + "!";
  }
}
