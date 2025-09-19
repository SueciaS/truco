const cartas = document.querySelector(".cartas");
var ponto_rodada = 1;
function jogar() {}
const a = document.getElementById("aaa");

const truco = document.getElementById("truco");

if (truco) {

truco.addEventListener("click", function () {

    if (ponto_rodada != 9) {


    if (ponto_rodada === 1) {
        ponto_rodada = 0;
    }
    ponto_rodada += 3;
        //onto_rodada += 3;
        //let truco = document.getElementById(truco);
        //truco = ponto_rodada + 3;
    
        const trucoButton = document.getElementById("truco");
        if (trucoButton) {
            trucoButton.textContent = ` (${ponto_rodada+3})`;
            resposta = oponenteResposta(ponto_rodada);
            a.textContent = ` (${resposta})`;
            if (resposta === "Oponente aceita o truco." || resposta === "Oponente pensa... e aceita." || resposta === "Oponente aceita e desafia!") {
                trucoButton.style.display = "none";
            }
        }

        


    
}
 } ) }


 function oponenteResposta(ponto_rodada) {
    let resposta;

    if (ponto_rodada == 3) {
        const opcoes = [
            "Oponente aceita o truco.",
            "Oponente hesita, mas aceita.",
            "Oponente foge do truco.",
            "Oponente pede seis!"
        ];
        resposta = opcoes[Math.floor(Math.random() * opcoes.length)];
    } else if (ponto_rodada <= 6) {
        const opcoes = [
            "Oponente pede nove!",
            "Oponente recua e não aceita.",
            "Oponente pensa... e aceita."
        ];
        resposta = opcoes[Math.floor(Math.random() * opcoes.length)];
    } else {
        const opcoes = [
            "Oponente foge da rodada!",
            "Oponente aceita e desafia!",
            "Oponente pede doze!"
        ];
        resposta = opcoes[Math.floor(Math.random() * opcoes.length)];
    }

    return resposta;
}





cartas.addEventListener(dblclick, jogar() )