let NomeHeroi = "Goku"
let EXP = 9000

let nivel

if (EXP <= 1000){
    nivel = "Ferro"
}
else if (EXP > 1000 && EXP <= 2000){
    nivel = "Bronze"
}
else if (EXP > 2000 && EXP <= 5000){
    nivel = "Prata"
}
else if (EXP > 5000 && EXP <= 7000){
    nivel = "Ouro"
}
else if (EXP > 7000 && EXP <= 8000){
    nivel = "Platina"
}
else if (EXP > 8000 && EXP <= 9000){
    nivel = "Ascendente"
}
else if (EXP > 9000 && EXP <= 10000){
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

console.log(`O herói ${NomeHeroi} tem ${EXP} de experiência e é do nível ${nivel}.`)
console.log("O herói " + NomeHeroi + " tem " + EXP + " de experiência e é do nível " + nivel + ".")