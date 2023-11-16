let vitorias = calc (31, 10);
let nivel = "Nulo";


if (vitorias <= 10) {
    nivel = "Ferro"
} else if (vitorias > 10 && vitorias <= 20){
    nivel = "Bronze"
}else if (vitorias > 20 && vitorias <= 50){
    nivel = "Prata"
}else if (vitorias > 50 && vitorias <= 80){
    nivel = "Ouro"
}else if (vitorias > 80 && vitorias <= 90){
    nivel = "Diamante"
}else if (vitorias > 90 && vitorias <= 100){
    nivel = "Lendario"
}else {
    nivel = "Imortal"
}

console.log("O heroi tem saldo de " + vitorias + " vitorias e está no nivel " + nivel)

function calc (ganha, perde){
    let resultado = ganha - perde
    return resultado
}