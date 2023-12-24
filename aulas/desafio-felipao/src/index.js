//menor que 1000 = ferro
//entre 1001 e 2000 = Bronze
//entre 2001 e 5000 = Prata
//entre 5001 e 7000 = Ouro
//entre 7001 e 8000 = Platina
//entre 8001 e 9000 = Ascendente
//entre 9001 e 10000 = Imortal
//maior que 10001 = Radiante

let xpHeroi = 1001
let nomeHeroi = "Gabriel"
let rankHeroi = ""

//======> modo if, else if, else
// if( xpHeroi <= 1000){
//     rankHeroi = "Ferro"
// } else if( xpHeroi <= 2000){
//     rankHeroi = "Bronze"
// } else if( xpHeroi <= 5000){
//     rankHeroi = "Prata"
// }else if( xpHeroi <= 7000){
//     rankHeroi = "Ouro"
// }else if( xpHeroi <= 8000){
//     rankHeroi = "Platina"
// }else if( xpHeroi <= 9000){
//     rankHeroi = "Ascendente"
// }else if( xpHeroi <= 10000){
//     rankHeroi = "Imortal"
// } else {
//     rankHeroi = "Radiante"
// }

//=========> modo verbouse switch
switch (true){
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        rankHeroi = "Bronze"
        break
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        rankHeroi = "Prata"
        break
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        rankHeroi = "Ouro"
        break
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        rankHeroi = "Platina"
        break
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        rankHeroi = "Ascendente"
        break
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        rankHeroi = "Imortal"
        break
    case xpHeroi > 10000:
        rankHeroi = "Radiante"
        break
    default:
        rankHeroi = "Ferro"  

}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)