const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nome = nomeHeroi;
        this.idade = idadeHeroi;
        this.tipo = tipoHeroi;
    }

    attack_() {
        let power;
        switch (this.tipo) { // Certifique-se de que a comparação seja insensível a maiúsculas
            case "mago":
                power = "magia";
                break;
            case "guerreiro":
                power = "espada";
                break;
            case "monge":
                power = "artes marciais";
                break;
            case "ninja":
                power = "shuriken";
                break;
            default:
                power = "ataque desconhecido"; // Para segurança, adicione um caso padrão
        }
        console.log(`O ${this.tipo} atacou usando ${power}.`);
    }
}

function setHeroi() {
    console.log("Escolha um dos Heróis:\n1. Mago\n2. Guerreiro\n3. Monge\n4. Ninja");

    rl.question("Digite o número da sua escolha: ", (set) => {
        let nomeHeroi;
        let idadeHeroi;
        let tipoHeroi;

        if (set === "1") {
            nomeHeroi = "Thalindra";
            idadeHeroi = 100;
            tipoHeroi = "mago"; // Usando minúsculas para corresponder ao switch
        } else if (set === "2") {
            nomeHeroi = "Lyra";
            idadeHeroi = 250;
            tipoHeroi = "guerreiro"; // Usando minúsculas
        } else if (set === "3") {
            nomeHeroi = "Sora";
            idadeHeroi = 300;
            tipoHeroi = "monge"; // Usando minúsculas
        } else if (set === "4") {
            nomeHeroi = "Kira";
            idadeHeroi = 350;
            tipoHeroi = "ninja"; // Usando minúsculas
        } else {
            console.log("Opção inválida. Tente novamente."); // Mensagem de erro para opção inválida
            setHeroi(); // Chama novamente para tentar novamente
            return; // Saia da função
        }

        const heroi_ = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);
        heroi_.attack_(); // Chama o método de ataque
        rl.close(); // Fecha o readline após definir os valores
    });
}

setHeroi(); // Inicia o processo de escolha do herói
