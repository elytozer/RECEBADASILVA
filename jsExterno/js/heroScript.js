let nomePlayer = "altria";// armazena o nome
let playerCoin = 5;
let playerVd = 3;
let nivel = 15; // Altere o nível do jogador conforme necessário
  if (nivel >= 1 && nivel <= 10) {
    console.log("Fácil");
  } else if (nivel >= 11 && nivel <= 20) {
    console.log("Normal");
  } else if (nivel >= 21) {
    console.log("Difícil");
  } else {
    console.log("Nível inválido");
  }
let playerAtk = 20;
let playerDef = 15;
let dano = playerAtk - playerDef ; 
let playerHp = prompt('informe o HP do personagem:')
  if (playerHp > 0) {
      console.log('o personagem esta vivo ')
  } else console.log('presunto');  
let contador = 5;
  while (contador >= 0) {
      if (contador > 0) {
          console.log(contador);
      } else {
          console.log("Batalha iniciada!");
      }
      contador--;
  }
let inimigos = ["Goblin", "Orc", "Troll"];
  for (let i = 0; i < inimigos.length; i++) {
      console.log(inimigos[i]);
  }
// Exemplo de uso: calcular o dano em um inimigo com defesa 10
let ataque = 20;
let defesaInimigo = 10;
let danoCausado = calcularDano(ataque, defesaInimigo);

console.log(`Dano causado: ${danoCausado}`);


console.log(nomePlayer);
console.log("o heroi tem, ${playerCoin}");
console.log(typeof playerLev);
console.log('dano causado ${dano}');

document.getElementById("botaoAtk").addEventListener("click", function () {
    let nomeHeroi = document.getElementById("nomePlayer").value; // Obtém o nome
    console.log("Ataque realizado!");
    console.log(`Bem-vindo, ${nomePlayer}!`);
  });
  
function calcularDano(ataque, defesa) {
    let dano = ataque - defesa;
    return dano > 0 ? dano : 0; // O dano mínimo é 0 (não pode ser negativo)
}
