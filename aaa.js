const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a chave com 43 dígitos: ', (chave) => {
  if (chave.length !== 43) {
    console.log('Chave inválida');
    rl.close();
    return;
  }

  const multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 9];
  let soma = 0;
  for (let i = 0; i < 43; i++) {
    soma += parseInt(chave.charAt(i)) * multiplicadores[i];
  }
  const resto = soma % 11;
  const dv = (resto === 0 || resto === 1) ? 0 : 11 - resto;

  console.log(`${chave}${dv}`);
  rl.close();
});
