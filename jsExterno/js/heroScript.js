let nomePlayer = "altria";
let playerCoin = 5;
let playerVd = 3;
let playerLev = 1;
let playerAtk = 20;
let playerDef = 15;
let dano = playerAtk - playerDef ; 
let playerHp = prompt('informe o HP do personagem:')
  if (playerHp > 0) {
      console.log('o personagem esta vivo ')
  };

console.log(nomePlayer);
console.log('o heroi tem ${playerCoin} e ${playerVd}');
console.log(typeof playerLev);
console.log('dano causado ${dano}');

document.getElementById("botaoAtk").addEventListener("click", function () {
    let nomeHeroi = document.getElementById("nomePlayer").value; // Obtém o nome
    console.log("Ataque realizado!");
    console.log(`Bem-vindo, ${nomePlayer}!`);
  });
  