let candidato = "reprovado"; //Criando uma variável para armazenar o estado da pessoa candidata.

switch (
  candidato // Criando uma estrutura condicional com switch/case
) {
  case "aprovado":
    console.log("Você Passou"); // Aqui se imprime a mensagem se a pessoa passou.

    break; // O break serve para parar se a condição estiver correta.
  case "lista":
    console.log("Você está na lista de espera");
    break;

  case "reprovado":
    console.log("Você foi reprovado");
    break;

  default:
    // Quando você colocar algo dentro da variável e não existir ele vai retornar que não se aplica.
    console.log("Não se aplica");
}
